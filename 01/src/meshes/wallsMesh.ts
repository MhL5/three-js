import * as THREE from "three";

const wallsWHD = [4, 2.5, 4];
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(...wallsWHD),
  new THREE.MeshStandardMaterial({ color: "#ac8e82" })
);
walls.position.y = wallsWHD[1] / 2;

export { wallsWHD };
export default walls;
