<script setup lang="ts">
import HeaderComponent from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <Footer />
</template>

<style src="./assets/scss/global.scss" lang="scss">
</style>
