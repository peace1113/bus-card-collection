<script lang="ts">
	import TopAppBar, { Row, Title } from "@smui/top-app-bar";
	import Section from "@smui/top-app-bar/src/Section.svelte";
	import IconButton from "@smui/icon-button";
    import Drawer from "./Menu.svelte";
	
	export let open = false;
	export let userPicture = 'img/cards/default.jpg';
</script>

<TopAppBar
	variant="static"
	prominent={false}
	color={"primary"}
>
	<Row>
		<Section>
			<IconButton class="material-icons" on:click={() => open = !open}>menu</IconButton>
			<Title>Bus Card Collection</Title>
		</Section>
		<Section align="end" toolbar={true}>
			<img class="userPicture" src={userPicture} alt="user picture"/>
		</Section>
	</Row>
</TopAppBar>

<style>
	.userPicture{
		border-radius: 50%;
		height: -webkit-fill-available;
	}
</style>