<script lang="ts">
	import LayoutGrid, {Cell} from "@smui/layout-grid";
    import { onMount,onDestroy } from "svelte";
	import BusCard from "../../components/BusCard.svelte";
    import type CardDex from "../../models/CardDex";
	import CircularProgress from '@smui/circular-progress';
	import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';

	let allCards : Array<CardDex> = new Array<CardDex>();

	onMount(async() => {		
		const response = await fetch('/api/CardDex');
		allCards = (await response.json());
	});
	let matches : any;
</script>

<svelte:head>
	<title>卡片圖鑑</title>
	<meta name="description" content="Card Slot" />
</svelte:head>

<div class="showOnMobile">
	<Accordion style="margin: 1rem;">
		{#each allCards as card, i}
			<Panel>
				<Header>{card.name}</Header>
				<Content>
					<BusCard title={card.name} level={card.level} description={card.description}
					imgSrc={card.img}></BusCard>
				</Content>
			</Panel>
		{/each}
	</Accordion>
</div>
<div class="showOnDesktop">
	<LayoutGrid>
		{#each allCards as card, i}
			<Cell spanDevices={{ desktop: 3, phone: 4}}>
				<BusCard title={card.name} level={card.level} description={card.description}
				imgSrc={card.img}></BusCard>
			</Cell>
			{:else}
			<Cell span={12}>
				<div style="display: flex; justify-content:center;">
					<CircularProgress style="height: 128px; width: 128px;"  indeterminate/>
				</div>
			</Cell>
		{/each}
	</LayoutGrid>
</div>

<style>
	@media all and (max-width: 480px) {
		.showOnMobile{
			display: block;
		}

		.showOnDesktop{
			display: none;
		}
	}

	@media all and (min-width: 481px) {
		.showOnMobile{
			display: none;
		}

		.showOnDesktop{
			display: contents;
		}
	}
</style>