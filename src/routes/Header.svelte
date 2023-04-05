<script lang="ts">
	import TopAppBar, { Row, Title } from "@smui/top-app-bar";
	import Section from "@smui/top-app-bar/src/Section.svelte";
	import IconButton from "@smui/icon-button";
	const defaultPicture = 'img/cards/default.jpg';

	export let open = false;
	export let userPicture = '';
</script>

<TopAppBar
	variant="static"
	prominent={false}
	color={"primary"}
>
	<Row>
		<Section>
			<IconButton class="material-icons" on:click={() => open = !open}>menu</IconButton>
			<Title>Bus 15</Title>
		</Section>
		<Section align="end" toolbar={true}>
			<img class="userPicture" src={userPicture == '' ? defaultPicture : userPicture} alt="user picture"/>
		</Section>
	</Row>
</TopAppBar>

<style>
	.userPicture{
		border-radius: 50%;
		height: 3rem;
		width: 3rem;
	}
</style>