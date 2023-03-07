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

<style src="./styles.scss" lang="scss" scoped />