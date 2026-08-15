"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

interface HomeHeroVideoProps {
  locale?: "en" | "ko";
}

export function HomeHeroVideo({
  locale = "en",
}: HomeHeroVideoProps) {
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

  const pauseLabel =
    locale === "ko" ? "배경 영상 정지" : "Pause background film";
  const playLabel =
    locale === "ko" ? "배경 영상 재생" : "Play background film";

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
        aria-label={isPlaying ? pauseLabel : playLabel}
      >
        {locale === "ko"
          ? isPlaying
            ? "정지"
            : "재생"
          : isPlaying
            ? "PAUSE"
            : "PLAY"}
      </button>
    </>
  );
}
