<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__logodiv">
        <span class="header__logodiv__rails"> Rails </span>
        <span class="header__logodiv__vue"> Vue </span>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  &__nav {
  }
  &__logodiv {
    padding-left: 2rem;
    font-family: Flamenco;
    font-size: 4rem;
    background-color: #2d3238;
    &__rails {
      background-color: #2d3238;
      color: #FF1E00;
    }
    &__vue {
      color: #03C988;
      background-color: #2d3238;
    }
  }
}
</style>
