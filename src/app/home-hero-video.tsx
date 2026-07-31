"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const MAX_PLAYS = 2;

export function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedPlaysRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      videoRef.current?.pause();
    }
  }, []);

  function handleEnded() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    completedPlaysRef.current += 1;

    if (completedPlaysRef.current < MAX_PLAYS) {
      video.currentTime = 0;
      void video.play();
      return;
    }

    setIsPlaying(false);
  }

  function togglePlayback() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      if (video.ended || completedPlaysRef.current >= MAX_PLAYS) {
        completedPlaysRef.current = 0;
        video.currentTime = 0;
      }

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
        playsInline
        preload="metadata"
        poster="/media/home/esther-house-entry-poster.jpg"
        aria-hidden="true"
        onEnded={handleEnded}
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
        aria-label={
          isPlaying ? "Pause background film" : "Play background film"
        }
      >
        {isPlaying ? "PAUSE" : "PLAY"}
      </button>
    </>
  );
}