<script lang="ts">
	import {page} from '$app/stores';
    import { onMount } from 'svelte';
    import LineToken from '../models/LineToken';

    const code = $page.url.searchParams.get('code') ?? '';
	let lineToken = new LineToken();
	let userName : string, userImg : string;
	onMount(async() => {
		if(code !== ''){
			const response = await fetch('/api/Login?' + new URLSearchParams({
				code : code
			})).then(async (res) => {
				const data = await res.json();
				userName = data.name;
				userImg = data.picture;
			});
		}
	})


</script>

<svelte:head>
	<title>巴士團15週年</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<h1>巴士團15週年</h1>
<div>歡迎光臨 {userName}</div>
<img src={userImg} alt="User Picture"/>