<script>
	import Header from "$lib/components/Header.svelte";
	import UserForm from "$lib/components/Userform.svelte";
	import { goto } from '$app/navigation';
	import {createClient} from '$lib/services/clients'
	let fetching = false;
	function onBackPressed() {
		goto('/users')
	}
	async function userCreate({detail: {...user}}) {
		try {
			const nextUserId = sessionStorage.getItem('nextUserId');
			fetching=true;
			await createClient({...user, id: nextUserId});
			onBackPressed();
		} catch (e) {
			console.error(e)
		} finally {
			fetching=false;
		}
	}
</script>

<div class="module-wrapper">
	<Header on:backpressed={onBackPressed} title="Add a new client"/>
	<UserForm on:submitform={userCreate} fetching={fetching}/>
</div>

<style>
	.module-wrapper {
		padding: 15px 50px 50px 50px;
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}

	.rotate {
		animation: rotation 2s infinite linear;
		display: block;
	}
</style>
