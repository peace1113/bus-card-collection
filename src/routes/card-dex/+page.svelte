<script lang="ts">
	import LayoutGrid, {Cell} from "@smui/layout-grid";
    import { onMount } from "svelte";
	import BusCard from "../../components/BusCard.svelte";
    import type CardDex from "../../models/CardDex";
	import CircularProgress from '@smui/circular-progress';
	
	let allCards : Array<CardDex> = new Array<CardDex>();

	onMount(async() => {		
		const response = await fetch('/api/CardDex');
		allCards = (await response.json());
	});
</script>

<svelte:head>
	<title>卡片圖鑑</title>
	<meta name="description" content="Card Slot" />
</svelte:head>
<LayoutGrid>
	{#each allCards as card, i}
		<Cell spanDevices={{ desktop: 3, phone: 4}}>
			<BusCard title={card.name} level={card.level} description={card.description}
			imgSrc={`https://static1.srcdn.com/wordpress/wp-content/uploads/Bulbasaur-Looking-Up.jpg`}></BusCard>
		</Cell>
		{:else}
		<Cell span={12}>
			<div style="display: flex; justify-content:center;">
				<CircularProgress style="height: 128px; width: 128px;"  indeterminate/>
			</div>
		</Cell>
	{/each}
</LayoutGrid>

