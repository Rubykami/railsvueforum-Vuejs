<template>
  <section class="main__latestpostssection">
    <h1 class="main__latestpostssection__title">
      <font-awesome-icon
        class="main__latestpostssection__title__icon"
        icon="fa-solid fa-message"
      />
      <span class="main__latestpostssection__title__text"> Latest Posts </span>
    </h1>
    <div class="main__latestpostssection__postsdiv">
      <div class="main__latestpostssection__postsdiv__post">post 1</div>
      <div class="main__latestpostssection__postsdiv__post">post 2</div>
      <div class="main__latestpostssection__postsdiv__post">post 3</div>
      <div class="main__latestpostssection__postsdiv__post">post 4</div>
      <div class="main__latestpostssection__postsdiv__post">post 5</div>
      <div class="main__latestpostssection__postsdiv__post">post 6</div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main__latestpostssection {
  margin-top: 1rem;
  &__title {
    border-radius: 5px 5px 0px 0px;
    padding: 1rem;
    background-color: #42464d;
    border-bottom: 1px solid white;
    display: flex;
    gap: 0.5rem;
    &__text {
      background-color: #42464d;
      color: white;
    }
    &__icon {
      background-color: #42464d;
      color: white;
    }
  }
  &__postsdiv {
    border-radius: 5px 5px 5px 5px;
    padding: 1rem;
    background-color: #42464d;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    color: white;
    &__post {
      background-color: #42464d;
    }
  }
}
</style>
