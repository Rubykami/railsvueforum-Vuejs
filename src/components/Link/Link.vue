<template>
    <RouterLink :class="Class" :to="To">
      <slot>
        {{ Text }}
      </slot>
    </RouterLink>
</template>

<script lang="ts">
export default {
  props: {
    Class: String,
    Text: String,
    To: String
}};
</script>

