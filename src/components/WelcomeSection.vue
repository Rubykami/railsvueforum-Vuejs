<template>
  <section class="main__welcomesection">
    <h1 class="main__welcomesection__welcome">Welcome to the AnimeWorld!</h1>
    <h2 class="main__welcomesection__comesignup">
      Feel free to sign up and join the discussion. It's free and takes 10
      seconds!
    </h2>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.main {
    &__welcomesection {
    font-family: Raleway;
    text-align: center;
    margin: auto;
    width: 90vw;
    margin-top: 1rem;
    background-image: url(../assets/img/background.jpg);
    border-radius: 5px 5px 5px 5px;
    padding: 1rem;
    &__welcome {
        color: white;
        padding: 0.5rem;
        padding-bottom: 0rem;
        }
    &__comesignup {
        padding: 0.5rem;
        padding-top: 0rem;
        color: white;
        }
    }
}
</style>
