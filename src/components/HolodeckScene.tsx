'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import * as THREE from 'three';
import { projects } from '@/data/projects';

// Curated, visually strong projects for the gallery. Driven by real data so
// slugs/images stay correct. Falls back gracefully if any are missing.
const FEATURED_SLUGS = [
  'four-seasons-lake-austin',
  'a-christmas-carol-vr',
  'the-orchard',
  'in-the-current-of-being',
  'ghosted',
  'song-of-the-ambassadors',
  'intel-project-arena',
  'body-of-mine',
  'star-wars-halcyon-vr',
  'statue-of-liberty-museum',
];

type Panel = { slug: string; name: string; image: string };

const FEATURED: Panel[] = FEATURED_SLUGS
  .map((s) => projects.find((p) => p.slug === s))
  .filter((p): p is NonNullable<typeof p> => Boolean(p && p.image))
  .map((p) => ({ slug: p.slug, name: p.name, image: p.image }));

interface Props {
  onReady?: () => void;
  onError?: () => void;
  onHover?: (name: string | null) => void;
}

export default function HolodeckScene({ onReady, onError, onHover }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch {
      onError?.();
      return;
    }

    const width = mount.clientWidth;
    const height = mount.clientHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x0c0c0e, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.touchAction = 'pan-y';

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0c0c0e, 9, 26);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 1.6, 12);

    // ── Floor grids (the "holodeck" feel) ──
    const grid = new THREE.GridHelper(60, 60, 0xfe00b5, 0x1d1d27);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.55;
    grid.position.y = -2.4;
    scene.add(grid);

    const grid2 = new THREE.GridHelper(60, 12, 0x3500a7, 0x15151c);
    (grid2.material as THREE.Material).transparent = true;
    (grid2.material as THREE.Material).opacity = 0.4;
    grid2.position.y = -2.39;
    scene.add(grid2);

    // ── Atmospheric glow sprite behind the ring ──
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = glowCanvas.height = 256;
    const gctx = glowCanvas.getContext('2d')!;
    const grad = gctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, 'rgba(254,0,181,0.55)');
    grad.addColorStop(0.4, 'rgba(83,0,167,0.22)');
    grad.addColorStop(1, 'rgba(12,12,14,0)');
    gctx.fillStyle = grad;
    gctx.fillRect(0, 0, 256, 256);
    const glowTex = new THREE.CanvasTexture(glowCanvas);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, transparent: true, depthWrite: false }));
    glow.scale.set(26, 26, 1);
    glow.position.set(0, 1, -6);
    scene.add(glow);

    // ── Project panels arranged in a ring ──
    const ring = new THREE.Group();
    scene.add(ring);

    const loader = new THREE.TextureLoader();
    const RADIUS = 7.2;
    const BASE_H = 2.1;
    const panelMeshes: THREE.Mesh[] = [];
    const baseY: number[] = [];
    const meshScaleX: number[] = [];

    const count = FEATURED.length;
    FEATURED.forEach((item, i) => {
      const theta = (i / count) * Math.PI * 2;
      const group = new THREE.Group();
      group.position.set(Math.sin(theta) * RADIUS, 0, Math.cos(theta) * RADIUS);
      group.rotation.y = theta; // face outward toward an orbiting camera

      // Frame (slightly larger, brand-tinted, glows on hover)
      const frameMat = new THREE.MeshBasicMaterial({ color: 0x2a2a33 });
      const frame = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), frameMat);
      frame.scale.set(BASE_H * 1.6 + 0.18, BASE_H + 0.18, 1);
      frame.position.z = -0.02;
      group.add(frame);

      // Image panel
      const mat = new THREE.MeshBasicMaterial({ color: 0x111114 });
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
      panel.scale.set(BASE_H * 1.6, BASE_H, 1);
      panel.userData = { slug: item.slug, name: item.name, frame, index: i };
      group.add(panel);

      ring.add(group);
      panelMeshes.push(panel);
      baseY.push(0);
      meshScaleX.push(BASE_H * 1.6);

      loader.load(
        item.image,
        (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          const img = tex.image as { width: number; height: number };
          const aspect = img && img.width && img.height ? img.width / img.height : 1.6;
          const w = BASE_H * aspect;
          panel.scale.set(w, BASE_H, 1);
          frame.scale.set(w + 0.18, BASE_H + 0.18, 1);
          meshScaleX[i] = w;
          mat.map = tex;
          mat.color.set(0xffffff);
          mat.needsUpdate = true;
        },
        undefined,
        () => {
          // keep the placeholder panel if an image fails
        },
      );
    });

    // ── Interaction state ──
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(-2, -2);
    let hovered: THREE.Mesh | null = null;
    let ringRot = 0;
    let ringVel = 0;
    let dragging = false;
    let lastX = 0;
    let downX = 0;
    let downY = 0;
    let moved = 0;
    const targetCam = new THREE.Vector2(0, 1.6);

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      downX = e.clientX;
      downY = e.clientY;
      moved = 0;
    };
    const onPointerMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetCam.x = pointer.x * 1.6;
      targetCam.y = 1.6 + pointer.y * 0.5;
      if (dragging) {
        const dx = e.clientX - lastX;
        lastX = e.clientX;
        ringVel += dx * 0.0007;
        moved += Math.abs(dx);
      }
    };
    const onPointerUp = (e: PointerEvent) => {
      dragging = false;
      const dist = Math.hypot(e.clientX - downX, e.clientY - downY);
      if (dist < 6 && hovered) {
        const slug = (hovered.userData as { slug: string }).slug;
        router.push(`/portfolio/${slug}`);
      }
    };
    const onPointerLeave = () => {
      dragging = false;
      pointer.set(-2, -2);
      targetCam.set(0, 1.6);
    };

    const el = renderer.domElement;
    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointerleave', onPointerLeave);

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // ── Render loop ──
    const clock = new THREE.Clock();
    let raf = 0;
    let signalledReady = false;
    const autoSpeed = reduceMotion ? 0 : 0.0008;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      ringRot += autoSpeed + ringVel;
      ringVel *= 0.92;
      ring.rotation.y = ringRot;

      // Bob panels (skip if reduced motion)
      if (!reduceMotion) {
        for (let i = 0; i < panelMeshes.length; i++) {
          panelMeshes[i].parent!.position.y = Math.sin(t * 1.1 + i * 0.7) * 0.09;
        }
      }

      // Camera parallax
      camera.position.x += (targetCam.x - camera.position.x) * 0.05;
      camera.position.y += (targetCam.y - camera.position.y) * 0.05;
      camera.lookAt(0, 0.2, 0);

      // Hover via raycast
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(panelMeshes, false);
      const hit = hits.length ? (hits[0].object as THREE.Mesh) : null;
      if (hit !== hovered) {
        if (hovered) {
          const f = (hovered.userData as { frame: THREE.Mesh }).frame;
          (f.material as THREE.MeshBasicMaterial).color.set(0x2a2a33);
        }
        hovered = hit;
        if (hovered) {
          const f = (hovered.userData as { frame: THREE.Mesh }).frame;
          (f.material as THREE.MeshBasicMaterial).color.set(0xfe00b5);
          onHover?.((hovered.userData as { name: string }).name);
          el.style.cursor = 'pointer';
        } else {
          onHover?.(null);
          el.style.cursor = dragging ? 'grabbing' : 'grab';
        }
      }

      // Hover scale lerp
      for (let i = 0; i < panelMeshes.length; i++) {
        const m = panelMeshes[i];
        const target = m === hovered ? 1.08 : 1.0;
        const cur = m.scale.x / meshScaleX[i];
        const next = cur + (target - cur) * 0.12;
        m.scale.set(meshScaleX[i] * next, BASE_H * next, 1);
      }

      renderer.render(scene, camera);

      if (!signalledReady) {
        signalledReady = true;
        onReady?.();
      }
    };
    tick();

    el.style.cursor = 'grab';

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('resize', onResize);
      scene.traverse((obj) => {
        const anyObj = obj as unknown as { geometry?: THREE.BufferGeometry; material?: THREE.Material | THREE.Material[] };
        anyObj.geometry?.dispose();
        const mat = anyObj.material;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else if (mat) {
          const mm = mat as THREE.MeshBasicMaterial;
          mm.map?.dispose();
          mm.dispose();
        }
      });
      glowTex.dispose();
      renderer.dispose();
      if (el.parentNode === mount) mount.removeChild(el);
      document.body.style.cursor = '';
    };
  }, [router, onReady, onError, onHover]);

  return <div ref={mountRef} className="absolute inset-0" />;
}
