<script lang="ts">
	import LayoutGrid, {Cell} from "@smui/layout-grid";
	import BusCard from "../../components/BusCard.svelte";

</script>

<svelte:head>
	<title>卡片口袋</title>
	<meta name="description" content="Card Slot" />
</svelte:head>

<LayoutGrid>
	{#each Array(6) as _unused, i}
		<Cell spanDevices={{ desktop: 3, phone: 4}}>
			<BusCard title={`卡片${i+1}`} level={`SS`} description={`這裡放卡片描述這裡放卡片描述這裡放卡片描述這裡放卡片描述這裡放卡片描述這裡放卡片描述這裡放卡片描述這裡放卡片描述這裡放卡片描述`} 
			imgSrc={`https://static1.srcdn.com/wordpress/wp-content/uploads/Bulbasaur-Looking-Up.jpg`}></BusCard>
		</Cell>
	{/each}
</LayoutGrid>
