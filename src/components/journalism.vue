<script setup>
import {ref} from "vue";
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const imgPath = ref(props.data[0].image)

console.log(imgPath.value)
</script>

<template>
  <div class="journalism-section">
    <div class="title-list">
      <div v-for="(title,i) in data" :key="i" :class="['title','title-'+i]">
        <div class="icon">
        <img v-if="title.org == 'ngm'" :src="`/org-icon/${title.org}.svg`">
        <img v-else :src="`/org-icon/${title.org}.png`">
      </div>
        <p>{{ title.name }}</p>
      </div>
    </div>
    <div class="detail">
      <div :style="{ backgroundImage: 'url('+imgPath+')', height: 500 +'px'}" class="poster"></div>
      <h1>{{ data[0].name }}</h1>
      <p class="description">{{ data[0].description }}</p>
      <p class="tools"><span>TOOLS: </span>{{ data[0].tools }}</p>
    </div>
  </div>
</template>

<style scoped>
.journalism-section {
  display: flex;
  justify-content: space-between;
}
.title-list {
  display: inline-block;
  width: 45%;
}
.detail{
  display:inline-block;
}
.title p {
  display: inline-block;
  width: 90%;
}
.icon {
  display: inline-block;
}
.icon img{
  width: 20px;
}

.poster{
  background-size: cover;
}
</style>
