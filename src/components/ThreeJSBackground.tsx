import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate random positions for particles
  const particles = useMemo(() => {
    const temp = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * 10;
      temp[i3 + 1] = (Math.random() - 0.5) * 10;
      temp[i3 + 2] = (Math.random() - 0.5) * 10;
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#64FFDA"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <torusGeometry args={[1, 0.3, 16, 32]} />
      <meshStandardMaterial
        color="#64FFDA"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

export const ThreeJSBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleField />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};