<script lang="ts">
    import Button, {Label} from '@smui/button';
    import type { PageData } from '../$types';

    export let data : PageData;
</script> 

<Button variant="raised" color="secondary" style="margin: 1rem;" on:click={()=>window.location.href = data.link}>
    <Label>
        Line 登入測試
    </Label> 
</Button>