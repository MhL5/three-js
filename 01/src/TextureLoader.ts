import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

// door
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

// walls
export const bricksColorTexture = textureLoader.load(
  "/textures/bricks/color.jpg"
);
export const bricksAmbientOcclusionTexture = textureLoader.load(
  "/textures/bricks/ambientOcclusion.jpg"
);
export const bricksNormalTexture = textureLoader.load(
  "/textures/bricks/normal.jpg"
);
export const bricksRoughnessTexture = textureLoader.load(
  "/textures/bricks/roughness.jpg"
);

// grass
export const grassColorTexture = textureLoader.load(
  "/textures/grass/color.jpg"
);
export const grassAmbientOcclusionTexture = textureLoader.load(
  "/textures/grass/ambientOcclusion.jpg"
);
export const grassNormalTexture = textureLoader.load(
  "/textures/grass/normal.jpg"
);
export const grassRoughnessTexture = textureLoader.load(
  "/textures/grass/roughness.jpg"
);
