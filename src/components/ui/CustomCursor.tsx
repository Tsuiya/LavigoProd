"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e: MouseMoveEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Cast as type since standard clientX/clientY are on MouseEvent
    type MouseMoveEvent = {
      clientX: number;
      clientY: number;
    };

    window.addEventListener("mousemove", handleMouseMove as unknown as EventListener);

    let animationFrameId: number;

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Attach hover classes
    const attachHoverEvents = () => {
      const interactives = document.querySelectorAll(
        ".cursor-interactive, a, button, select, input, textarea"
      );
      interactives.forEach((el) => {
        const handleMouseEnter = () => {
          cursor.classList.add("cursor-hover");
          follower.classList.add("follower-hover");
        };
        const handleMouseLeave = () => {
          cursor.classList.remove("cursor-hover");
          follower.classList.remove("follower-hover");
        };
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Run initially
    attachHoverEvents();

    // Re-attach if DOM changes (useful in SPA client navigation)
    const observer = new MutationObserver(attachHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove as unknown as EventListener);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef} id="customCursor"></div>
      <div className="custom-cursor-follower" ref={followerRef} id="customCursorFollower"></div>
    </>
  );
}
