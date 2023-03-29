<script>
	import Header from './Header.svelte';
	import './styles.css';
	import Menu from './Menu.svelte';
	import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

	let openMenu = false;

	export let data;
	onMount(()=>{
		if(!data.isLogin) goto(data.loginLink);
	})
</script>

<div class="app">
	<Header bind:open={openMenu} userPicture={data.userPicture}/>
	<main>
		<Menu bind:open={openMenu} userName={data.userName}/>
		<slot/>
	</main>
	<footer>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 72rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
