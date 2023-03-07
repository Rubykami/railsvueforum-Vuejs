<template>
  <main class="main">
    <div>
      <ForumThreads
        :showfirstdivision="true"
        :showseconddivision="false"
        :showthirddivision="false"
        Title="Announcements"
      >
        <template v-slot:firstthread> Forum News </template>
      </ForumThreads>

      <ForumThreads
        Title="Categories"
        :showfirstdivision="false"
        :showthirddivision="true"
        :showseconddivision="false"
      >
        <template v-slot:firstlinethirdmultilink>
          Anime Recomendations
        </template>
        <template v-slot:secondlinethirdmultilink>
          New anime releases
        </template>
        <template v-slot:thirdlinethirdmultilink> Anime discussion </template>
        <template v-slot:fourthlinethirdmultilink> Japanese Lessons </template>
        <template v-slot:fifthlinethirdmultilink>
          Questions about anime
        </template>
        <template v-slot:sixthlinethirdmultilink> About AnimeZone Forum </template>
      </ForumThreads>

      <ForumThreads
        :showfirstdivision="true"
        :showseconddivision="true"
        :showthirddivision="false"
        Title="Discussion"
      >
        <template v-slot:firstmultilink> Off-Topic </template>
        <template v-slot:firstlinesecondmultilink>
          Site Problems / Ideas
        </template>
        <template v-slot:secondlinesecondmultilink>
          Report any problems with the site here along with any ideas you have
          about making the forum better
        </template>
      </ForumThreads>
    </div>

    <aside>
      <LatestPosts />
      <ForumStatistics />
    </aside>
  </main>
</template>

<script setup lang="ts">
import ForumThreads from "@/components/ForumThreads/ForumThreads.vue";
import ForumStatistics from "@/components/ForumStatistics/ForumStatistics.vue";
import LatestPosts from "@/components/Latestposts/Latestposts.vue";
</script>

<style src="./styles.scss" lang="scss" />
