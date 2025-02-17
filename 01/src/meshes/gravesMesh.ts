import * as THREE from "three";

const gravesWHD = [0.6, 0.8, 0.2];

const material = new THREE.MeshStandardMaterial({ color: "#b2b6b1" });
const geometry = new THREE.BoxGeometry(...gravesWHD);

const graves = new THREE.Group();

for (let i = 0; i < 50; i++) {
  const angle = Math.random() * Math.PI * 2;

  const radius = 3 + Math.random() * 6;

  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  const grave = new THREE.Mesh(geometry, material);
  grave.position.set(x, gravesWHD[1] / 2 - 0.1, z);
  grave.rotation.y = (Math.random() - 0.5) * 0.4;
  grave.rotation.y = (Math.random() - 0.5) * 0.4;
  graves.add(grave);
}

export default graves;
