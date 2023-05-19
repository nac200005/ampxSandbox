import * as THREE from 'three';
//import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';

// Establish a new scene
const SCENE = new THREE.Scene();

// Ambient Lighting to Scene Objects
SCENE.add(new THREE.AmbientLight(0xffffff, 0.1));

// Establish a new perspective camera and set it's position
const CAMERA = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
CAMERA.position.z = 1.5;
CAMERA.rotation.x = Math.PI / 2;

// Bloom Renderer
//const RENDER_SCENE = new RenderPass(SCENE, CAMERA);

// Add the Stars to the Scene
const STAR_GROUP = new THREE.Group();

// Star count based on screen size
const STAR_COUNT = Math.floor(
    Math.sqrt((window.innerHeight ** 2) + (window.innerHeight ** 2))
);

//Array Values
const amplitudes: number[] = [];
const frequencies: number[] = [];

//Test for drawing triangles
const testArr: number[] = [
    Math.floor(Math.random() * STAR_COUNT),
    Math.floor(Math.random() * STAR_COUNT),
    Math.floor(Math.random() * STAR_COUNT),
];
// The constant acceleration of the starts once
// light speed is engaged
const STAR_COUNT_LENGTH = STAR_COUNT.toString().length;
const STAR_ACCELERATION =
    (STAR_COUNT / STAR_COUNT_LENGTH) / (10 ** STAR_COUNT_LENGTH);

// Determine when to stop light speed based on
// the users screen width
const COUNTER_MAX = (STAR_COUNT * STAR_COUNT) / 3;

//Random Color Function
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add the stars to the scene
for (let i = 0; i < STAR_COUNT; i++) {
    amplitudes[i] = Math.random()* 0.1;
    frequencies[i] = Math.abs(Math.random()* 0.3);
    const SPHERE = new THREE.Mesh(
        new THREE.SphereGeometry(0.5),//0.17
        new THREE.MeshBasicMaterial({
            color: new THREE.Color(getRandomColor())
        })
    );
    SPHERE.sinVal = Math.random() * 100
    SPHERE.velocity = 0;
    SPHERE.position.set(
        Math.random() * 600 - 300,
        Math.random() * 50 + 30,
        //Math.random() * 600 - 300,
        Math.random() * 600 - 300
    );
    STAR_GROUP.add(SPHERE);
}
SCENE.add(STAR_GROUP);


//Triangle Instatiation
  var geom = new THREE.Geometry();
  var v1 = STAR_GROUP.children[testArr[0]].position;
  var v2 = STAR_GROUP.children[testArr[1]].position;
  var v3 = STAR_GROUP.children[testArr[2]].position;
  var triangle = new THREE.Triangle(v1, v2, v3);
  var normal = triangle.normal();
  geom.vertices.push(triangle.a);
  geom.vertices.push(triangle.b);
  geom.vertices.push(triangle.c);
  var line = new THREE.Line(
    geom,
    new THREE.LineBasicMaterial({ color: 0x000000 })
  );
  SCENE.add(line);

//Function to drawLines between spheres
function getLines() {
    // Object to store the distance as key and coordinates as value
    const connectingNodes = new Map([
        [Infinity, null],
        [Infinity, null],
        [Infinity, null],
        // Add more key-value pairs as needed
      ]);

    for (let i = 0; i < STAR_COUNT; i++) {
        let current = STAR_GROUP.children[i]

        for (let j = 0; j < STAR_COUNT; j++) {
            if (i === j) continue; // Skip current star

            let nodePosition = STAR_GROUP.children[j].position;
            
            let distance = Math.sqrt(
                (nodePosition.x - current.position.x) ** 2 +
                (nodePosition.y - current.position.y) ** 2 +
                (nodePosition.z - current.position.z) ** 2
            );

            // Check if the distance is less than the largest distance in connectingNodes
            if (!connectingNodes.hasOwnProperty(distance) || distance < connectingNodes[distance].distance) {
                connectingNodes[distance] = {
                    distance: distance,
                    coordinates: [nodePosition]
                };
            }
        }
    }


    // SCENE.add(lines) - You can add the lines to your scene here
}
// Renderer and Star Geometry Variables
let Renderer: THREE.renderer

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

// Move Stars Backwards
const moveRight = () => {
    
    for (let i = 0; i < STAR_GROUP.children.length; i++) {
        // Calculate the normalized cursor position
        let star = STAR_GROUP.children[i];

        // Integrate Uniform Velocity
        star.position.x += 0.1;
        star.position.y += scrollMotionControl * 10;
        scrollMotionControl = 0;
        // Update the vertices y values if too far
        if (star.position.x > 300) star.position.x = -200;
    }
}

// Move the stars forward uniformly
const MoveForwardNeutral = () => {
    for (let i = 0; i < STAR_GROUP.children.length; i++) {
        let star = STAR_GROUP.children[i];

        //Slow down the velocity and correct the star scale
        if (star.scale.x > 1) star.scale.x -= 0.5;
        if (star.velocity > 0.2) star.velocity -= 0.05;

       // Update the star position
        star.position.z += 1;

       // Update the vertices y values if too far
        if (star.position.x < -200) star.position.x = 1000;
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
let scrollMotionControl = 0;
window.addEventListener('scroll', () => {
    scrollMotionControl = 1 - window.scrollY / window.innerHeight; // Update motion control value based on scroll position
    console.log('scrollMotionControl:', scrollMotionControl);
});


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
        moveRight();
    }

    // Apply sine wave motion to the spheres
    const time = Date.now() * 0.001; // Convert current time to seconds

    for (let i = 0; i < STAR_GROUP.children.length; i++) {
        const sphere = STAR_GROUP.children[i];
        const amplitude: number = Math.random() * 10 + 5; // Random amplitude for each sphere
        const frequency: number = Math.random() * 4 + 1; // Random frequency for each sphere

        const zOffset = Math.sin(time * frequencies[i]) * amplitudes[i];
        sphere.position.z += zOffset;
    }

    // Scene Renderer
    Renderer.render(SCENE, CAMERA);
};
// The setScene() function is the primary function
// for updating the scene data.
export const SetScene = async (canvas: THREE.canvas) => {
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