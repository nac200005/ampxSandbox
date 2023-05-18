import * as THREE from 'three';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';

// Establish a new scene
const SCENE = new THREE.Scene();

// Ambient Lighting to Scene Objects
SCENE.add(new THREE.AmbientLight(0xffffff, 0.1));

// Establish a new perspective camera and set it's position
const CAMERA = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
CAMERA.position.z = 1.5;
CAMERA.rotation.x = Math.PI / 2;

// Bloom Renderer
const RENDER_SCENE = new RenderPass(SCENE, CAMERA);

// Add the Stars to the Scene
const STAR_GROUP = new THREE.Group();


// Star count based on screen size
const STAR_COUNT = Math.floor(
    Math.sqrt((window.innerHeight ** 2) + (window.innerHeight ** 2))
);
const amplitudes = [];
const frequencies = [];

// The constant acceleration of the starts once
// light speed is engaged
const STAR_COUNT_LENGTH = STAR_COUNT.toString().length;
const STAR_ACCELERATION =
    (STAR_COUNT / STAR_COUNT_LENGTH) / (10 ** STAR_COUNT_LENGTH);

// Determine when to stop light speed based on
// the users screen width
const COUNTER_MAX = (STAR_COUNT * STAR_COUNT) / 3;

// Add the stars to the scene
for (let i = 0; i < STAR_COUNT; i++) {
    amplitudes[i] = Math.random()* 0.3;
    frequencies[i] = Math.abs(Math.random()* 0.3);
    const SPHERE = new THREE.Mesh(
        new THREE.SphereGeometry(0.5),//0.17
        new THREE.MeshBasicMaterial({
            color: new THREE.Color("blue")
        })
    );
    SPHERE.sinVal = Math.random() * 100
    SPHERE.velocity = 0;
    SPHERE.position.set(
        Math.random() * 600 - 300,
        50,
        //Math.random() * 600 - 300,
        Math.random() * 600 - 300
    );
    STAR_GROUP.add(SPHERE);
}
SCENE.add(STAR_GROUP);

// Renderer and Star Geometry Variables
let Renderer

// Engage Light Speed Button
let LightSpeedEngaged = 0;
export const EngageLightSpeed = () => LightSpeedEngaged = 1;

// The resize() function is used to resize the scene.
// This is required for if the user resizes the site,
// which is caught using the Window Resize Listener
const resize = async () => {
    // Set the pixel ratio
    Renderer.setPixelRatio(window.devicePixelRatio);
    // Set the screen size
    Renderer.setSize(window.innerWidth, window.innerHeight);
    // Set the camera aspect ratio (most likely 16:9)
    CAMERA.aspect = window.innerWidth / window.innerHeight;
    // Update projection matrix
    CAMERA.updateProjectionMatrix();
};
// Window Resize Listener
window.addEventListener('resize', resize);

// Used for engaging / disengaging lightspeed 
// after a specific time
let LightSpeedCounter = 0;

// Move the stars forward uniformly
const MoveForwardNeutral = () => {
    for (let i = 0; i < STAR_GROUP.children.length; i++) {
        let star = STAR_GROUP.children[i];

        // Slow down the velocity and correct the star scale
        //if (star.scale.x > 1) star.scale.x -= 0.5;
        //if (star.velocity > 0.2) star.velocity -= 0.05;

        // Update the star position
        //star.position.z += 1;

        // Update the vertices y values if too far
        //if (star.position.x < -200) star.position.x = 1000;
    }
}

// Move Stars Forwards
const MoveForward = () => {
    for (let i = 0; i < STAR_GROUP.children.length; i++) {
        let star = STAR_GROUP.children[i];

        // Increment LightSpeedCounter
        LightSpeedCounter++;

        // Change star scale
        star.scale.x += 0.3;

        // Integrate Uniform Velocity
        if (star.velocity < 7)
            star.velocity += STAR_ACCELERATION;
        star.position.x -= star.velocity;

        // Update the vertices y values if too far
        if (star.position.x < -200) star.position.x = 200;
    }
}

// Move Stars Backwards
const MoveBackward = () => {
    for (let i = 0; i < STAR_GROUP.children.length; i++) {
        let star = STAR_GROUP.children[i];
        // Integrate Uniform Velocity
        star.position.x += 0.05;
        // Update the vertices y values if too far
        if (star.position.x > 200) star.position.x = -200;
    }
}

// The animate() function is used to manipulate the
// objects within the scene
// The animate() function is used to manipulate the
// objects within the scene
// The animate() function is used to manipulate the
// objects within the scene
const animate = async () => {
    requestAnimationFrame(animate);

    // If The lightspeed has been engaged, move forward with acceleration,
    // If the LightSpeedCounter reaches COUNTER_MAX then disengage light speed
    if (LightSpeedEngaged === 1) {
        if (LightSpeedCounter > COUNTER_MAX) {
            LightSpeedEngaged = 2;
        } else {
            MoveForward();
        }
    } else if (LightSpeedEngaged === 2) {
        MoveForwardNeutral();
    } else {
        MoveBackward();
    }

    // Apply sine wave motion to the spheres
    const time = Date.now() * 0.001; // Convert current time to seconds

    for (let i = 0; i < STAR_GROUP.children.length; i++) {
        const sphere = STAR_GROUP.children[i];
        const amplitude = Math.random() * 10 + 5; // Random amplitude for each sphere
        const frequency = Math.random() * 4 + 1; // Random frequency for each sphere

        const zOffset = Math.sin(time * frequencies[i]) * amplitudes[i];
        sphere.position.z += zOffset;
    }

    // Bloom Composer and Scene Renderer
    Renderer.render(SCENE, CAMERA);
};



// The setScene() function is the primary function
// for updating the scene data.
export const SetScene = async (canvas) => {
    // Render the new scene
    Renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false });
    Renderer.setSize(window.innerWidth, window.innerHeight);
    Renderer.setPixelRatio(window.devicePixelRatio * 0.5);
    Renderer.autoClear = false;


    // Size the scene
    await resize();

    // Animate the sphere
    await animate();
};