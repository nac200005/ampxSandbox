import * as THREE from 'three';

// Establish a new scene
const SCENE = new THREE.Scene();

// Establish a new perspective camera and set it's position
const CAMERA = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 2000);
CAMERA.position.z = 1.5;
CAMERA.rotation.x = Math.PI/2;

// Renderer and Star Geometry Variables
let Renderer, StarGeometry;

// Engage Light Speed Button
let LightSpeedEngaged = false;
export const EngageLightSpeed = () => LightSpeedEngaged = true;

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

// Move Stars Backwards
const MoveBackward = () => {
    for (let i = 0; i < StarGeometry.vertices.length; i++) {
        var v = StarGeometry.vertices[i];
        // Integrate Uniform Velocity
        v.y += 0.2;
        // Update the vertices y values if too far
        if (v.y > 200) v.y = 0;
    }
}

// Move Stars Forwards
const MoveForward = () => {
    for (let i = 0; i < StarGeometry.vertices.length; i++) {
        var v = StarGeometry.vertices[i];

        // Integrate Non-Uniform Velocity
        v.velocity += 0.01;
        v.y -= v.velocity;
        
        // Update the vertices y values if too far
        if (v.y < -200) v.y = 200;
    }
}

// The animate() function is used to manipulate the
// objects within the scene
const animate = async () => {
    // Check which direction to move the stars
    LightSpeedEngaged ? MoveForward() : MoveBackward()
    StarGeometry.verticesNeedUpdate = true;
    
    // Render the scene and camera
    Renderer.render(SCENE, CAMERA);
    requestAnimationFrame(animate);
};

// The setScene() function is the primary function
// for updating the scene data.
export const setScene = async (canvas) => {
	// Render the new scene
	Renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
	Renderer.setSize(window.innerWidth, window.innerHeight);

    // Adding the stars to the star geometry variable
    StarGeometry = new THREE.Geometry();
    for (let i = 0; i < 2000; i++) {
        var star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        star.velocity = 0;
        StarGeometry.vertices.push(star);
    }
    // Add the stars to the scene
    SCENE.add(new THREE.Points(StarGeometry,
        new THREE.PointsMaterial({
            size: 0.2,
            map: new THREE.TextureLoader().load('./star.png'),
            transparent: true,
            depthWrite: false
          })
    ));

	// Size the scene
	await resize();

	// Animate the sphere
	await animate();
};