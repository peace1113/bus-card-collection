<script lang="ts">
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
  } from '@smui/card';

  export let title: string;
  export let level: string;
  export let description: string;
  export const imgSrc: string = "https://static1.srcdn.com/wordpress/wp-content/uploads/Bulbasaur-Looking-Up.jpg";


</script>

<Card>
  <div style="padding: 1rem;">
    <h3 class="mdc-typography--headline6" style="margin: 0;">
      {title}
    </h3>
    <h4 class="mdc-typography--subtitle2" style="margin: 0; color: #888;">
      {level}
    </h4>
  </div>
  <PrimaryAction>
    <Media class="card-media-square" aspectRatio="square" style="background-image: url({imgSrc})"/>
    <Content class="mdc-typography--body2">
      {description}
    </Content>
  </PrimaryAction>
</Card>
