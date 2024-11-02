import React, { useEffect, useRef } from 'react';

export function BackgroundEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Matrix-like rain effect
    const chars = "0123456789ABCDEF";
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      

      ctx.fillStyle = '#FF00FF';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []); // Leaving dependency array empty as canvasRef does not change

  return (
    <>
      {/* Matrix Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 opacity-20 pointer-events-none"
      />

      {/* Cyber Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-float"
          style={{ 
            background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))',
            animation: 'float 6s ease-in-out infinite'
          }} 
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            background: 'linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2))',
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '-3s'
          }} 
        />
      </div>

      {/* Scanlines */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 2px)',
          backgroundSize: '100% 2px',
          animation: 'scan 10s linear infinite'
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="fixed inset-0"
        style={{
          background: `
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          opacity: 0.5
        }}
      />
    </>
  );
}
