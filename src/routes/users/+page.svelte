<script>
	import { Edit, Trash2, Plus, RefreshCw } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { getUsers } from '$lib/services/clients';
	import { dropUser } from '../../lib/services/clients.js';

	let fetching = false;
	let users = [];
	const gender = {
		M: 'Male',
		F: 'Female'
	};

	async function getUserList() {
		try {
            fetching = true;
			const { records } = await getUsers();
			users = records;
		} catch (e) {
			console.error(e);
		} finally {
            fetching = false;
        }
	}

	async function handleDelete(id) {
		try {
			await dropUser(id);
			await getUserList();
		} catch (e) {
			console.error(e);
		}
	}
    function addNewUser(){
		sessionStorage.setItem('nextUserId', +(users?.sort((a,b) => a._id < b._id).pop()?._id ?? 0)+1);
        goto('/users/add');
    }

	onMount(async () => {
		await getUserList();
	});
</script>

<div>
	<button class="btn" on:click={() => addNewUser()} disabled={fetching}>
		<span class="btn-content">
			<span>Create</span>
			<Plus size="15" />
		</span>
	</button>
	<div class="module-wrapper">
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Last Name</th>
					<th>Email</th>
					<th>Gender</th>
					<th>Status</th>
					<th>Actions</th>
				</tr>
			</thead>
			{#if users.length > 0}
				<tbody>
					{#each users as user}
						<tr>
							<td>{user._id}</td>
							<td>{user.attributes?.name}</td>
							<td>{user.attributes?.firstName}</td>
							<td>{user.attributes?.lastName}</td>
							<td>{gender[user.attributes?.gender]}</td>
							<td>{user.status}</td>
							<td>
								<div class="actions">
									<div class="edit">
										<a href={`users/${user._id}`}>
											<Edit />
										</a>
									</div>
									<div class="delete" on:click={() => handleDelete(user._id)}>
										<Trash2 />
									</div>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			{:else}
				<tbody>
					<tr>
						<td colspan="7" class="no-data">
							<span class:rotate={fetching}>
								{#if fetching}
									<RefreshCw size="14" />
								{:else}
									No data
								{/if}
							</span>
						</td>
					</tr>
				</tbody>
			{/if}
		</table>
	</div>
</div>

<style>
	.btn-content {
		display: flex;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		padding: 30px;
		border: 0;
	}

	table th:first-child {
		border-radius: 10px 0 0 0;
	}

	table th:last-child {
		border-radius: 0 10px 0 0;
	}

	table thead {
		background-color: var(--secondary-color);
		text-align: left;
		height: 60px;
	}

	table tbody tr:nth-child(even) {
		background-color: rgba(226, 201, 146, 0.2);
	}

	table tbody tr {
		height: 50px;
	}

	table th,
	td {
		padding: 20px;
	}

	td.no-data {
		text-align: center;
	}

	.actions {
		display: flex;
		grid-column-gap: 10px;
	}

	.edit a {
		text-decoration: none;
		color: var(--primary-color);
	}

	.delete {
		cursor: pointer;
		color: #c21c1c;
	}
</style>
