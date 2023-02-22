<template>
  <section class="main__forumdivisionsection">
    <h1 class="main__forumdivision__title">
      <span class="main__forumdivision__title__text">
        {{ props.Title }}
      </span>
    </h1>
      <div
        class="main__forumdivision__firstcontentdiv"
        v-show="props.showfirstdivision"
      >
        <span
          ref="singlelinkdiv"
          class="main__forumdivision__firstcontentdiv__content__singlelink"
        >
          <slot name="firstthread" />
        </span>
        <span
          ref="firstmultilinkdiv"
          class="main__forumdivision__firstcontentdiv__content__firstmultilink"
        >
          <slot name="firstmultilink" />
        </span>
      </div>
    <div
      v-show="props.showseconddivision"
      class="main__forumdivision__secondcontentdiv"
    >
      <span
        ref="firstlinesecondmultilinkdiv"
        class="main__forumdivision__secondcontentdiv__content__firstlinesecondmultilink"
      >
        <slot name="firstlinesecondmultilink" />
      </span>
      <span
        ref="secondlinesecondmultilinkdiv"
        class="main__forumdivision__secondcontentdiv__content__secondlinesecondmultilink"
      >
        <slot name="secondlinesecondmultilink" />
      </span>
    </div>
      <div v-show="props.showthirddivision" class="main__forumdivision__thirdcontentdiv">
        <div class="main__forumdivision__thirdcontentdiv__content__firstdiv">
          <RouterLink to="#" class="main__forumdivision__thirdcontentdiv__content__firstdiv__firstlinethirdmultilink"> 
            <slot name="firstlinethirdmultilink"/>
          </RouterLink>
        </div>
        <div class="main__forumdivision__thirdcontentdiv__content__seconddiv">
          <RouterLink to="#" class="main__forumdivision__thirdcontentdiv__content__seconddiv__secondlinethirdmultilink"> 
            <slot name="secondlinethirdmultilink"/>
          </RouterLink>
        </div>
        <div class="main__forumdivision__thirdcontentdiv__content__thirddiv">
          <RouterLink to="#" class="main__forumdivision__thirdcontentdiv__content__thirddiv__thirdlinethirdmultilink"> 
            <slot name="thirdlinethirdmultilink"/>
          </RouterLink>
        </div>
        <div class="main__forumdivision__thirdcontentdiv__content__fourthdiv">
          <RouterLink to="#" class="main__forumdivision__thirdcontentdiv__content__fourthdiv__fourthlinethirdmultilink"> 
            <slot name="fourthlinethirdmultilink"/>
          </RouterLink>
        </div>
        <div class="main__forumdivision__thirdcontentdiv__content__fifthdiv">
          <RouterLink to="#" class="main__forumdivision__thirdcontentdiv__content__fifthdiv__fifthlinethirdmultilink"> 
            <slot name="fifthlinethirdmultilink"/>
          </RouterLink>
        </div>
        <div class="main__forumdivision__thirdcontentdiv__content__sixthdiv">
          <RouterLink to="#" class="main__forumdivision__thirdcontentdiv__content__sixthdiv__sixthlinethirdmultilink"> 
            <slot name="sixthlinethirdmultilink"/>
          </RouterLink>
        </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ThreadsDivisions from "./ThreadsDivisions.vue";

