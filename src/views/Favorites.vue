<script setup>
const share = () => {
    if (navigator.share) {
        navigator.share({
            title: '分享標題',
            text: '分享文字',
            url: 'https://www.twitch.tv/japan_asmr'
        })
    } else {
        navigator.clipboard.writeText('Code is here')
    }
}
</script>
<template >
    <div>
        <button @click="share" class="btn-lg">點我</button>
    </div>
</template>

<style lang="">
    
</style>