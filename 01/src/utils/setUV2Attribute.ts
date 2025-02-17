import * as THREE from "three";

export function setUV2Attribute(mesh: THREE.Mesh) {
  mesh.geometry.setAttribute(
    "uv2",
    new THREE.Float32BufferAttribute(mesh.geometry.attributes.uv.array, 2)
  );
}
