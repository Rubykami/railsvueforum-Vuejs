<template>
  <header class="header">
    <div class="header__logodiv">
      <span class="header__logodiv__rails"> Rails </span>
      <span class="header__logodiv__vue"> Vue </span>
    </div>
    <nav class="header__firstnav">
      <RouterLink class="header__firstnav__item" to="#" @click="ShowForumnav">FORUMS</RouterLink>
      <RouterLink class="header__firstnav__item" to="#">BLOG</RouterLink>
      <RouterLink class="header__firstnav__item" to="#"
        >WHAT'S NEW
        <font-awesome-icon
          class="header__firstnav__arrowicon"
          icon="fa-solid fa-caret-down"
          @click="Whatsnew"
        />
      </RouterLink>
      <RouterLink class="header__firstnav__item" to="#"
        >MEMBERS
        <font-awesome-icon
          class="header__firstnav__arrowicon"
          icon="fa-solid fa-caret-down"
          @click="Members"
        />
      </RouterLink>
    </nav>
    <div class="header__secondnav__div" ref="forumsecondnavdiv">
      <nav class="header__secondnav">
        <RouterLink class="header__secondnav__item" to="#"> Trending</RouterLink>
        <RouterLink class="header__secondnav__item" to="#">
          Find Threads</RouterLink
        >
        <RouterLink class="header__secondnav__item" to="#"> Watched</RouterLink>
        <RouterLink class="header__secondnav__item" to="#">
          Search Forums</RouterLink
        >
        <RouterLink class="header__secondnav__item" to="#">
          Mark Forums read</RouterLink
        >
        <RouterLink class="header__secondnav__item" to="#"> History </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">

import { ref } from 'vue'


const forumsecondnavdiv = ref(null)

const Whatsnew = () => {
  console.log("whatsnew")
}

const Members = () => {
  console.log("members")
}

const ShowForumnav = () => {
  forumsecondnavdiv.value.style.display = "block"
}


</script>

















<style scoped lang="scss">
.header {
  &__firstnav {
    font-family: Quicksand;
    display: flex;
    padding-left: 3rem;
    padding-top: 1rem;
    &__item {
      background-color: #2d3238;
      padding: 1rem;
      text-decoration: none;
      color: rgba(white, 0.7);
      &:focus {
        background-color: #42464d;
        border-radius: 5px 5px 0px 0px;
        .header__firstnav__arrowicon {
          background-color: #42464d;
        }
      }
      &:hover {
        color: white;
      }
    }
    &__arrowicon {
      background-color: #2d3238;
      color: rgba(darkgray, 0.5);
      &:hover {
        color: white;
      }
    }
  }
  &__secondnav {
    font-family: Raleway;
    padding-left: 3rem;
    padding-top: 1rem;
    display: flex;
    background-color: #42464d;
    gap: 1rem;
    &__item {
      text-decoration: none;
      background-color: #42464d;
      padding-bottom: 1rem;
      color: rgba(white, 0.7);
      &:hover {
        color: white;
      }
    }
    &__div {
      display: none;
    }
  }
  &__logodiv {
    padding-left: 2rem;
    font-family: Flamenco;
    font-size: 4rem;
    background-color: #2d3238;
    &__rails {
      background-color: #2d3238;
      color: #ff1e00;
    }
    &__vue {
      color: #03c988;
      background-color: #2d3238;
    }
  }
}
</style>
