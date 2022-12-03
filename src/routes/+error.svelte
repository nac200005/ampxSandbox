<script>
    import { onMount } from "svelte";
    onMount(() => {
        // Get the invalid route if it exists
        const LOCATION = window.location.href.split("/")[3];

        // If an invalid route is present
        if (LOCATION != undefined) window.location.assign(
            // Reroute to the /search?query={invalid route}
            window.location.origin + "/search?query=" + LOCATION);
        
        // Else, just go back to the home page
        else window.location.assign(window.location.origin);
    })
</script>
