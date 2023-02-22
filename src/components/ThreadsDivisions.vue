<template>
  <div v-show="props.hidden" :class="props.divClass">
    <span
      :class="spanClass"
    >
      {{ props.threadName }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  hidden: {
    type: Boolean,
  },
  divClass: {
    type: String
  },
  spanClass: {
    type: String
  },
  threadName: {
    type: String
  }
});
</script>

<style lang="scss" scoped></style>
