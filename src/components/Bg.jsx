import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Color, Vector3 } from 'three';

const Orb = ({ initialPosition, color }) => {
    const ref = useRef();
    const [direction, setDirection] = useState(new Vector3(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
    ).normalize());

    const boundary = 100;
    useFrame(() => {
        ref.current.position.addScaledVector(direction, 0.5);

        if (Math.abs(ref.current.position.x) > boundary) {
            direction.x = -direction.x;
            ref.current.position.x = Math.sign(ref.current.position.x) * boundary; 
        }
        if (Math.abs(ref.current.position.y) > boundary) {
            direction.y = -direction.y; 
            ref.current.position.y = Math.sign(ref.current.position.y) * boundary; 
        }
        if (Math.abs(ref.current.position.z) > boundary) {
            direction.z = -direction.z; 
            ref.current.position.z = Math.sign(ref.current.position.z) * boundary; 
        }
    });

    return (
        <mesh ref={ref} position={initialPosition}>
            <sphereGeometry args={[20, 64, 64]} />
            <meshStandardMaterial color={new Color(color)} transparent opacity={0.7} />
        </mesh>
    );
};

const RandomOrbs = () => {
    const colors = ['#D467D7', '#669FE5', '#669FE5']; 
    return (
        <>
            {colors.map((color, index) => (
                <Orb 
                    key={index} 
                    initialPosition={[
                        Math.random() * 80 - 40, 
                        Math.random() * 80 - 40,
                        Math.random() * 80 - 40
                    ]}
                    color={color} 
                />
            ))}
        </>
    );
};

export default function Bg() {
    return (
        <div className='h-screen w-screen blur-[50px] z-[-1] fixed top-0 left-0 '>
            <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                <ambientLight intensity={3} />
                <pointLight position={[10, 10, 10]} />
                <RandomOrbs />
            </Canvas>
        </div>
    );
}
