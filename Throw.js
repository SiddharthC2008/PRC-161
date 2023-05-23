var camera = document.querySelector("#camera").object3D;
//get the camera direction as Three.js Vector
var direction
new THREE.Vector3();
camera.getWorldDirection (direction);
//set the velocity and it's direction
ball.setAttribute("velocity", direction.multiplyScalar(-10)); 