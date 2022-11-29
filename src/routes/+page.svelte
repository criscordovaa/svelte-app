<script>
    import {onMount} from 'svelte';
    import { page } from '$app/stores';
    import {goto} from '$app/navigation'
    onMount(() => {
        if ($page.route.id === '/'){
            goto('/users')
        }
        console.log($page)
    })
</script>
