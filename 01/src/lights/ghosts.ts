import * as THREE from "three";

const colors = ["#ff00ff", "#00ffff", "#ffff00"];

const ghosts = colors.map((color) => {
  return new THREE.PointLight(color, 6, 3);
});

export default ghosts;
