import { BufferGeometry, Geometry, Mesh } from "three";
import textured from "../live-api/textured";

BufferGeometry.prototype.textured =
Geometry.prototype.textured =
Mesh.prototype.textured =
  function(texture, options) {
    return textured(this, texture, options);
  };
