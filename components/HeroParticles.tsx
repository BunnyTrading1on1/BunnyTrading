"use client";

import { useEffect, useRef } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  Clock,
  Color,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
} from "three";

const PARTICLE_COUNT = 140;
const GOLD = new Color("#C08A2E");
const GOLD_LIGHT = new Color("#D9A94A");

export default function HeroParticles() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new Scene();
    const camera = new PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 20;

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const speeds = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 34;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;

      const c = Math.random() > 0.5 ? GOLD : GOLD_LIGHT;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      speeds[i] = 0.15 + Math.random() * 0.35;
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(positions, 3));
    geometry.setAttribute("color", new BufferAttribute(colors, 3));

    const material = new PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });

    const points = new Points(geometry, material);
    scene.add(points);

    let frameId: number;
    const clock = new Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const pos = geometry.attributes.position as BufferAttribute;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const y = pos.getY(i);
        const newY = y + speeds[i] * 0.01;
        pos.setY(i, newY > 10 ? -10 : newY);
        pos.setX(i, pos.getX(i) + Math.sin(elapsed * 0.3 + i) * 0.002);
      }
      pos.needsUpdate = true;

      points.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="hero-particles" aria-hidden="true" />;
}
