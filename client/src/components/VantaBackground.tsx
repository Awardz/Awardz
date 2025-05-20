import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'; // Three.js is required for Vanta
import NET from 'vanta/dist/vanta.net.min'; // Choose your effect (NET, WAVES, etc.)

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    // Initialize Vanta effect
    const effect = NET({
      el: vantaRef.current,
      THREE: THREE, // Pass Three.js instance
      color: 0xab1cff, // Purple
      backgroundColor: 0x0, // Light slate-50
      points: 12, // Number of particles/nodes
      maxDistance: 20, // Connection distance
    });

    setVantaEffect(effect);

    // Cleanup on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
}