import { useRef, useEffect } from 'react';
import p5 from 'p5';

const CanvasBgComponent = () => {
  const sketchRef = useRef(null);

  const vertShader = `
    attribute vec3 aPosition;
    varying vec3 pos;
    uniform float millis;

    void main() {
      pos = aPosition;
      vec4 position = vec4(aPosition, 1.0);
      position.y += sin(millis *10.0+ position.x * 8.0) / 8.0;
      gl_Position = position;
    }
  `;

  const fragShader = `
    precision mediump float;

    void main() {
      vec4 color = vec4(0.0, 0.0, 1.0, 0.5);
      gl_FragColor = color;
    }
  `;

  useEffect(() => {
    const sketch = (p) => {
      let practiceShader;
      let positions = [
        { x: p.random(-300, 300), y: p.random(-200, 200), targetX: p.random(-600, 600), targetY: p.random(-200, 200) },
        { x: p.random(-300, 300), y: p.random(-200, 200), targetX: p.random(-600, 600), targetY: p.random(-200, 200) },
        { x: p.random(-300, 300), y: p.random(-200, 200), targetX: p.random(-600, 600), targetY: p.random(-200, 200) },
      ];

      p.preload = () => {
        practiceShader = p.createShader(vertShader, fragShader);
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
      };

      p.draw = () => {
        p.clear();
        p.shader(practiceShader);

        positions.forEach(pos => {
          pos.x += ((pos.targetX - pos.x) /2.0)*0.1; 
          pos.y += ((pos.targetY - pos.y)/2.0)*0.1; 


          if (p.dist(pos.x, pos.y, pos.targetX, pos.targetY) < 10) {
            pos.targetX = p.random(-500, 500);
            pos.targetY = p.random(-200, 200);
          }
        });

        p.resetShader();
        p.noStroke();
        const radius = p.windowWidth / 6;

        
        drawBlob(p, positions[0], radius, [212, 103, 215], p.millis() * 0.0003);
        drawBlob(p, positions[1], radius, [102, 159, 229], p.millis() * 0.0003); 
        drawBlob(p, positions[2], radius, [169, 196, 238], p.millis() * 0.0003);

        p.filter(p.BLUR, 50);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      function drawBlob(p, pos, r, color, noiseOffset) {
        const vertices = 100; 
        const angleStep = p.TWO_PI / vertices;
        const noiseScale = 1;
        const noiseStrength = r;
        const fillColor = p.color(color[0], color[1], color[2], 1000);

        p.fill(fillColor);
        p.beginShape();
        for (let a = 0; a < p.TWO_PI; a += angleStep) {
          const nx = p.cos(a) * noiseScale + noiseOffset;
          const ny = p.sin(a) * noiseScale + noiseOffset;
          const noiseValue = p.noise(nx, ny);
          const radius = r + (noiseValue - 0.5) * noiseStrength;
          const vx = pos.x + p.cos(a) * radius;
          const vy = pos.y + p.sin(a) * radius;
          p.vertex(vx, vy);
        }
        p.endShape(p.CLOSE);
      }
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, [fragShader, vertShader]); 

  return (
    <div className='h-full w-full overflow-hidden'>
      <div ref={sketchRef} className='h-screen w-screen fixed top-0 left-0 z-[-1] overflow-hidden' />
    </div>
  );
};

export default CanvasBgComponent;
