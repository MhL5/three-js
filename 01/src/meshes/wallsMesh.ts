import * as THREE from "three";
import {
  bricksAmbientOcclusionTexture,
  bricksColorTexture,
  bricksNormalTexture,
  bricksRoughnessTexture,
} from "../TextureLoader";

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
walls.geometry.setAttribute(
  "uv2",
  new THREE.Float32BufferAttribute(walls.geometry.attributes.uv.array, 2)
);
walls.position.y = wallsWHD[1] / 2;

export { wallsWHD };
export default walls;
