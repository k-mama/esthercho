from pathlib import Path
import cv2
import numpy as np
import sys


def detect(img, source=False):
    gray=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    haar=cv2.CascadeClassifier(cv2.data.haarcascades+'haarcascade_frontalface_default.xml')
    boxes=haar.detectMultiScale(gray,scaleFactor=1.07,minNeighbors=5,minSize=(70,70))
    H,W=img.shape[:2]
    if source:
        arr=[b for b in boxes if .25< (b[0]+b[2]/2)/W<.75 and .25<(b[1]+b[3]/2)/H<.8]
    else:
        arr=[b for b in boxes if .35<(b[0]+b[2]/2)/W<.75 and .08<(b[1]+b[3]/2)/H<.62]
    if not arr: raise RuntimeError('No confident face found; refuse to change image; candidates:'+str(boxes))
    box=sorted(arr,key=lambda b:b[2]*b[3],reverse=True)[0]
    return tuple(map(int,box))

def composite(target_path, ref_path, output_path):
    target=cv2.imread(str(target_path),cv2.IMREAD_COLOR)
    source=cv2.imread(str(ref_path),cv2.IMREAD_COLOR)
    if target is None or source is None:raise RuntimeError('Missing source image')
    sx,sy,sw,sh=detect(source,source=True)
    tx,ty,tw,th=detect(target,source=False)
    print('source face',sx,sy,sw,sh,'target',tx,ty,tw,th)
    # Transform only central facial skin features. Keep original hair, ears, earrings, neck, body and image background.
    # Inner-feature crop accounts for positioning difference between frontal face bounding boxes.
    src_face=source[max(0,sy-int(sh*.08)):min(source.shape[0],sy+int(sh*1.12)),max(0,sx-int(sw*.08)):min(source.shape[1],sx+int(sw*1.08))]
    h,w=src_face.shape[:2]
    scale_x=(tw*1.16)/w
    scale_y=(th*1.16)/h
    desired_w=int(round(w*scale_x));desired_h=int(round(h*scale_y))
    roi=cv2.resize(src_face,(desired_w,desired_h),interpolation=cv2.INTER_CUBIC)
    # Small natural tilt: match center directly without moving neck, torso or hair.
    cx=int(tx+tw*.5);cy=int(ty+th*.51)
    px=cx-desired_w//2;py=cy-desired_h//2
    left=max(px,0);top=max(py,0);right=min(px+desired_w,target.shape[1]);bottom=min(py+desired_h,target.shape[0]);
    if left>=right or top>=bottom:raise RuntimeError('Bad face placement')
    crop=roi[top-py:bottom-py,left-px:right-px]
    # Face-shaped ellipse excludes the original hair and earrings. Feathered mask to preserve photographic context.
    yy,xx=np.ogrid[:bottom-top,:right-left]
    ex=cx-left;ey=cy-top
    rx=tw*.48;ry=th*.47
    dist=((xx-ex)/(rx))**2+((yy-ey)/(ry))**2
    mask=np.clip((1.12-dist)/.35,0,1).astype(np.float32)
    # Color-match gently: adapt face illumination to the real original scene, not to a synthetic re-render.
    actual=target[top:bottom,left:right].astype(np.float32)
    patch=crop.astype(np.float32)
    good=mask>.65
    if good.sum()>300:
        desired=np.mean(actual[good],axis=0); actualsrc=np.mean(patch[good],axis=0)
        patch=np.clip(patch+(desired-actualsrc)*.70,0,255)
    # Preserve source image completely outside the masked face.
    out=target.copy(); blend=patch*mask[...,None]+actual*(1-mask[...,None]);out[top:bottom,left:right]=np.uint8(np.clip(blend,0,255))
    cv2.imwrite(str(output_path),out,[cv2.IMWRITE_JPEG_QUALITY,94]);
    unchanged=np.all(out==target,axis=2)
    print('pixels preserved',float(np.mean(unchanged)), 'total',target.shape, 'modified faces only')
    return out

if __name__=='__main__':composite(sys.argv[1],sys.argv[2],sys.argv[3])