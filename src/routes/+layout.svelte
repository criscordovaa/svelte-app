<script>
	import { User, Briefcase, Archive, Clipboard } from 'lucide-svelte';
	import { page } from '$app/stores';

	const menuItems = [
		{
			text: 'Clients',
			icon: User,
			route: '/users'
		},
		{
			text: 'Wallet',
			icon: Briefcase,
			route: '/wallet'
		},
		{
			text: 'Services',
			icon: Archive,
			route: '/services'
		},
		{
			text: 'Invoice',
			icon: Clipboard,
			route: '/invoice'
		}
	];
</script>

<div class="wrapper">
	<aside>
		<div class="icon">
		</div>
		<div class="items">
			{#each menuItems as item}
				<a href={item.route} class="item {$page.route.id.includes(item.route) ? 'selected' : ''}">
					{#if $page.route.id.includes(item.route)}
						<div class="top-selected-car-container">
							<div class="selected-car-right" />
						</div>
					{/if}
					<div class="item-container">
						<svelte:component
							this={item.icon}
							color={$page.route.id.includes(item.route) ? '#348f6c' : '#e2c992'}
							class="icon-svg"
						/>
						<span class=" item-icon-text {$page.route.id.includes(item.route) ? 'selected' : ''}"
							>{item.text}</span
						>
					</div>
					{#if $page.route.id.includes(item.route)}
						<div class="top-selected-car-container">
							<div class="selected-car-right" />
						</div>
					{/if}
				</a>
			{/each}
		</div>
	</aside>
	<div class="content">
		<nav>
		</nav>
		<main>
			<slot />
		</main>
	</div>
</div>

<style>
	:global(:root) {
		--primary-color: #348f6c;
		--secondary-color: #e2c992;
		--background-main: #fff;
		--title-color: #3f3d56;
	}

	:global(body) {
		background-color: var(--primary-color);
		margin: 0;
		padding: 0;
		height: 100vh;
		width: 100vw;
	}

	:global(.module-wrapper) {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		border-radius: 10px;
	}

	:global(.btn) {
		color: #fff;
		background-color: var(--primary-color);
		border: 1px;
		padding: 8px 20px;
		border-radius: 10px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		margin-bottom: 20px;
		cursor: pointer;
	}

	:global(.btn:active) {
		background-color: var(--primary-color);
		opacity: 0.7;
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}

	:global(.rotate) {
		animation: rotation 2s infinite linear;
		display: block;
	}

	main {
		background-color: var(--background-main);
		flex: 10;
		border-radius: 50px 0 0 0;
		padding: 50px;
	}

	nav {
		background-color: var(--primary-color);
		flex: 1;
	}

	aside {
		background-color: var(--primary-color);
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.wrapper {
		display: flex;
		height: 100%;
	}

	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		flex: 5;
	}

	aside .icon {
		flex: 1;
	}

	aside .items {
		flex: 10;
		display: flex;
		flex-direction: column;
		margin: 50px 0 0 20px;
	}

	.items .item {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: #fff;
	}

	.items .item .item-container {
		grid-column-gap: 12px;
		display: flex;
		padding: 15px;
	}

	.items .item.selected {
		position: relative;
		/*background-color: var(--background-main);*/
		/*border-radius: 50px 0 0 50px;*/
	}

	.items .item.selected .item-container {
		background-color: var(--background-main);
		border-radius: 50px 0 0 50px;
	}

	.top-selected-car-container {
		background-color: var(--background-main);
		height: 10px;
		width: 100%;
		position: relative;
	}

	.top-selected-car-container .selected-car-right {
		border-radius: 0 0 50px 0;
		background-color: var(--primary-color);
		width: 100%;
		height: 100%;
	}

	.top-selected-car-container:last-child .selected-car-right {
		border-radius: 0 50px 0 0;
		background-color: var(--primary-color);
		width: 100%;
		height: 100%;
	}

	.item-icon-text {
		align-self: flex-end;
	}

	.item-icon-text.selected {
		color: var(--title-color);
	}
</style>
