import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { useRef } from 'react';
import SimplexNoise from 'simplex-noise';
import { KawaseBlur } from '@react-three/postprocessing';
import { ShaderMaterial, Color } from 'three';

// Vertex Shader
const vertexShader = `
    varying vec3 vPosition;
    void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 10.0; // Control the size of the point
    }
`;

// Fragment Shader
const fragmentShader = `
    varying vec3 vPosition;
    uniform vec3 color; // Accept a color uniform
    void main() {
        float intensity = 1.0 - length(vPosition) / 50.0; // Adjust based on distance
        gl_FragColor = vec4(intensity * color, 0.825); // Use the uniform color with opacity
    }
`;

const Orb = ({ position, color }) => {
    const ref = useRef();
    const simplex = new SimplexNoise();
    const radius = Math.random() * 20 + 10; // Random radius for the orb
    const xOffset = Math.random() * 100;
    const yOffset = Math.random() * 100;

    const material = useRef(new ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        uniforms: {
            color: { value: new Color(color) },
        },
    })).current;

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const noise = simplex.noise2D(xOffset + t * 0.05, yOffset + t * 0.05);
        ref.current.position.x = position[0] + noise * 10;
        ref.current.position.y = position[1] + noise * 10;
        ref.current.scale.set(noise * 0.5 + 0.5, noise * 0.5 + 0.5, noise * 0.5 + 0.5);
    });

    return (
        <mesh ref={ref} position={position} material={material}>
            <sphereBufferGeometry args={[radius, 32, 32]} />
        </mesh>
    );
};

const BlurredOrbs = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff']; // Orb colors
    return (
        <>
            {colors.map((color, index) => (
                <Orb key={index} position={[Math.random() * 50 - 25, Math.random() * 50 - 25, Math.random() * 50 - 25]} color={color} />
            ))}
        </>
    );
};

export default function Bg() {
    return (
        <div className='h-screen w-screen'>
            <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <BlurredOrbs />
                <KawaseBlur blur={10} blurScale={4} />
                <OrbitControls />
                <Html center>
                    <h1 style={{ color: 'white' }}>Kawase Blur Effect</h1>
                </Html>
            </Canvas>
        </div>
    );
}
