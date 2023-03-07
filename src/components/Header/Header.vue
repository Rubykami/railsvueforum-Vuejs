<template>
  <header class="header">
    <section class="header__logodiv">
      <span class="header__logodiv__anime"> Anime </span>
      <span class="header__logodiv__world"> World </span>
    </section>
    <nav class="header__firstnav">
      <div class="header__firstnav__linksdiv">
        <Link
          v-for="Link in HeaderFirsNavLinksArray"
          :key="Link.id"
          :To="Link.to"
          :Text="Link.Text"
          :Class="Link.class"
        />
        <Link Class="header__firstnav__item" To="#">
          WHAT'S NEW
          <font-awesome-icon
            class="header__firstnav__arrowicon"
            icon="fa-solid fa-caret-down"
            @click="ShowWhatsnew"
          />
        </Link>
        <Link Class="header__firstnav__item" To="#">
          MEMBERS
          <font-awesome-icon
            class="header__firstnav__arrowicon"
            icon="fa-solid fa-caret-down"
            @click="ShowMembersOptions"
          />
        </Link>
      </div>
      <div class="header__firstnav__userinfodiv">
        <img
          src="../../assets/img/mr-anonymous.png"
          alt="Anonymous profile pic"
          class="header__firstnav__userprofilepic"
        />
        <span class="header__firstnav__username"> Username </span>
        <div class="header__firstnav__searchboxdiv">
          <input
            class="header__firstnav__searchbox"
            type="text"
            placeholder="Search..."
          />
          <button class="header__firstnav__searchbox__glassbtn">
            <font-awesome-icon
              class="header__firstnav__searchbox__glassbtn__icon"
              icon="fa-solid fa-magnifying-glass"
            />
          </button>
        </div>
      </div>
    </nav>
    <div ref="whatsnewoptions" class="header__firstnav__whatsnewdiv">
      <Link
        Class="header__firstnav__whatsnewdiv__item"
        To="#"
        Text="New Profile Posts"
      />
    </div>
    <div class="header__secondnavforum__div" >
      <nav class="header__secondnavforum">
        <Link
          v-for="Link in HeaderSecondNavForumLinksArray"
          :key="Link.id"
          :To="Link.to"
          :Class="Link.class"
          :Text="Link.Text"
        />
      </nav>
    </div>
    <nav ref="membersoptions" class="header__secondnavforum__membersoptions">
      <Link
        v-for="Link in HeaderSecondNavForumMemberOptionsLinksArray"
        :key="Link.id"
        :Class="Link.class"
        :To="Link.to"
        :Text="Link.Text"
      />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Link from "../Link/Link.vue";


const whatsnewoptions: any = ref(null);
const membersoptions: any = ref(null);




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

onMounted(() => {
  whatsnewoptions.value.style.display = "none";
  membersoptions.value.style.display = "none";
});

const HeaderSecondNavForumLinksArray = [
  {
    class: "header__secondnavforum__item",
    to: "#",
    Text: "Trending",
    id: 1,
  },
  {
    class: "header__secondnavforum__item",
    to: "#",
    Text: "Find Threads",
    id: 2,
  },
  {
    class: "header__secondnavforum__item",
    to: "#",
    Text: "Watched",
    id: 3,
  },
  {
    class: "header__secondnavforum__item",
    to: "#",
    Text: "Search",
    id: 4,
  },
  {
    class: "header__secondnavforum__item",
    to: "#",
    Text: "Mark Forums",
    id: 5,
  },
  {
    class: "header__secondnavforum__item",
    to: "#",
    Text: "History",
    id: 6,
  },
];


const HeaderSecondNavForumMemberOptionsLinksArray = [
  {
    class: "header__secondnavforum__membersoptions__item",
    to: "#",
    Text: "Registered members",
    id: 1,
  },
  {
    class: "header__secondnavforum__membersoptions__item",
    to: "#",
    Text: "Current visitors",
    id: 2,
  },
  {
    class: "header__secondnavforum__membersoptions__item",
    to: "#",
    Text: "New profile posts",
    id: 3,
  },
  {
    class: "header__secondnavforum__membersoptions__item",
    to: "#",
    Text: "Search profile posts",
    id: 4,
  },
];

const HeaderFirsNavLinksArray = [
  {
    class: "header__firstnav__item",
    to: "/",
    Text: "FORUMS",
    id: 1,
  },
  {
    class: "header__firstnav__item",
    to: "#",
    Text: "BLOG",
    id: 2,
  },
];
</script>

<style lang="scss" src="./styles.scss" />