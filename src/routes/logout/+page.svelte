<script lang="ts">
    import { onMount } from "svelte";

    let countdown = 3;

    onMount(() => {
        const timer = setInterval(() => {
            countdown--;
            if (countdown <= 0) {
                clearInterval(timer);
                window.location.href = "/";
            }
        }, 1000);
    });
</script>

<p>
    您已登出，{countdown}秒後將自動跳轉回首頁
</p>