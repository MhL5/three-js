import * as THREE from "three";

type Data = [number, number, number];
type BushesData = {
  scale: Data;
  position: Data;
}[];

const bushWHD = [1, 16, 16];

const geometry = new THREE.SphereGeometry(...bushWHD);
const material = new THREE.MeshStandardMaterial({ color: "#89c854" });

const bushesData: BushesData = [
  {
    scale: [0.5, 0.5, 0.5],
    position: [0.8, 0.2, 2.2],
  },
  {
    scale: [0.25, 0.25, 0.25],
    position: [1.4, 0.1, 2.1],
  },
  {
    scale: [0.4, 0.4, 0.4],
    position: [-0.8, 0.1, 2.2],
  },
  {
    scale: [0.15, 0.15, 0.15],
    position: [-1, 0.05, 2.6],
  },
];

const bushes = bushesData.map(({ position, scale }) => {
  const bush = new THREE.Mesh(geometry, material);
  bush.scale.set(...scale);
  bush.position.set(...position);
  return bush;
});

export { bushWHD, bushes };
