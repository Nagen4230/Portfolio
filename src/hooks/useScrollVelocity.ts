import { useEffect, useState } from 'react';

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let frameId: number;

    const checkVelocity = () => {
      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastTime;

      if (deltaTime > 0) {
        const currentVelocity = (deltaY / deltaTime) * 15;
        setVelocity((prev) => prev * 0.8 + currentVelocity * 0.2);
      }

      lastScrollY = currentScrollY;
      lastTime = currentTime;
      frameId = requestAnimationFrame(checkVelocity);
    };

    frameId = requestAnimationFrame(checkVelocity);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return velocity;
}