const props = defineProps({
  Title: {
    type: String,
  },
  showfirstdivision: {
    type: Boolean
  },
  showseconddivision: {
    type: Boolean,
  },
  showthirddivision: {
    type: Boolean,
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
      .main__forumdivision__firstcontentdiv__content__singlelink {
        background-color: #484d56;
      }
      .main__forumdivision__secondcontentdiv__content__firstlinesecondmultilink {
        background-color: #484d56;
      }
      .main__forumdivision__firstcontentdiv__content__firstmultilink {
                background-color: #484d56;
      }
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
  &__forumdivision__thirdcontentdiv {
    color: white;
    background-color: #383c42;
    font-family: "Roboto";
    &__content__firstdiv {
      padding: 1.5rem;
      background-color: #383c42;
      padding-left: 4rem;
      border-bottom: 1px solid transparent;
      color: white;        
      &:hover {
        background-color: #484d56;
        .main__forumdivision__thirdcontentdiv__content__firstdiv__firstlinethirdmultilink {
          background-color: #484d56;
        }
        cursor: pointer;
        color: white;
      }
      &__firstlinethirdmultilink {
        background-color: #383c42;
        text-decoration: none;
        color: white;
        &:hover {
        background-color: #484d56;
        border-bottom: 1px solid white;
        cursor: pointer;
        color: white;
        }
      }
    }
    &__content__seconddiv {
      padding: 1.5rem;
      padding-left: 4rem;
      background-color: #42464d;
      border-top: 1px solid rgba(255,255,255,0.12);
      border-bottom: 1px solid rgba(255,255,255,0.12);
      color: white;        
      &:hover {
        .main__forumdivision__thirdcontentdiv__content__seconddiv__secondlinethirdmultilink {
          background-color: #484d56;
        }
        background-color: #484d56;
        cursor: pointer;
        color: white;
      }
      &__secondlinethirdmultilink {
        background-color: #42464d;
      border-bottom: 1px solid transparent;
      color: white; 
      text-decoration: none;       
      &:hover {
        background-color: #484d56;
        cursor: pointer;
        color: white;
        border-bottom: 1px solid white;
      }
    }
    }
    &__content__thirddiv {
      padding: 1.5rem;
      background-color: #383c42;
      padding-left: 4rem;
      border-bottom: 1px solid transparent;
      color: white;     
      &:hover {
        .main__forumdivision__thirdcontentdiv__content__thirddiv__thirdlinethirdmultilink {
          background-color: #484d56;
        }
        background-color: #484d56;
        cursor: pointer;
        color: white;
      }
      &__thirdlinethirdmultilink {
        background-color: #383c42;
      border-bottom: 1px solid transparent;
      color: white; 
      text-decoration: none;    
        &:hover {
        background-color: #484d56;
        cursor: pointer;
        color: white;
        border-bottom: 1px solid white;
      }
      }
    }
    &__content__fourthdiv {
      padding: 1.5rem;
      background-color: #42464d;
      border-top: 1px solid rgba(255,255,255,0.12);
      border-bottom: 1px solid rgba(255,255,255,0.12);
      padding-left: 4rem;
      color: white;        
      &:hover {
        .main__forumdivision__thirdcontentdiv__content__fourthdiv__fourthlinethirdmultilink {
          background-color: #484d56;
        }
        background-color: #484d56;
        cursor: pointer;
        color: white;
      }
      &__fourthlinethirdmultilink {
        background-color: #42464d;
      border-bottom: 1px solid transparent;
      color: white; 
      text-decoration: none;    
        &:hover {
        background-color: #484d56;
        cursor: pointer;
        color: white;
        border-bottom: 1px solid white;
      }
      }
    }
    &__content__fifthdiv {
        padding: 1.5rem;
      background-color: #383c42;
      padding-left: 4rem;
      border-bottom: 1px solid transparent;
      color: white;        
      &:hover {
        .main__forumdivision__thirdcontentdiv__content__fifthdiv__fifthlinethirdmultilink {
          background-color: #484d56;
        }
        background-color: #484d56;
        cursor: pointer;
        color: white;
      }
      &__fifthlinethirdmultilink {
        background-color: #383c42;
      border-bottom: 1px solid transparent;
      color: white; 
      text-decoration: none;    
        &:hover {
        background-color: #484d56;
        cursor: pointer;
        color: white;
        border-bottom: 1px solid white;
      }
      }
      }
      &__content__sixthdiv {
        padding: 1.5rem;
        background-color: #42464d;
      border-top: 1px solid rgba(255,255,255,0.12);
      border-bottom: 1px solid rgba(255,255,255,0.12);
      padding-left: 4rem;
      border-bottom: 1px solid transparent;
      color: white;        
      &:hover {
        .main__forumdivision__thirdcontentdiv__content__sixthdiv__sixthlinethirdmultilink {
          background-color: #484d56;
        }
        background-color: #484d56;
        cursor: pointer;
        color: white;
      }
      &__sixthlinethirdmultilink {
        background-color: #42464d;
      border-bottom: 1px solid transparent;
      color: white; 
      text-decoration: none;    
        &:hover {
        background-color: #484d56;
        cursor: pointer;
        color: white;
        border-bottom: 1px solid white;
      }
      }
      }
  }
  &__forumdivision__secondcontentdiv {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: white;
    background-color: #42464d;
      border-top: 1px solid rgba(255,255,255,0.12);
      border-bottom: 1px solid rgba(255,255,255,0.12);
    padding: 1.5rem;
    padding-left: 4rem;
    font-family: "Roboto";
    border-radius: 0px 0px 5px 5px;
    &:hover {
      background-color: #484d56;
      cursor: pointer;
      .main__forumdivision__secondcontentdiv__content__secondlinesecondmultilink {
        background-color: #484d56;
      }
      .main__forumdivision__secondcontentdiv__content__firstlinesecondmultilink {
        background-color: #484d56;
      }
    }
    &__content__firstlinesecondmultilink {
      background-color: #42464d;
      border-bottom: 1px solid transparent;
      width: 9.5rem;
      color: white;
      &:hover {
        background-color: #484d56;
        border-bottom: 1px solid white;
      }
    }
    &__content__secondlinesecondmultilink {
      background-color: #42464d;
      width: 35rem;
      font-size: 0.8rem;
      color: rgba(white, 0.6);
      &:hover {
        background-color: #484d56;
      }
    }
  }
}
</style>
