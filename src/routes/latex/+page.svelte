<svelte:head>
  <style> body { background: white; } </style>
</svelte:head>

<script>
    import { onMount} from 'svelte';

    // Clean up the api url and return a functional
    // raw github data url.
    const fixPdfUrl = (url) => {
        url = url.replace(
            "api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/", 
            "raw.githubusercontent.com/Simpson-Computer-Technologies-Research/LaTeX/main/"
        );
        return url.split("?ref")[0] + "/build/main.pdf";
    }

    // Fetch the files within provided folder. Add each
    // of the files urls to the data map.
    const fetchFolderData = async (folderHash, url) => {
        await fetch(url).then((r) => r.json()).then((json) => {
            for (var i = 0; i < json.length; i++) {
                data[folderHash].docs = [...data[folderHash].docs, {
                    "name": json[i]["name"],
                    "pdf_url": fixPdfUrl(json[i].url),
                    "src_url": json[i]["html_url"]
                }];
            }
        });
    }

    // Map for storing repo data
    let data = {};

    // Add all of the repository data from the LaTeX
    // repository on github to a data map
    onMount(async () => {
        await fetch("https://api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/")
            .then((r) => r.json()).then(async (json) => {
                for (let i = 0; i < json.length; i++) {
                    if (!["LICENSE", ".vscode", "README.md"].includes(json[i].name)) {
                        // Add the folder hash to the data map
                        data[json[i].sha] = { name: json[i].name, docs: [] };

                        // Fetch all the folders data, then add it to the map
                        await fetchFolderData(json[i].sha, json[i].url);
                    }
                }
            });
    });
</script>

<!-- Align the content to the center -->
<div class="flex flex-col items-center justify-center my-10 mx-10">
    <!-- Header -->
    <h2 class="text-black text-6xl mt-10 font-black">Tristan Simpson</h2>
    <h2 class="text-black text-lg mt-6">All the PDFs were made with <mark style="background: none; color: #3F6022; font-weight: 700;">LaTeX</mark></h2>
    <h2 class="text-black text-lg mt-2">If you want to learn how dm me on discord <mark style="background: none; color: #5865F2; font-weight: 700;">tristan#2230</mark></h2>

    <!-- PDF Data -->
    {#each Object.entries(data) as [_, folder]}
        <h2 class="text-black text-4xl mt-10 font-black">{folder.name}</h2>
        {#each folder.docs as doc}
            <h2 class="text-black text-2xl my-10">{doc.name}</h2>
            <div class="mb-6">
                <a href={"https://docs.google.com/viewer?url=" + doc.pdf_url} rel="noopener noreferrer" target="_blank" class="bg-black px-10 py-4 text-white hover:bg-blue-800">
                    View PDF
                </a>
                <a href={doc.src_url} rel="noopener noreferrer" target="_blank" class="bg-black px-10 py-4 text-white shadow-lg hover:bg-blue-800">
                    View Source Code
                </a>
            </div>
        {/each}
    {/each}
</div>

<!-- Bottom Seperator -->
<div class="my-12 w-10 h-1"></div>
