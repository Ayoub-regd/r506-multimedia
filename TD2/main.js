import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';

// Création de la scène
const scene = new THREE.Scene();

// Caméra
const camera = new THREE.PerspectiveCamera(
    60, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.z = window.innerWidth < window.innerHeight ? 9 : 5;

// Moteur de rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lumière
const light = new THREE.AmbientLight(0xffffff, 2);
scene.add(light);

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.x = -1.3;
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 16);

const texture = new THREE.TextureLoader().load("terre.jpg");
const sphereMaterial = new THREE.MeshLambertMaterial({ map: texture });


const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 1.3;
scene.add(sphere);


const loader = new GLTFLoader();

loader.load("robot.glb", function (gltf) {
    const robot = gltf.scene;
    robot.scale.setScalar(0.45);
    robot.position.set(0, -1, 0);
    scene.add(robot);
});


// Animation
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    sphere.rotation.y += 0.001;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.position.z = window.innerWidth < window.innerHeight ? 9 : 5;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


window.addEventListener("deviceorientation", function (event) {
    if (event.beta !== null) {
        sphere.rotation.x = THREE.MathUtils.degToRad(event.beta / 3);
    }
    if (event.gamma !== null) {
        sphere.rotation.z = THREE.MathUtils.degToRad(event.gamma / 3);
    }
});

window.addEventListener("devicemotion", function (event) {
    const x = event.accelerationIncludingGravity?.x;
    if (x != null) {
        cube.position.y = THREE.MathUtils.clamp(x / 15, -0.6, 0.6);
    }
});
