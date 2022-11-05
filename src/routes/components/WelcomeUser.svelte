<script>
    // Import Fade Transition
	import { fade } from 'svelte/transition';

	// Generate a Random Traveller ID
	const TRAVELLER_ID = Math.random().toString(36).slice(2, 6).toUpperCase();
</script>

<!-- "WELCOME USER" Title -->
<div class="justify-center items-center flex mx-20" in:fade={{ delay: 1000, duration: 2000 }} out:fade={{ duration: 400 }}>
    <div class="mt-72 font-black text-white tracking-widest text-[3rem]">
        WELCOME
        <mark style="background: none; color: #FF0055; font-size: 3.5rem;">$USER<mark style="background: none; color: white; font-size: 4rem;">/</mark>{TRAVELLER_ID}</mark>
    </div>
</div>