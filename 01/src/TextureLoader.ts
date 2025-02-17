import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

export const doorColorTexture = textureLoader.load("/textures/door/color.jpg");
export const doorAlphaTexture = textureLoader.load("/textures/door/alpha.jpg");
export const doorAmbientOcclusionTexture = textureLoader.load(
  "/textures/door/ambientOcclusion.jpg"
);
export const doorHeightTexture = textureLoader.load(
  "/textures/door/height.jpg"
);
export const doorNormalTexture = textureLoader.load(
  "/textures/door/normal.jpg"
);
export const doorMetalnessTexture = textureLoader.load(
  "/textures/door/metalness.jpg"
);
export const doorRoughnessTexture = textureLoader.load(
  "/textures/door/roughness.jpg"
);
