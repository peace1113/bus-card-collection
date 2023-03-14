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
		href="/card-slot"
		on:click={() => setActive("card-slot")}
		activated={active === "card-slot"}
	  >
		<Graphic class="material-icons" aria-hidden="true">library_books</Graphic>
		<Text>卡片口袋</Text>
	  </Item>
	  </List>
    </Content>
</Drawer>
<Scrim />
