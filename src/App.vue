<script setup>
import { RouterLink, RouterView } from "vue-router";
import Journalism from "./components/journalism.vue";
import Research from "./components/research.vue";
import Resume from "./components/resume.vue";
import {ref} from "vue";
import text from "./data/text.json";

const tabs = {
  Journalism,
  Research,
  Resume
}

const currentTab = ref("Journalism")

function tabClick(event){
  //remove selected from all
  const tabs = document.querySelectorAll(".tab")
  tabs.forEach(node => node.classList.remove("selected"))
  //add selected to the target el
  event.target.classList.add("selected")

  //load different component based on the target
}
</script>

<template>
  <header>
    <div class="handle">
      <div class="name">Charlotte Li</div>
      <div class="socials">
        <a v-for="social in text.header.socials" :href="social.link"><img :src="social.icon"></a>
      </div>
    </div>
    <div class="intro">
      <p v-for="i in text.header.intro.text" v-html="i.value"></p>
    </div>
  </header>
  <body>
    <div class="tabs">
      <div v-for="(_,tab) in tabs" :key="tab" :class="['tab', { selected: currentTab === tab }]" @click="currentTab = tab">{{ tab }}</div>
    </div>
    <component :is="tabs[currentTab]"></component>
  </body>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  <RouterView /> -->
</template>

<style scoped>
header {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
}

.handle {
  display: inline-block;
  width: 30%;
  margin-right: 50px;
}
.name {
  text-align: end;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 42px;
  line-height: 55px;
  margin-bottom: 20px;
}
.socials{
  float: right;
}
.socials a {
  margin: 5px 5px;
}
.socials a:hover {
  border-bottom: #008cdd solid;
}
.intro {
  display: inline-block;
  width: 75%;
}
.intro p {
  margin:0;
  padding: 5px 0 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
}

.tabs{
  margin-top: 50px;
  padding-left: 6px;
  height: 35px;
  border-bottom: #001440 1px solid;
}
.tab{
  height:35px;
  margin: 0px 6px;
  padding: 0px 20px;
  display: inline-block;
  background: #001440;
  
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #001440;
  border-bottom: #FCF6E8;
  border-radius: 10px 10px 0px 0px;

  line-height: 35px;
  color: #FCF6E8;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0em;

  cursor:pointer;
}

.tab.selected{
  color:#001440;
  background-color: #FCF6E8;
}

</style>
