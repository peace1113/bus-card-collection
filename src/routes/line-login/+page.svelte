<script lang="ts">
    import Button, {Label} from '@smui/button';

    function lineLogin(){
        let client_id = '1660740786';
        let redirect_uri = 'https://sunny-smakager-f126f0.netlify.app/';
        let link = 'https://access.line.me/oauth2/v2.1/authorize?';
        link += 'response_type=code';
        link += '&client_id=' + client_id;
        link += '&redirect_uri=' + redirect_uri;
        link += '&state=login';
        link += '&scope=openid%20profile';
        window.location.href = link;
    }
</script>

 

<Button variant="raised" color="secondary" style="margin: 1rem;" on:click={() => lineLogin()}>
    <Label>
        Line 登入測試
    </Label> 
</Button>