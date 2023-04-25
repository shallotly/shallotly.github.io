<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import text from "./data/text.json";
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
.intro a {
  color: #001440;
}

</style>
