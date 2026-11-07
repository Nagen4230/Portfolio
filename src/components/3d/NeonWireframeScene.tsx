import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  scrollYProgress?: number;
}

const WireframeCore: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Track normalized mouse coordinates
  React.useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      // Rotation + cursor tilt
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
      
      meshRef.current.rotation.x += (mousePos.current.y * 0.4 - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (mousePos.current.x * 0.4 - meshRef.current.rotation.y) * 0.05;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.4;
      outerRingRef.current.rotation.x += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Central Neon Icosahedron */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[2.0, 1]} />
          <meshBasicMaterial 
            color="#00F0FF" 
            wireframe 
            transparent 
            opacity={0.85} 
          />
        </mesh>
      </Float>

      {/* Outer Gyro Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[3.0, 0.02, 16, 100]} />
        <meshBasicMaterial 
          color="#8B5CF6" 
          transparent 
          opacity={0.4} 
        />
      </mesh>

      {/* Innermost Core Glow Point */}
      <mesh>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial color="#FF2E93" />
      </mesh>
    </group>
  );
};

export const NeonWireframeScene: React.FC<SceneProps> = () => {
  return (
    <div className="w-full h-full relative" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <WireframeCore />
      </Canvas>
      {/* Radial backlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-[80px] pointer-events-none" />
    </div>
  );
};
