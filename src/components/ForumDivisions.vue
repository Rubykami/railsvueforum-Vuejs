<template>
  <section class="main__forumdivisionsection">
    <h1 class="main__forumdivision__title">
      <span class="main__forumdivision__title__text">
        {{ props.Title }}
      </span>
    </h1>
    <div class="main__forumdivision__contentdiv">
      <span class="main__forumdivision__contentdiv__content">
        <slot name="singletext"/>
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  Title: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.main {
  &__forumdivisionsection {
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin: 1.5rem;
  }
  &__forumdivision__title {
    background-color: #2371a2;
    color: white;
    padding: 0.5rem;
    padding-left: 1rem;
    font-size: 1rem;
    font-family: "Roboto";
    border-radius: 5px 5px 0px 0px;
    &__text {
      background-color: #2371a2;
      &:hover {
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
  }
  &__forumdivision__contentdiv {
    color: white;
    background-color: #42464d;
    padding: 1.5rem;
    padding-left: 4rem;
    font-family: "Roboto";
    border-radius: 0px 0px 5px 5px;
    &:hover {
      .main__forumdivision__contentdiv__content {
        background-color: #484d56;
      }
      background-color: #484d56;
      cursor: pointer;
    }
    &__content {
      background-color: #42464d;
      &:hover {
        border-bottom: 1px solid white;
        background-color: #484d56;
      }
    }
  }
}
</style>
