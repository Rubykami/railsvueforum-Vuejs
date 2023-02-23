<template>
  <section class="main__forumstatisticssection">
    <h1 class="main__forumstatisticssection__title">
      <span class="main__forumstatisticssection__title__spanicon">
        <font-awesome-icon
          class="main__forumstatisticssection__title__icon"
          icon="fa-solid fa-chart-simple"
        />
      </span>
      <span class="main__forumstatisticssection__title__spantext">
        Forum Statistics
      </span>
    </h1>
    <div class="main__forumstatisticssection__threadsdiv">
      <span class="main__forumstatisticssection__threadsdiv__threadstext">
        Threads:
      </span>
      <span class="main__forumstatisticssection__threadsdiv__threadsvalue">
        56666
      </span>
    </div>
    <div class="main__forumstatisticssection__postsdiv">
      <span class="main__forumstatisticssection__postsdiv__poststext">
        Posts:
      </span>
      <span class="main__forumstatisticssection__postsdiv__postsvalue">
        6666
      </span>
    </div>
    <div class="main__forumstatisticssection__membersdiv">
      <span class="main__forumstatisticssection__membersdiv__memberstext">
        Members:
      </span>
      <span class="main__forumstatisticssection__membersdiv__membersvalue">
        66666
      </span>
    </div>
    <div class="main__forumstatisticssection__latestmemberdiv">
      <span
        class="main__forumstatisticssection__latestmemberdiv__latestmembertext"
      >
        Latest Member:
      </span>
      <span
        class="main__forumstatisticssection__latestmemberdiv__latestmembername"
      >
        teste
      </span>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main__forumstatisticssection {
  border: 1px solid #42464d;
  margin-top: 1rem;
  border-radius: 5px 5px 5px 5px;
  
  &__title {
    background-color: #42464d;
    font-size: 1rem;
    display: flex;
    gap: 0.7rem;
    width: 15rem;
    padding: 0.5rem;
    padding-left: 1rem;
    color: white;
    border-bottom: 1px solid white;
    &__spantext {
        background-color: #42464d;
    }
    &__icon {
      color: #bcc0c7;
      background-color: #42464d;
    }
  }
  &__threadsdiv {
    background-color: #42464d;
    display: flex;
    justify-content: space-between;
    padding: 0.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
    padding-top: 1rem;
    &__threadstext {
        background-color: #42464d;
        color: rgba(white, 0.7);
    }
    &__threadsvalue {
        background-color: #42464d;
    }
  }
  &__membersdiv {
    background-color: #42464d;
    display: flex;
    justify-content: space-between;
    padding: 0.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
    &__memberstext {
        background-color: #42464d;
        color: rgba(white, 0.7);
    }
    &__membersvalue {
        background-color: #42464d;
    }
  }
  &__latestmemberdiv {
    background-color: #42464d;
    display: flex;
    justify-content: space-between;
    padding: 0.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
    padding-bottom: 1rem;
    &__latestmembertext {
        background-color: #42464d;
        color: rgba(white, 0.7);
    }
    &__latestmembername {
        background-color: #42464d;
    }
  }
  &__postsdiv {
    background-color: #42464d;
    display: flex;
    justify-content: space-between;
    padding: 0.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
    &__poststext {
        background-color: #42464d;
        color: rgba(white, 0.7);
    }
    &__postsvalue {
        background-color: #42464d;
    }
  }
}
</style>
