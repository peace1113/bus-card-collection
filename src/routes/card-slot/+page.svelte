<script lang="ts">
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
  } from '@smui/card';
  import IconButton, {Icon} from '@smui/icon-button';

	let clicked = 0;
</script>

<svelte:head>
	<title>卡片口袋</title>
	<meta name="description" content="Card Slot" />
</svelte:head>

<Card>
	<div style="padding: 1rem;">
	  <h2 class="mdc-typography--headline6" style="margin: 0;">
		A card with media.
	  </h2>
	  <h3 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">
		And a subtitle.
	  </h3>
	</div>
	<PrimaryAction on:click={() => clicked++}>
	  <Media class="card-media-16x9" aspectRatio="16x9" />
	  <Content class="mdc-typography--body2">
		And some info text. And the media and info text are a primary action
		for the card.
	  </Content>
	</PrimaryAction>
  </Card>