"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

export function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      videoRef.current?.pause();
    }
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

  return (
    <>
      <video
        ref={videoRef}
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
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
        aria-label={isPlaying ? "Pause background film" : "Play background film"}
      >
        {isPlaying ? "PAUSE" : "PLAY"}
      </button>
    </>
  );
}
