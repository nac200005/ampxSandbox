<script lang="ts">
    import { fade } from "svelte/transition";
</script>

<!-- "THE SIMPSON GALAXY" Title -->
<div class="justify-center items-center flex mx-20" in:fade={{ delay: 400, duration: 1200 }}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="mt-24 mb-10 font-black text-white tracking-widest text-6xl cursor-pointer hover:tracking-[0.25em] duration-500 ease-in-out"
        on:click={() => window.location.reload()}
    >
        THE
        <mark style="background: none; color: #FF0055;">SIMPSON</mark>
        GALAXY
    </div>
</div>
