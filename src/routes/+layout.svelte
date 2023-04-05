<script>
	import Header from './Header.svelte';
	import './styles.css';
	import Menu from './Menu.svelte';

	let openMenu = false;

	export let data;
</script>

<div class="app">
	<Header bind:open={openMenu} userPicture={data.userPicture}/>
	<main>
		<Menu bind:open={openMenu} userName={data.userName} isLogin={data.isLogin}/>
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

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
