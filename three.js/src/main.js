import './style.css';

console.log('Robot Bobby was here');

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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

const controls = new OrbitControls(camera, renderer.domElement);


function animate(){
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);

}

animate()


// Creating the shape

const geometry = new THREE.SphereGeometry(4, 20);

const material = new THREE.MeshBasicMaterial({
    color: 0xadd8e6,
    wireframe: true
});

const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

camera.position.z = 8;

renderer.render(scene, camera);


function rotate(time){
    sphere.rotation.x = time / 1000;
    sphere.rotation.y = time / 1000;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(rotate);






const gridhelper = new THREE.GridHelper(30);

scene.add(gridhelper);