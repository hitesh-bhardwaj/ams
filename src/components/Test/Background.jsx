import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GUI from 'lil-gui';

const Background = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
    camera.position.z =1;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Clock
    const clock = new THREE.Clock();

    // Material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uViewportSize: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        uDelta: {
          value: 0.0,
        },
        uSpeed: {
          value: 0.5,
        },
        uColor1: {
          value: new THREE.Color("#ffffff"),
        },
        uColor2: {
          value: new THREE.Color("#D467D7"),
        },
        uColor3: {
          value: new THREE.Color("#ffffff"),
        },
        uColor4: {
          value: new THREE.Color("#669FE5"),
        },
        uColor5: {
          value: new THREE.Color("#ffffff"),
        },
      },
      fragmentShader: `
      uniform vec2 uViewportSize;
      uniform float uDelta;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform vec3 uColor4;
      uniform vec3 uColor5;
      uniform float uSpeed;
    
      varying vec2 vUv;
    
      vec2 wobble(vec2 p, float frequency, float amplitude, float speed) {
        p.x += sin(p.y * frequency + uDelta * speed) / amplitude;
        p.y += sin(p.x * frequency * 1.5 + uDelta * speed) / (amplitude * 0.25);
        return p;
      }
    
      void main() {
        vec2 uv = vUv - vec2(.5);
        float ratio = uViewportSize.x / uViewportSize.y;
    
        vec2 offset1 = vec2(sin(uDelta * 1.2 + uv.x) * .1, cos(uDelta * 0.5 + uv.x) * 0.1); // Smaller offset
        vec2 offset2 = vec2(cos(uDelta * 0.8 + uv.x) * 0.1, sin(uDelta * 1.5 + uv.x) * 0.1); // Smaller offset
    
        float angle1 = radians(.0) - radians(uDelta * -36. * uSpeed) + atan(uv.y, uv.x);
        float angle2 = radians(90.0) - radians(-1. * uDelta * -28. * uSpeed) + atan(uv.y, uv.x);
        float angle3 = radians(90.0) - radians(uDelta * 42. * uSpeed) + atan(uv.y, uv.x);
    
        float len = length(uv)*0.3;
    
        // Increased amplitude to make the circles smaller
        vec2 uv1 = wobble(vec2(cos(angle1) * len, sin(angle1) * len), 3., 72., .5 * uSpeed) + offset1; 
        vec2 uv2 = wobble(vec2(cos(angle2) * len, sin(angle2) * len), 4., 64., .7 * uSpeed) - offset2; 
        vec2 uv3 = wobble(vec2(cos(angle3) * len, sin(angle3) * len), 2., 80., .2 * uSpeed) + offset1 * offset2; 
    
        // Tighter blending ranges to make the circles smaller
        float blendHorz1 = smoothstep(-.15, .1, uv1.x); 
        float blendHorz2 = smoothstep(-.25, .1, uv2.x); 
        float blendVert = smoothstep(.2, -.15, uv3.y); 
    
        vec3 cx1 = mix(uColor1, uColor2, blendHorz1);
        vec3 cx2 = mix(uColor3, uColor4, blendHorz2);
        vec3 col = mix(cx1, cx2, blendVert);
    
        vec4 highlight = mix(vec4(0.), vec4(uColor5, 1.), smoothstep(-.25, .15, uv2.x * uv1.y) * smoothstep(-.1, .2, uv3.x * uv2.y));
        
        gl_FragColor = mix(vec4(col, 1.), highlight, highlight.a);
      }
    `
,    
      vertexShader: `
        varying vec3 vNormal;
        varying vec2 vUv;

        void main() {
          vNormal = normal;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
    });

    // Mesh
    const geometry = new THREE.PlaneGeometry(2, 2);
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Animation Loop
    const animate = () => {
      material.uniforms.uDelta.value += clock.getDelta();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default Background;
