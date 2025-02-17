import * as THREE from "three";
import { wallsWHD } from "./wallsMesh";

const roofWHD = [3.5, 1, 4];
const roof = new THREE.Mesh(
  new THREE.ConeGeometry(...roofWHD),
  new THREE.MeshStandardMaterial({ color: "#b35f45" })
);
roof.position.y = roofWHD[1] / 2 + wallsWHD[1];
roof.rotation.y = Math.PI / 4;

export { roofWHD };
export default roof;
