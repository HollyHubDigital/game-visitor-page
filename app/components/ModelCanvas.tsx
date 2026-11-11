'use client';

import { useEffect, useRef } from 'react';

export function ModelCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    let rotation = 0;
    let dragging = false;
    let xBefore = 0;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const handlePointerDown = (event: PointerEvent) => {
      dragging = true;
      xBefore = event.clientX;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!dragging) {
        return;
      }

      const delta = event.clientX - xBefore;
      rotation += delta * 0.015;
      xBefore = event.clientX;
    };

    const handlePointerUp = () => {
      dragging = false;
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      context.fillStyle = 'rgba(255, 255, 255, 0.1)';
      context.fillRect(0, 0, width, height);

      context.save();
      context.translate(width / 2, height / 2 + 20);
      context.rotate(rotation);

      const bodyX = 0;
      const bodyY = 0;
      const bodyW = 90;
      const bodyH = 130;
      const headR = 28;

      context.fillStyle = '#0f172a';
      context.beginPath();
      context.ellipse(bodyX, bodyY - 25, 24, 36, 0, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = '#f1f5f9';
      context.fillRect(bodyX - bodyW / 2, bodyY - 20, bodyW, bodyH);

      context.fillStyle = '#1d4ed8';
      context.fillRect(bodyX - bodyW / 2 + 10, bodyY - 20, bodyW - 20, bodyH - 20);

      context.fillStyle = '#0b1020';
      context.fillRect(bodyX - 18, bodyY + 110, 14, 100);
      context.fillRect(bodyX + 4, bodyY + 110, 14, 100);

      context.fillStyle = '#b91c1c';
      context.fillRect(bodyX - 60, bodyY + 8, 26, 90);
      context.fillRect(bodyX + 34, bodyY + 8, 26, 90);

      context.fillStyle = '#dbeafe';
      context.fillRect(bodyX - 28, bodyY + 110, 18, 90);
      context.fillRect(bodyX + 10, bodyY + 110, 18, 90);

      context.restore();

      requestAnimationFrame(render);
    };

    const frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: 420,
        borderRadius: 26,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(148,163,184,0.12))',
        border: '1px solid rgba(255,255,255,0.38)',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.26)'
      }}
    />
  );
}
