<template>
  <section class="main__forumdivisionsection">
    <h1 class="main__forumdivision__title">
      <span class="main__forumdivision__title__text">
        {{ props.Title }}
      </span>
    </h1>
    <div
      @mouseover="ChangeSingleFirstMultiLinkBackground"
      @mouseout="UndoSingleFirstMultiLinkBackground"
      class="main__forumdivision__firstcontentdiv"
    >
      <span
        ref="singlelinkdiv"
        class="main__forumdivision__firstcontentdiv__content__singlelink"
      >
        <slot name="singlelink" />
      </span>
      <span
        ref="firstmultilinkdiv"
        class="main__forumdivision__firstcontentdiv__content__firstmultilink"
      >
        <slot name="firstmultilink" />
      </span>
    </div>
    <div
      v-show="props.Hidden"
      @mouseover="ChangeSecondtMultiLinkBackground"
      @mouseout="UndoSecondMultiLinkBackground"
      class="main__forumdivision__secondcontentdiv"
    >
      <span
        ref="secondmultilinkdiv"
        class="main__forumdivision__secondcontentdiv__content__secondmultilink"
      >
        <slot name="secondmultilink" />
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";


const firstmultilinkdiv = ref(null);
const secondmultilinkdiv = ref(null);
const singlelinkdiv = ref(null);

function ChangeSingleFirstMultiLinkBackground() {
  firstmultilinkdiv.value.style.backgroundColor = "#484d56";
  singlelinkdiv.value.style.backgroundColor = "#484d56";
}
function ChangeSecondtMultiLinkBackground() {
  secondmultilinkdiv.value.style.backgroundColor = "#484d56";
}

function UndoSingleFirstMultiLinkBackground() {
  firstmultilinkdiv.value.style.backgroundColor = "#383c42";
  singlelinkdiv.value.style.backgroundColor = "#383c42";
}
function UndoSecondMultiLinkBackground() {
  secondmultilinkdiv.value.style.backgroundColor = "#383c42";
}

const props = defineProps({
  Title: {
    type: String,
  },
  Hidden: {
    type: Boolean
  }
});
</script>

<style lang="scss" scoped>
.main {
  &__forumdivisionsection {
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
  &__forumdivision__firstcontentdiv {
    color: white;
    background-color: #383c42;
    padding: 1.5rem;
    padding-left: 4rem;
    font-family: "Roboto";
    &:hover {
      background-color: #484d56;
      cursor: pointer;
    }
    &__content__firstmultilink {
      background-color: #383c42;
      color: white;
      &:hover {
        background-color: #484d56;
        border-bottom: 1px solid white;
      }
    }
    &__content__secondmultilink {
      background-color: #383c42;
      color: white;
      font-family: "Roboto";
      width: 10rem;
      &:hover {
        background-color: #484d56;
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
    &__content__singlelink {
      background-color: #383c42;
      &:hover {
        border-bottom: 1px solid white;
        background-color: #484d56;
      }
    }
  }
  &__forumdivision__secondcontentdiv {
    color: white;
    background-color: #383c42;
    padding: 1.5rem;
    padding-left: 4rem;
    font-family: "Roboto";
    border-radius: 0px 0px 5px 5px;
    &:hover {
      background-color: #484d56;
      cursor: pointer;
    }
    &__content__secondmultilink {
      background-color: #383c42;
      color: white;
      &:hover {
        background-color: #484d56;
        border-bottom: 1px solid white;
      }
    }
  }
}
</style>
