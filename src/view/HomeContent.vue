<template>
<div class="home">
    <div class="max-width">
        <NavBar />
        <HeroContent />
    </div>
</div>
</template>

<script>

import NavBar from "../components/NavBar.vue"
import HeroContent from '../components/HeroContent.vue'
export default {
    name: 'HomeContent',
    components:{
        NavBar,
        HeroContent
    }
}
</script>

<style lang="scss" scoped>
.home{

    .max-width{
        padding: 10px 120px;
    }
}
</style>