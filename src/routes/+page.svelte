
<script>
	import { EngageLightSpeed, SetScene } from '$lib/LightSpeed.js';
	import { onMount } from 'svelte';

	// Stary Background
	let lightSpeed;
	onMount(async () => await SetScene(lightSpeed));
</script>

<!-- Main Header -->
<div class="justify-center items-center flex">
	<div class="mt-72 font-black text-white tracking-widest text-6xl">THE SIMPSON GALAXY</div>
</div>

<!-- Lightspeed Button -->
<div class="lg:flex mt-6 xl:mt-8 ml-6 justify-center items-center flex">
	<button
		on:click={() => {
			EngageLightSpeed();
			setTimeout(() => window.location = "/engage.hyperdrive/planets", 2000)
		}}
		class="text-center items-center justify-center flex text-2xl p-4 w-42 h-10 xl:w-42 xl:h-12 backdrop-blur-sm text-white rounded-lg font-black tracking-widest hover:bg-white hover:tracking-[0.2em] hover:text-black duration-700 ease-in-out">
		ENGAGE LIGHT SPEED
	</button>
</div>

<!-- Stars Canvas-->
<canvas 
	bind:this={lightSpeed} 
	style="position: absolute; top: 0; left: 0; z-index: -1;"
/>
