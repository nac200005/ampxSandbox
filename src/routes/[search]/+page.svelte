<script>
    // Import Components
    import SimpsonGalaxyTitle from "../components/SimpsonGalaxyTitle.svelte";
    import { SetScene } from '$lib/LightSpeed.js';

    // Import Libraries
    import { fade } from "svelte/transition";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    // Get the search word
    const SEARCH_WORD = $page.params.search;

    // Galaxy Background
	let LightSpeedScene;

    // Github Repo Data
    let Repos = [];

    // On Page Mount
    onMount(async () => {
        // Set the galaxy scene
        await SetScene(LightSpeedScene)

        // Get github repo data
        const URLS = [
            "https://api.github.com/users/Simpson-Computer-Technologies-Research/repos",
            "https://api.github.com/users/realTristan/repos"
        ]
        URLS.forEach(async (url, _) => {
            await self.fetch(url)
                .then(response => response.json())
                .then(json => {
                    // Iterate over the json response array
                    new Map(Object.entries(json)).forEach((map, _) => {
                        // Check if the repo title contains the search keyword.
                        //      If it does, append the repo to the result
                        if (map.name.toLowerCase().includes(SEARCH_WORD.toLowerCase()))
                            Repos = [...Repos, map];
                    });
                })
                .catch(error => console.log(error));
        }); 
    });
</script>

<!-- Header -->
<SimpsonGalaxyTitle/>

<!-- Github Repositories -->
<div class="flex justify-center items-center"><div>
    {#each Repos as data, i}
        <div class="group my-20 translate-y-0 hover:-translate-y-8 duration-[400ms] ease-in-out lg:mr-10 mx-28 lg:mx-0 w-[20rem] md:w-[40rem] 2xl:w-[50rem]" in:fade={{ delay: 250 * i, duration: 1000 }}>
            <a href={data.html_url} rel="noopener noreferrer" target="_blank" class="mb-48 h-64 px-10 pt-6 rounded-[2.5rem] tracking-widest shadow-[#202020]">
                <h2 class="text-white text-center text-xl font-black">
                    <mark style="background: none;" class="text-[#FF0055]">#</mark>&nbsp;{data.name}
                </h2>
                <h2 class="text-gray-200 text-center text-md font-base mt-4">{data.description}</h2>
                <div class="flex justify-center items-center mt-6">
                    {#each data.topics as topic}
                        <div class="">
                            <h2 class="text-[0.60rem] text-gray-50 tracking-widest mx-4 uppercase">{topic}</h2>
                        </div>
                    {/each}
                </div>
            </a>
        </div>
    {/each}
</div></div>

<!-- Galaxy Background Canvas-->
<canvas 
	bind:this={LightSpeedScene} 
	style="position: absolute; top: 0; left: 0; z-index: -1; position: fixed;"
/>
