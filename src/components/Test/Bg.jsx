import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const MovingSphere = ({ color, radius, segments }) => {
  const myMesh = useRef();
  const [velocity, setVelocity] = useState([
    (Math.random() - 0.5) * 0.05, 
    (Math.random() - 0.5) * 0.05, 
    0,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVelocity([
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05,
        0,
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (myMesh.current) {
      const { position } = myMesh.current;

      position.x += velocity[0];
      position.y += velocity[1];

      const boundaryX = window.innerWidth / 200;
      const boundaryY = window.innerHeight / 200;

      if (position.x < -boundaryX || position.x > boundaryX) {
        setVelocity(v => [ -v[0], v[1], v[2] ]);
      }
      if (position.y < -boundaryY || position.y > boundaryY) {
        setVelocity(v => [ v[0], -v[1], v[2] ]);
      }
    }
  });

  return (
    <mesh ref={myMesh} position={[0, 0, 0]}>
      <sphereGeometry args={[radius, segments, segments]} />
      <meshStandardMaterial color={color} opacity={0.5} transparent />
    </mesh>
  );
};

const Bg = () => {
  return (
    <Canvas
      style={{ width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight />
      <MovingSphere color="#D467D7" radius={1.7} segments={16} />
      <MovingSphere color="#669FE5" radius={1.2} segments={24} />
      <MovingSphere color="#A9C4EE" radius={2.0} segments={32} />
    </Canvas>
  );
};

export default Bg;
