import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { bushes } from "./meshes/bushMesh";
import door, { doorLight } from "./meshes/doorMesh";
import floor from "./meshes/floorMesh";
import graves from "./meshes/gravesMesh";
import house from "./meshes/houseMesh";
import roof from "./meshes/roofMesh";
import walls from "./meshes/wallsMesh";
import ghosts from "./lights/ghosts";
import ambientLight from "./lights/ambientLight";
import moonLight from "./lights/moonLight";

/**
 * Base
 */
// Debug
const gui = new GUI();
gui.add(ambientLight, "intensity").min(0).max(1).step(0.001);
gui.add(moonLight, "intensity").min(0).max(1).step(0.001);
gui.add(moonLight.position, "x").min(-5).max(5).step(0.001);
gui.add(moonLight.position, "y").min(-5).max(5).step(0.001);
gui.add(moonLight.position, "z").min(-5).max(5).step(0.001);

// Canvas
const canvas = document.querySelector<HTMLCanvasElement>("canvas.webgl");
if (!canvas) throw new Error("no html canvas!");

// fog
const fog = new THREE.Fog("#262837", 1, 15);

// Scene
export const scene = new THREE.Scene();

scene.fog = fog;
scene.add(floor);
scene.add(house);
scene.add(graves);
scene.add(...ghosts);

// scene house group
house.add(walls);
house.add(roof);
house.add(door);
house.add(...bushes);
house.add(doorLight);

// scene lights
scene.add(ambientLight);
// Directional light
scene.add(moonLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 4;
camera.position.y = 2;
camera.position.z = 5;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor("#262837");

// shadows
renderer.shadowMap.enabled = true;
moonLight.castShadow = true;
doorLight.castShadow = true;
walls.castShadow = true;
ghosts.map((ghost) => {
  ghost.castShadow = true;
});
bushes.map((bush) => {
  bush.castShadow = true;
});
graves.castShadow = true;
floor.receiveShadow = true;

moonLight.shadow.mapSize.width = 256;
moonLight.shadow.mapSize.height = 256;
moonLight.shadow.camera.far = 15;

// ...

doorLight.shadow.mapSize.width = 256;
doorLight.shadow.mapSize.height = 256;
doorLight.shadow.camera.far = 7;

ghosts.map((ghost) => {
  ghost.shadow.camera.far = 7;
  ghost.shadow.mapSize.width = 256;
  ghost.shadow.mapSize.height = 256;
});

renderer.shadowMap.type = THREE.PCFSoftShadowMap;

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Ghosts
  const ghost1Angle = elapsedTime * 0.5;
  ghosts[0].position.x = Math.cos(ghost1Angle) * 4;
  ghosts[0].position.z = Math.sin(ghost1Angle) * 4;
  ghosts[0].position.y = Math.sin(elapsedTime * 3);

  const ghost2Angle = -elapsedTime * 0.32;
  ghosts[1].position.x = Math.cos(ghost2Angle) * 5;
  ghosts[1].position.z = Math.sin(ghost2Angle) * 5;
  ghosts[1].position.y =
    Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);

  const ghost3Angle = -elapsedTime * 0.18;
  ghosts[2].position.x =
    Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
  ghosts[2].position.z =
    Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
  ghosts[2].position.y =
    Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
