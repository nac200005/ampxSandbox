<script>
	// Import Three.js Scene Functions
	import { EngageLightSpeed, SetScene } from '$lib/LightSpeed.js';

	// Import Svelte Libraries
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	// Import Components
	import WelcomeUser from './components/WelcomeUser.svelte';
	import SimpsonGalaxyTitle from './components/SimpsonGalaxyTitle.svelte';
	import Projects from './components/Projects.svelte';

	// Galaxy Background
	let LightSpeedScene;

	// On site load
	onMount(async () => {
		// Check if user is trying to query repos
		const LOCATION = window.location.href.split("?")[1];
		if (LOCATION != undefined) {
			window.location.assign("https://simpsonresearch.ca/search?" + LOCATION);
			return;
		}
		// Else, set the galaxy background scene
		await SetScene(LightSpeedScene)
	});

	// Header Management Variables
	let ShowPlanets, ShowSimpsonGalaxyHeader = false;
</script>

<!-- Main Header -->
{#if !ShowPlanets}
	<!-- "TRISTAN SIMPSON" Title -->
	<div class="justify-center items-center flex mx-20" out:fade={{ duration: 600 }}>
		<div class="mt-72 font-black text-white tracking-widest text-6xl">
			SIMPSON
			<mark style="background: none; color: #FF0055">+</mark>
			RESEARCH
		</div>
	</div>
	
	<!-- "ENGAGE LIGHTSPEED" Button -->
	<div class="mt-6 justify-center items-center flex mr-8" out:fade={{ duration: 600 }}>
		<button
			on:click={async () => {
				setTimeout(async () => ShowPlanets = true, 2500);
				setTimeout(async () => ShowSimpsonGalaxyHeader = true, 5300)
				EngageLightSpeed();
			}}
			class="px-4 text-xl md:text-2xl w-42 h-12 backdrop-blur-sm text-white rounded-lg font-black tracking-widest hover:bg-white hover:tracking-[0.2em] hover:text-black duration-700 ease-in-out">
			ENGAGE LIGHT SPEED
		</button>
	</div>
{/if}

{#if ShowPlanets}
	<!-- "WELCOME TO" Title -->
	{#if !ShowSimpsonGalaxyHeader} <WelcomeUser/> {/if}

	<!-- "THE SIMPSON GALAXY" Title -->
	{#if ShowSimpsonGalaxyHeader} 
		<SimpsonGalaxyTitle/>
		<Projects/>
	{/if}
{/if}

<!-- Galaxy Background Canvas-->
<canvas 
	bind:this={LightSpeedScene} 
	style="position: absolute; top: 0; left: 0; z-index: -1; position: fixed;"
/>
