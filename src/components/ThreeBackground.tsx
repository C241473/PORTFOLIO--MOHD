import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  isDark?: boolean;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ isDark = true }) => {
  const mountRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = mountRef.current;
    if (!canvas) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 16;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Dynamic Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(isDark ? 0x00e676 : 0x00a859, 4, 60);
    pointLight1.position.set(8, 12, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(isDark ? 0xf59e0b : 0xd97706, 4, 60);
    pointLight2.position.set(-10, -8, 8);
    scene.add(pointLight2);

    // UNIQUE 3D FEATURE: Floating Quantum Diamond Crystal Cluster
    const diamondGroup = new THREE.Group();

    // Main Central Dual Diamond (Octahedron)
    const diamondGeo = new THREE.OctahedronGeometry(3.5, 0);
    const diamondMat = new THREE.MeshPhongMaterial({
      color: isDark ? 0x00e676 : 0x00a859,
      emissive: isDark ? 0x004d26 : 0x003319,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.35 : 0.22,
      shininess: 100,
    });
    const mainDiamond = new THREE.Mesh(diamondGeo, diamondMat);
    diamondGroup.add(mainDiamond);

    // Inner Floating Gold Core Octahedron
    const innerGeo = new THREE.OctahedronGeometry(1.8, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: isDark ? 0xf59e0b : 0xd97706,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.45 : 0.3,
    });
    const innerDiamond = new THREE.Mesh(innerGeo, innerMat);
    diamondGroup.add(innerDiamond);

    // Surrounding Floating Orbital Rings (Toroidal Galaxy Belt)
    const torusGeo1 = new THREE.TorusGeometry(5.8, 0.08, 16, 100);
    const torusMat1 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x00e676 : 0x00a859,
      transparent: true,
      opacity: isDark ? 0.25 : 0.15,
    });
    const torusRing1 = new THREE.Mesh(torusGeo1, torusMat1);
    torusRing1.rotation.x = Math.PI / 3;
    diamondGroup.add(torusRing1);

    const torusGeo2 = new THREE.TorusGeometry(7.2, 0.05, 16, 100);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: isDark ? 0xf59e0b : 0xd97706,
      transparent: true,
      opacity: isDark ? 0.2 : 0.12,
    });
    const torusRing2 = new THREE.Mesh(torusGeo2, torusMat2);
    torusRing2.rotation.y = Math.PI / 4;
    diamondGroup.add(torusRing2);

    scene.add(diamondGroup);

    // UNIQUE 3D FEATURE: Dynamic Interactive Particle Wave Ribbon (300 particles in a flowing sine-wave grid)
    const waveCount = 350;
    const waveGeo = new THREE.BufferGeometry();
    const wavePositions = new Float32Array(waveCount * 3);
    const waveColors = new Float32Array(waveCount * 3);

    const emeraldColor = isDark ? new THREE.Color('#00e676') : new THREE.Color('#00a859');
    const goldColor = isDark ? new THREE.Color('#f59e0b') : new THREE.Color('#d97706');

    for (let i = 0; i < waveCount; i++) {
      const x = (Math.random() - 0.5) * 35;
      const y = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 20;

      wavePositions[i * 3] = x;
      wavePositions[i * 3 + 1] = y;
      wavePositions[i * 3 + 2] = z;

      const mix = emeraldColor.clone().lerp(goldColor, (x + 17.5) / 35);
      waveColors[i * 3] = mix.r;
      waveColors[i * 3 + 1] = mix.g;
      waveColors[i * 3 + 2] = mix.b;
    }

    waveGeo.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    waveGeo.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));

    const waveMat = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.85 : 0.6,
      blending: THREE.AdditiveBlending,
    });

    const waveParticles = new THREE.Points(waveGeo, waveMat);
    scene.add(waveParticles);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;

      pointLight1.position.x = mouseX * 14;
      pointLight1.position.y = -mouseY * 14;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Rotate Main Diamond Cluster
      diamondGroup.rotation.y = elapsedTime * 0.15 + targetX * 0.5;
      diamondGroup.rotation.x = elapsedTime * 0.1 + targetY * 0.5;

      mainDiamond.rotation.z = elapsedTime * 0.2;
      innerDiamond.rotation.y = -elapsedTime * 0.3;

      torusRing1.rotation.z = elapsedTime * 0.25;
      torusRing2.rotation.x = elapsedTime * 0.2;

      // Animate Wave Particles with Sine Motion
      const positionsAttr = waveGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < waveCount; i++) {
        const x = positionsAttr.getX(i);
        const y = Math.sin(elapsedTime * 1.5 + x * 0.3) * 1.2;
        positionsAttr.setY(i, y + (Math.random() - 0.5) * 0.02);
      }
      positionsAttr.needsUpdate = true;

      waveParticles.rotation.y = elapsedTime * 0.03 + targetX * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      diamondGeo.dispose();
      innerGeo.dispose();
      torusGeo1.dispose();
      torusGeo2.dispose();
      waveGeo.dispose();
      diamondMat.dispose();
      innerMat.dispose();
      torusMat1.dispose();
      torusMat2.dispose();
      waveMat.dispose();
    };
  }, [isDark]);

  return (
    <canvas
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80 dark:opacity-95 transition-opacity duration-700"
    />
  );
};
