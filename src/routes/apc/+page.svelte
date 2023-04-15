<script lang="ts">
    import { onMount } from "svelte";

    // Github Repo Data
    let Repos: any[] = [];

    // On Page Mount
    onMount(async () => {
        // Get 'Simpson Computer Technologies Research' Github Data
        await self
            .fetch(
                "https://api.github.com/users/Simpson-Computer-Technologies-Research/repos?per_page=100"
            )
            .then((response: Response) => response.json())
            .then((json: any) => {
                for (let i = 0; i < json.length; i++) {
                    if (json[i].name.toLowerCase().includes("apc")) {
                        json[i].name = json[i].name.replace("APC", "Advanced Programming Week ");
                        Repos = [...Repos, json[i]];
                    }
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    });
</script>

<svelte:head>
    <style>
        body {
            background: white;
        }
        :root::-webkit-scrollbar {
            width: 1rem;
        }
        :root::-webkit-scrollbar-track {
            background: lightgray;
        }

        :root::-webkit-scrollbar-thumb {
            background: black;
        }
        :root::-webkit-scrollbar-thumb:hover {
            background: #fbbf24;
        }
    </style>
</svelte:head>

<!-- Align the content to the center -->
<div class="flex flex-col items-center justify-center my-10 mx-10">
    <!-- Header -->
    <h2 class="text-black text-6xl mt-10 font-black">Simpson Research</h2>
    <h2 class="text-black text-lg mt-6">
        Welcome to the Advanced Programming Club Curriculum!
    </h2>
    <h2 class="text-black text-lg mt-2 ">
        Check out <a 
            rel="noopener noreferrer" 
            target="_blank" 
            href="https://simpsonresearch.ca" 
            style="background: none;" 
            class="text-amber-500 font-black hover:underline tracking-wider">Simpson Research</a
        > for more open-source projects!
    </h2>

    <!-- PDF Data -->
    <h2 class="text-black text-4xl mt-10 font-black">Advanced Programming Club</h2>
    {#each Repos as file}
        <h2 class="text-black text-2xl my-10">{file.name}</h2>
        <div class="mb-6 text-center">
            <a
                href={file.html_url}
                rel="noopener noreferrer"
                target="_blank"
                class="bg-black px-10 py-4 text-white hover:bg-amber-400 hover:text-black"
            >
                Visit Github Repo
            </a>
        </div>
    {/each}
</div>

<!-- Bottom Seperator -->
<div class="my-12 w-10 h-1" />
