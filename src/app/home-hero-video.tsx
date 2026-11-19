"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

import { localeFromPath, type SiteLocale } from "@/config/languages";
import { usePathname } from "next/navigation";

interface HomeHeroVideoProps {
  locale?: SiteLocale;
}

export function HomeHeroVideo({
  locale,
}: HomeHeroVideoProps) {
  const pathname = usePathname();
  const activeLocale = locale ?? localeFromPath(pathname);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const startFilm = () => {
      void video.play().catch(() => {
        setIsPlaying(false);
      });
    };

    startFilm();
    video.addEventListener("canplay", startFilm);

    return () => {
      video.removeEventListener("canplay", startFilm);
    };
  }, []);

  function togglePlayback() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
      return;
    }

    video.pause();
  }

  const controls: Record<SiteLocale, {pause:string; play:string; pauseShort:string; playShort:string}> = {
    en: {pause:"Pause background film",play:"Play background film",pauseShort:"PAUSE",playShort:"PLAY"},
    ko: {pause:"배경 영상 정지",play:"배경 영상 재생",pauseShort:"정지",playShort:"재생"},
    de: {pause:"Hintergrundfilm anhalten",play:"Hintergrundfilm abspielen",pauseShort:"PAUSE",playShort:"ABSPIELEN"},
    es: {pause:"Pausar el vídeo de fondo",play:"Reproducir el vídeo de fondo",pauseShort:"PAUSA",playShort:"REPRODUCIR"},
    fr: {pause:"Mettre la vidéo en pause",play:"Reprendre la vidéo",pauseShort:"PAUSE",playShort:"LECTURE"},
    it: {pause:"Metti in pausa il video",play:"Riprendi il video",pauseShort:"PAUSA",playShort:"RIPRENDI"},
    ja: {pause:"背景動画を一時停止",play:"背景動画を再生",pauseShort:"一時停止",playShort:"再生"},
  };
  const copy = controls[activeLocale];

  return (
    <>
      <video
        ref={videoRef}
        className={styles.heroVideo}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        poster="/media/home/esther-house-entry-poster.jpg"
        aria-hidden="true"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="/media/home/esther-house-entry.mp4"
          type="video/mp4"
        />
      </video>

      <button
        type="button"
        className={styles.videoControl}
        onClick={togglePlayback}
        aria-label={isPlaying ? copy.pause : copy.play}
      >
        {isPlaying ? copy.pauseShort : copy.playShort}
      </button>
    </>
  );
}
