<template>
  <main class="main">
    <ForumDivisions Title="Announcements">
      <template v-slot:singletext>
        Forums News
      </template>
      </ForumDivisions>
  </main>
</template>

<script lang="ts">
import ForumDivisions from "@/components/ForumDivisions.vue";

export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.main {
  height: 50rem;
}
</style>
