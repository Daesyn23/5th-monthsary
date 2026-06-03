"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { musicYoutubeId } from "@/config/images";

type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  unMute: () => void;
  destroy: () => void;
};

type YTPlayerEvent = { data: number };

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string,
        options: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (event: { target: YTPlayer }) => void;
            onStateChange?: (event: YTPlayerEvent) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: { PLAYING: number; PAUSED: number; ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const YT_PLAYING = 1;

export function MusicToggle() {
  const playerRef = useRef<YTPlayer | null>(null);
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false);

  const startMusic = useCallback((player: YTPlayer) => {
    player.unMute?.();
    player.playVideo();
  }, []);

  const initPlayer = useCallback(() => {
    if (playerRef.current || !window.YT?.Player) return;

    playerRef.current = new window.YT.Player("yt-background-player", {
      videoId: musicYoutubeId,
      playerVars: {
        autoplay: 1,
        mute: 0,
        loop: 1,
        playlist: musicYoutubeId,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
      },
      events: {
        onReady: (event) => {
          setReady(true);
          startMusic(event.target);
        },
        onStateChange: (event: YTPlayerEvent) => {
          setPlaying(event.data === YT_PLAYING);
        },
      },
    });
  }, [startMusic]);

  useEffect(() => {
    if (window.YT?.Player) {
      initPlayer();
    } else {
      const existing = document.querySelector('script[src*="youtube.com/iframe_api"]');
      if (!existing) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // Fallback if browser blocks autoplay — start on first interaction
    const tryPlayOnInteraction = () => {
      const player = playerRef.current;
      if (player?.playVideo) startMusic(player);
    };
    document.addEventListener("click", tryPlayOnInteraction, { once: true });
    document.addEventListener("touchstart", tryPlayOnInteraction, { once: true });

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [initPlayer, startMusic]);

  const toggle = () => {
    const player = playerRef.current;
    if (!player?.playVideo) return;

    if (playing) {
      player.pauseVideo();
    } else {
      startMusic(player);
    }
  };

  return (
    <>
      <div
        id="yt-background-player"
        className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0"
        aria-hidden="true"
      />
      <button
        onClick={toggle}
        disabled={!ready}
        className="fixed bottom-6 right-6 z-[9998] flex h-12 w-12 items-center justify-center rounded-full glass-card text-lg transition-transform hover:scale-110 active:scale-95 disabled:opacity-50"
        aria-label={playing ? "Pause music" : "Play music"}
        title={
          ready
            ? playing
              ? "Pause — Libu-Libong Buwan 🎹"
              : "Play — Libu-Libong Buwan 🎹"
            : "Loading music…"
        }
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}
