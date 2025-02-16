import * as THREE from "three";

const floorWH = [20, 20];
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(...floorWH),
  new THREE.MeshStandardMaterial({ color: "#a9c388" })
);
floor.rotation.x = -Math.PI * 0.5;
floor.position.y = 0;

export { floorWH };
export default floor;
