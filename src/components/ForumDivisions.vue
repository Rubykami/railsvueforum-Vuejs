<template>
  <div class="main__forumdivisionsection">
    <h1 class="main__forumdivision__title">
      {{ props.Title }}
    </h1>
    <div class="main__forumdivision__contentdiv">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  Title: {
    type: String
  }
}
)

</script>

<style lang="scss" scoped>
.main {
  &__forumdivisionsection {
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 20vh;
  }
  &__forumdivision__title {
    color: white;
  }
  &__forumdivision__contentdiv {
    color: white;
  }
}
</style>
