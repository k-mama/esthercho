// Stage the 57 authenticated, web-optimized photographs before Next.js static export.
import {readdirSync,readFileSync,mkdirSync,writeFileSync} from "node:fs";
import {join,resolve} from "node:path";
const root=process.cwd(),dir=join(root,"assets/family-meals");
const prefix="public/media/esther/family-meals/";
const archives=readdirSync(dir).filter(x=>/^family-meals-media-\d{2}\.zip$/.test(x)).sort();
if(archives.length!==13)throw Error("Expected 13 meal-photo archives, got "+archives.length);
const seen=new Set();
for(const a of archives){
 const buffer=readFileSync(join(dir,a));let p=0;
 while(p+30<=buffer.length&&buffer.readUInt32LE(p)===0x04034b50){
  const method=buffer.readUInt16LE(p+8),flags=buffer.readUInt16LE(p+6),size=buffer.readUInt32LE(p+18),nl=buffer.readUInt16LE(p+26),el=buffer.readUInt16LE(p+28);
  const name=buffer.subarray(p+30,p+30+nl).toString("utf8"),offset=p+30+nl+el;
  if(method!==0||(flags&8)||(offset+size>buffer.length)||!name.startsWith(prefix)||!/^meal-\d{2}\.webp$/.test(name.slice(prefix.length)))throw Error("Unexpected photo path or zip format: "+name);
  const target=resolve(root,name);
  if(!target.startsWith(resolve(root,prefix)))throw Error("Unsafe photo target "+name);
  mkdirSync(resolve(root,prefix),{recursive:true});writeFileSync(target,buffer.subarray(offset,offset+size));
  if(seen.has(name))throw Error("Duplicate photo "+name);
  seen.add(name);p=offset+size;
 }
}
if(seen.size!==57)throw Error("Expected 57 photos, found "+seen.size);
console.log("Validated and staged "+seen.size+" Esther Cho family meal photos.");
