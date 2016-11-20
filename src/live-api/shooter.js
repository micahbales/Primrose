import { Raycaster } from "three/src/core/Raycaster";

pliny.function({
  name: "shooter",
  description: "Creates a THREE.Raycaster.",
});
export default function shooter() {
  return new Raycaster();
};