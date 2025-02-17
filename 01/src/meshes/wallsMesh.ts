import * as THREE from "three";
import {
  bricksAmbientOcclusionTexture,
  bricksColorTexture,
  bricksNormalTexture,
  bricksRoughnessTexture,
} from "../TextureLoader";
import { setUV2Attribute } from "../utils/setUV2Attribute";

const wallsWHD = [4, 2.5, 4];
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(...wallsWHD),
  new THREE.MeshStandardMaterial({
    map: bricksColorTexture,
    aoMap: bricksAmbientOcclusionTexture,
    normalMap: bricksNormalTexture,
    roughnessMap: bricksRoughnessTexture,
  })
);
// aoMap
setUV2Attribute(walls);

walls.position.y = wallsWHD[1] / 2;

export { wallsWHD };
export default walls;
