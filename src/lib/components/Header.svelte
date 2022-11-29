<script>
    import { ArrowLeftCircle } from 'lucide-svelte';
    import {createEventDispatcher} from 'svelte';
    export let title;
    const dispatch = createEventDispatcher();
</script>

<div class="module-header">
    <div class="back" on:click={() => dispatch('backpressed')}>
        <ArrowLeftCircle />
    </div>
    {#if title}
        <h2>{title}</h2>
    {/if}
</div>

<style>
    .module-header {
        display: flex;
        align-items: center;
        grid-column-gap: 10px;
    }

    .module-header .back:hover {
        opacity: 0.5;
    }

    .module-header .back {
        cursor: pointer;
    }
</style>
