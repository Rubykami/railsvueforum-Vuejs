<script setup lang="ts">
import HeaderComponent from "./components/Header.vue";
</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: gray;
}


</style>
