<script lang="ts">
	import Drawer, {AppContent, Content, Header, Subtitle, Scrim, Title} from "@smui/drawer";
	import List, {Item, Text, Graphic, Separator, Subheader} from "@smui/list";
	export let open = false;
	export let userName = "";
	export let isLogin = false;
	let active = "home";

	function setActive(value: string){
		active = value;
	}
</script>
<Drawer variant="modal" bind:open>
	<Header>
		<Title>{userName}</Title>
	</Header>
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
		{#if isLogin}
		<Item
		href="/card-dex"
		on:click={() => setActive("card-dex")}
		activated={active === "card-dex"}
	  >
		<Graphic class="material-icons" aria-hidden="true">collections_bookmark</Graphic>
		<Text>卡片圖鑑</Text>
	  </Item>
	  <Item
	  href="/login"
	  on:click={() => setActive("card-dex")}
	  activated={active === "card-dex"}
	>
	  <Graphic class="material-icons" aria-hidden="true">login</Graphic>
	  <Text>Line登入</Text>
	</Item>
	{/if}
	<Separator></Separator>
	<Item
	href="/login"
	on:click={() => setActive("card-dex")}
	activated={active === "card-dex"}
  >
	<Graphic class="material-icons" aria-hidden="true">logout</Graphic>
	<Text>登出</Text>
  </Item>
	  </List>
    </Content>
</Drawer>
<Scrim style="top:auto;"></Scrim>