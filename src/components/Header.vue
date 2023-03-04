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
          src="../assets/img/mr-anonymous.png"
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
import Link from "./Link.vue";


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

<style lang="scss">
.header {
  margin-top: 0.5rem;
  &__firstnav {
    font-family: Quicksand;
    display: flex;
    padding-left: 3rem;
    padding-top: 1rem;
    justify-content: space-between;
    &__searchboxdiv {
      display: flex;
    }
    &__searchbox {
      margin-bottom: 0.5rem;
      border-radius: 5px 0px 0px 5px;
      outline: none;
      padding-left: 0.5rem;
      border: none;
      border: 1px solid #42464d;
      background-color: #42464d;
      &__glassbtn {
        color: white;
        border: none;
        margin-right: 2rem;
        background-color: #42464d;
        height: 2.2rem;
        font-size: 1.1rem;
        padding-right: 1rem;
        border-radius: 0px 5px 5px 0px;
        &__icon {
          background-color: #42464d;
        }
        &:hover {
          cursor: pointer;
        }
      }
      &::placeholder {
        color: rgba(white, 0.7);
        transition: ease-in color 0.2s;
      }
      &:focus {
        &::placeholder {
          color: white;
        }
      }
    }
    &__username {
      color: rgba(white, 0.7);
      margin-top: 0.5rem;
    }
    &__userinfodiv {
      display: flex;
      gap: 1rem;
    }
    &__userprofilepic {
      width: 2rem;
      height: 2rem;
      margin-bottom: 0.7rem;
    }
    &__item {
      background-color: #2d3238;
      padding: 1rem;
      text-decoration: none;
      color: rgba(white, 0.7);
      &:nth-child(1) {
        background-color: #42464d;
        border-radius: 5px 5px 0px 0px;
        padding-bottom: 2rem;
      }
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
  &__secondnavforum {
    font-family: Raleway;
    padding-top: 1rem;
    padding-left: 3rem;
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
      margin-top: -3.2rem;
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
    &__anime {
      background-color: #2d3238;
      color: #ff1e00;
    }
    &__world {
      color: #03c988;
      background-color: #2d3238;
    }
  }
}
</style>
