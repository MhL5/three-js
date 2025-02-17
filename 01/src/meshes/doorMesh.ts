import {
  doorColorTexture,
  doorAlphaTexture,
  doorAmbientOcclusionTexture,
  doorHeightTexture,
  doorMetalnessTexture,
  doorNormalTexture,
  doorRoughnessTexture,
} from "../TextureLoader";
import { setUV2Attribute } from "../utils/setUV2Attribute";
import { wallsWHD } from "./wallsMesh";
import * as THREE from "three";

// door
const doorWH = [2.2, 2.2, 100, 100];
const door = new THREE.Mesh(
  new THREE.PlaneGeometry(...doorWH),
  new THREE.MeshStandardMaterial({
    // map
    map: doorColorTexture,
    // alphaMap
    transparent: true,
    alphaMap: doorAlphaTexture,
    // aoMap
    aoMap: doorAmbientOcclusionTexture,
    // displacementMap
    displacementMap: doorHeightTexture,
    displacementScale: 0.1,
    // normal map
    normalMap: doorNormalTexture,
    // metal ness
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture,
  })
);
// aoMap
setUV2Attribute(door);
door.position.y = doorWH[1] / 2 - 0.1;
door.position.z = wallsWHD[2] / 2 + 0.01;

const doorLight = new THREE.PointLight("#ff7d46", 1, 7);
doorLight.position.set(0, 2.2, 2.7);

export { doorWH, doorLight };
export default door;
