<template>
<div id="app">
  <router-view />
  <FooterContent />
</div>
</template>

<script>

import FooterContent from './components/FooterContent.vue'
export default {
  name: 'App',
  components: {
    FooterContent
  }
}
</script>

<style lang="scss" scoped>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app{
  font-family: 'Roboto', sans-serif;
}
</style>
