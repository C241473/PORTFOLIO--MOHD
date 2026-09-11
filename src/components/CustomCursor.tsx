import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  const posRef = useRef({ x: -100, y: -100 });
  const trailingRef = useRef({ x: -100, y: -100 });
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.glow-card') ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };
    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  // Ultra-smooth 60fps hardware accelerated RAF animation loop
  useEffect(() => {
    let animationFrameId: number;

    const render = () => {
      trailingRef.current.x += (posRef.current.x - trailingRef.current.x) * 0.35;
      trailingRef.current.y += (posRef.current.y - trailingRef.current.y) * 0.35;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${trailingRef.current.x}px, ${trailingRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${trailingRef.current.x}px, ${trailingRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block overflow-hidden">
      {/* Outer Holographic Golden Orbit Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 flex items-center justify-center transition-[width,height,border-color,background-color,box-shadow] duration-200 ease-out will-change-transform ${
          isHovered
            ? 'h-16 w-16 border-2 border-emerald-400 bg-emerald-400/10 shadow-[0_0_30px_rgba(0,230,118,0.7)]'
            : isClicked
            ? 'h-9 w-9 border border-amber-400 bg-amber-400/20'
            : 'h-12 w-12 border border-amber-400/60 shadow-[0_0_18px_rgba(245,158,11,0.4)]'
        } rounded-full`}
      >
        {/* Holographic Diamond Orbit Markers */}
        <span className="absolute -top-1 font-mono text-[0.55rem] text-amber-400">✦</span>
        <span className="absolute -bottom-1 font-mono text-[0.55rem] text-amber-400">✦</span>
        <span className="absolute -left-1 font-mono text-[0.55rem] text-emerald-400">✦</span>
        <span className="absolute -right-1 font-mono text-[0.55rem] text-emerald-400">✦</span>
      </div>

      {/* Central Precision Emerald Sparkle Core */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 rounded-full transition-[width,height,background-color,box-shadow] duration-100 will-change-transform ${
          isHovered
            ? 'h-4 w-4 bg-amber-400 shadow-[0_0_15px_#f59e0b]'
            : 'h-3 w-3 bg-emerald-400 shadow-[0_0_12px_#00e676]'
        }`}
      />
    </div>
  );
};
