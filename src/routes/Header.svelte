<script lang="ts">
	import TopAppBar, { Row, Title } from "@smui/top-app-bar";
	import Section from "@smui/top-app-bar/src/Section.svelte";
	import IconButton from "@smui/icon-button";
    import Drawer from "./Menu.svelte";

	let open = false;
</script>

<TopAppBar
	variant="static"
	prominent={false}
	dense={true}
	color={"secondary"}
>
	<Row>
		<Section>
			<IconButton class="material-icons" on:click={() => open = !open}>menu</IconButton>
			<Title>Greed Island</Title>
		</Section>
		<Section align="end" toolbar={true}>
			<IconButton class="material-icons" aria-label="account_circle" on:click={() => location.replace('/')}>
				account_circle
			</IconButton>
		</Section>
	</Row>
</TopAppBar>
<Drawer bind:open />