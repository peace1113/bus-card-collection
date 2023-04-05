<script lang="ts">
	import {page} from '$app/stores';
    import { onMount } from 'svelte';
    import LineToken from '../models/LineToken';
	import Button from '@smui/button/src/Button.svelte';
	export let data;
</script>

<svelte:head>
	<title>巴士團15週年</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<h1>巴士團15週年</h1>
{#if data.status == 203}
<Button variant="raised" style="margin: 1rem;" on:click={() => window.location.href = data.loginLink}>Line 登入</Button>
<Button variant="raised" style="margin: 1rem;" color="secondary">測試環境 登入</Button>
{:else if data.status == 404}
<p>{data.body}</p>
{/if}
