console.log('Robot Bobby was here');

import * as THREE from "three";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


// Creating the shape

const geometry = new THREE.SphereGeometry(2, 32, 32);

const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
});

const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

camera.position.z = 5;

renderer.render(scene, camera);