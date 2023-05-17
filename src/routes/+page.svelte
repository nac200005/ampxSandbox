<script lang="ts">
	// Import Three.js Scene Functions
	import { EngageLightSpeed, SetScene } from "$lib/lightSpeed";

	// Import Svelte Libraries
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

	// Import Components
	import WelcomeUser from "./components/WelcomeUser.svelte";
	import SimpsonGalaxyTitle from "./components/SimpsonGalaxyTitle.svelte";

	// Galaxy Background
	let lightSpeedScene: any;

	// On site load
	onMount(async () => await SetScene(lightSpeedScene));

	// Header Management Variables
	let showRepos: boolean, showSimpsonGalaxyHeader: boolean = false;
</script>

<svelte:head>
	<style>
		body { background: black; }
	</style>
</svelte:head>

<!-- Main Header -->
{#if !showRepos}
	<!-- "TRISTAN SIMPSON" Title -->
	<div
		class="justify-center items-center flex mx-20"
		out:fade={{ duration: 600 }}
	>
		<div class="mt-72 font-black text-white tracking-widest text-6xl">
			AmpX
			<mark style="background: none; color: #FF0055">+</mark>
			CONSULTING
		</div>
	</div>

	<!-- "ENGAGE LIGHTSPEED" Button -->
	<div class="mt-6 justify-center items-center flex mr-8" out:fade={{ duration: 600 }}>
		<button
			on:click={async () => {
				setTimeout(async () => (showRepos = true), 2500);
				setTimeout(async () => (showSimpsonGalaxyHeader = true), 5300);
				EngageLightSpeed();
			}}
			class="px-4 text-xl md:text-2xl w-42 h-12 backdrop-blur-sm text-white rounded-lg font-black tracking-widest hover:bg-white hover:tracking-[0.2em] hover:text-black duration-700 ease-in-out"
		>
			Click to Learn More
		</button>
	</div>
{/if}

<!-- Galaxy Background Canvas-->
<canvas
	bind:this={lightSpeedScene}
	style="position: absolute; top: 0; left: 0; z-index: -1; position: fixed;"
/>
