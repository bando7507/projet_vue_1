<template>
<div class="home">
    <NavBar />
    <div class="max-width">
        <HeroContent />
    </div>
    
    <p>
        home
    </p>
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
        padding: 10px 80px;
    }
}
</style>