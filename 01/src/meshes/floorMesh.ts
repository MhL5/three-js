import * as THREE from "three";
import {
  grassAmbientOcclusionTexture,
  grassColorTexture,
  grassNormalTexture,
  grassRoughnessTexture,
} from "../TextureLoader";
import { setUV2Attribute } from "../utils/setUV2Attribute";

grassColorTexture.repeat.set(8, 8);
grassAmbientOcclusionTexture.repeat.set(8, 8);
grassNormalTexture.repeat.set(8, 8);
grassRoughnessTexture.repeat.set(8, 8);

grassColorTexture.wrapS = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
grassNormalTexture.wrapS = THREE.RepeatWrapping;
grassRoughnessTexture.wrapS = THREE.RepeatWrapping;

grassColorTexture.wrapT = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
grassNormalTexture.wrapT = THREE.RepeatWrapping;
grassRoughnessTexture.wrapT = THREE.RepeatWrapping;

const floorWH = [20, 20];
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(...floorWH),
  new THREE.MeshStandardMaterial({
    map: grassColorTexture,
    aoMap: grassAmbientOcclusionTexture,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture,
  })
);
setUV2Attribute(floor);
floor.rotation.x = -Math.PI * 0.5;
floor.position.y = 0;

export { floorWH };
export default floor;
