<template>
  <header class="header">
    <div class="header__logodiv">
      <span class="header__logodiv__rails"> Rails </span>
      <span class="header__logodiv__vue"> Vue </span>
    </div>
    <nav class="header__firstnav">
      <RouterLink class="header__firstnav__item" to="#" @click="ShowForumnav"
        >FORUMS</RouterLink
      >
      <RouterLink class="header__firstnav__item" to="#">BLOG</RouterLink>
      <RouterLink class="header__firstnav__item" to="#"
        >WHAT'S NEW
        <font-awesome-icon
          class="header__firstnav__arrowicon"
          icon="fa-solid fa-caret-down"
          @click="ShowWhatsnew"
        />
      </RouterLink>
      <RouterLink class="header__firstnav__item" to="#"
        >MEMBERS
        <font-awesome-icon
          class="header__firstnav__arrowicon"
          icon="fa-solid fa-caret-down"
          @click="ShowMembersOptions"
        />
      </RouterLink>
    </nav>
    <div ref="whatsnewoptions" class="header__firstnav__whatsnewdiv">
      <RouterLink class="header__firstnav__whatsnewdiv__item" to="#"
        >New Profile Posts</RouterLink
      >
    </div>
    <div class="header__secondnav__div" ref="forumsecondnavdiv">
      <nav class="header__secondnav">
        <RouterLink class="header__secondnav__item" to="#">
          Trending</RouterLink
        >
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
        <RouterLink class="header__secondnav__item" to="#">
          History
        </RouterLink>
      </nav>
    </div>
    <nav ref="membersoptions" class="header__secondnav__membersoptions">
      <RouterLink class="header__secondnav__membersoptions__item" to="#">
        Registered members
      </RouterLink>
      <RouterLink class="header__secondnav__membersoptions__item" to="#">
        Current visitors
      </RouterLink>
      <RouterLink class="header__secondnav__membersoptions__item" to="#">
        New profile Posts
      </RouterLink>
      <RouterLink class="header__secondnav__membersoptions__item" to="#">
        Search profile posts
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const forumsecondnavdiv = ref(null);
const whatsnewoptions = ref(null);
const membersoptions = ref(null);

const ShowWhatsnew = () => {
  if (whatsnewoptions.value.style.display === "none") {
    whatsnewoptions.value.style.display = "block";
  } else {
    whatsnewoptions.value.style.display = "none";
  }
};

const ShowMembersOptions = () => {
  if (membersoptions.value.style.display === "none") {
    membersoptions.value.style.display = "flex";
  } else {
    membersoptions.value.style.display = "none";
  }
};

const ShowForumnav = () => {
  if (forumsecondnavdiv.value.style.display === "none") {
    membersoptions.value.style.marginTop = "-3.2rem"
    forumsecondnavdiv.value.style.display = "flex";
  } else {
    membersoptions.value.style.marginTop = "0.2rem"
    forumsecondnavdiv.value.style.display = "none";
  }
};

onMounted(() => {
  forumsecondnavdiv.value.style.display = "none";
  whatsnewoptions.value.style.display = "none";
  membersoptions.value.style.display = "none";
});
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
      &:nth-child(3) {
        &:focus {
          background-color: #2d3238;
        }
      }
      &:nth-child(4) {
        &:focus {
          background-color: #2d3238;
        }
      }
      &:hover {
        color: white;
      }
    }
    &__arrowicon {
      background-color: #2d3238;
      color: rgba(darkgray, 0.5);
      &:nth-child(1) {
        background-color: #2d3238;
      }
      &:hover {
        color: white;
      }
    }
    &__whatsnewdiv {
      border-radius: 5px 5px 5px 5px;
      padding: 0.5rem;
      padding-right: 1rem;
      position: absolute;
      font-family: Raleway;
      margin-left: 13.8rem;
      font-size: 0.9rem;
      background-color: #383c42;
      border-top: 1px solid gray;
      display: none;
      &:hover {
        cursor: pointer;
      }
      &__item {
        background-color: #383c42;
        text-decoration: none;
        color: white;
        &:hover {
          color: #03c988;
        }
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
    width: 100vw;
    &__membersoptions {
      z-index: 10;
      display: none;
      flex-direction: column;
      gap: 1rem;
      border-radius: 5px 5px 5px 5px;
      margin-left: 22.6rem;
      border-top: 1px solid gray;
      position: absolute;
      padding: 1rem;
      background-color: #383c42;
      &__item {
        background-color: #383c42;
        font-family: Quicksand;
        color: rgba(white, 0.7);
        text-decoration: none;
        &:hover {
          color: white;
        }
      }
    }
    &__item {
      text-decoration: none;
      background-color: #42464d;
      padding-bottom: 1rem;
      color: rgba(white, 0.7);
      &:hover {
        color: white;
      }
    }
  }
  &__logodiv {
    padding-left: 2rem;
    font-family: Flamenco;
    font-size: 4rem;
    background-color: #2d3238;
    display: flex;
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
