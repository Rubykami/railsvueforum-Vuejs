<template>
  <main class="main">
    <ForumDivisions :Hidden="false" Title="Announcements">
      <template v-slot:singlelink> Forums News </template>
    </ForumDivisions>
    <ForumDivisions :Hidden="true" Title="Discussion">
      <template v-slot:firstmultilink> Off-Topic </template>
      <template v-slot:secondmultilink> Site Problems / Ideas </template>
    </ForumDivisions>
  </main>
</template>

<script lang="ts">
import ForumDivisions from "@/components/ForumDivisions.vue";

export default {
  setup() {

  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 50rem;
}
</style>
