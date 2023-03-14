<script lang="ts">
	import Drawer, {AppContent, Content, Header, Subtitle, Scrim,} from "@smui/drawer";
	import List, {Item, Text, Graphic, Separator, Subheader} from "@smui/list";

	export let open = false;
	let active = "home";

	function setActive(value: string){
		active = value;
	}
</script>
<Drawer variant="modal" bind:open>
    <Content>
      <List>
        <Item
          href="/"
		  on:click={() => setActive("home")}
		  activated={active === "home"}
        >
          <Graphic class="material-icons" aria-hidden="true">home</Graphic>
          <Text>首頁</Text>
        </Item>
		<Item
		href="/card-dex"
		on:click={() => setActive("card-dex")}
		activated={active === "card-dex"}
	  >
		<Graphic class="material-icons" aria-hidden="true">collections_bookmark</Graphic>
		<Text>卡片圖鑑</Text>
	  </Item>
	  </List>
    </Content>
</Drawer>
<Scrim />
