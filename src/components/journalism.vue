<script setup>
import { ref } from "vue";
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
</script>

<template>
  <div class="journalism-section">
    <div class="title-list">
      <div
        v-for="(title, i) in data"
        :key="i"
        :class="[{ selected: i == currentIndex }, 'title', 'title-' + i]"
        @click="currentIndex = i"
      >
        <div class="icon">
          <img v-if="title.org == 'ngm'" :src="`/org-icon/${title.org}.svg`" />
          <img v-else :src="`/org-icon/${title.org}.png`" />
        </div>
        <p>{{ title.name }}</p>
      </div>
    </div>
    <div class="detail">
      <a :href="data[currentIndex].url">
        <video v-if="data[currentIndex].image.includes('mov')" :src="`/poster/${data[currentIndex].image}`" class="poster" autoplay loop muted></video>
        <img v-else :src="`/poster/${data[currentIndex].image}`" class="poster">
      <!-- <embed :src="`/poster/${data[currentIndex].image}`" class="poster"> -->
         <!-- <noembed><img src = "yourimage.gif" alt = "Alternative Media" ></noembed> -->
    </a>
      <a :href="data[currentIndex].url"
        ><h1>
          {{ data[currentIndex].name
          }}<img class="link-icon" src="/link.svg" /></h1
      ></a>
      <p class="description">{{ data[currentIndex].description }}</p>
      <p class="tools">
        <span>TOOLS</span><br />{{ data[currentIndex].tools }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.journalism-section {
  display: flex;
  margin: 40px 10px;
  justify-content: space-between;
}
.title-list {
  display: inline-block;
  width: 45%;
  margin-right: 20px;
}
.detail {
  display: inline-block;
  width: 55%;
  margin: 0 10px;
  position: sticky;
  align-self: flex-start;
  top: 10px;
  border: grey 1px solid;
}
.title {
  border-bottom: 1px solid #b5b5b5;
  margin-bottom: 0.5em;
}
.title p {
  display: inline-block;
  width: 88%;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-bottom: 0.5em;
  padding: 2px 0;

  font-family: "Roboto Slab";
  font-weight: 300;
  font-size: 17px;
  vertical-align: middle;
  line-height: 1.25em;

  cursor: pointer;
}
.title.selected p {
  font-weight: 700;
}
.icon {
  display: inline-block;
  vertical-align: top;
  margin: 3px 7px;
}
.icon img {
  width: 20px;
}

.poster {
  width: 100%;
}

.detail h1 {
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 0;
  margin-block-start: 1em;
}
.link-icon {
  margin-left: 7px;
  height: 1em;
}

.description {
  font-family: "Roboto";
  font-weight: 300;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 2em;
}
.tools {
  font-family: "Roboto";
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
}
.tools span {
  font-family: "Roboto Slab";
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
</style>
