import { wallsWHD } from "./wallsMesh";
import * as THREE from "three";

// door
const doorWH = [2, 2];
const door = new THREE.Mesh(
  new THREE.PlaneGeometry(...doorWH),
  new THREE.MeshBasicMaterial({ color: "#aa7b7b" })
);
door.position.y = doorWH[1] / 2;
door.position.z = wallsWHD[2] / 2 + 0.01;

export { doorWH };
export default door;
