<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <!-- <div>This page is still under construction :).</div> -->
  <div>
    <h1>Publications</h1>
    <div
      v-for="(title, i) in data"
      :key="i"
      :class="['title', 'title-' + i]"
    >
    <h3>{{ title.title}}
      <span class="pdf">[<a :href="title.pdf">pdf</a>]</span>
    </h3>
    <p>
      <template v-for="(author,i) in title.authors" :key="i">
        <span v-if="author.includes('Charlotte Li')" ><b>{{ author }}</b>, </span>
        <span v-else-if="i == title.authors.length-1" >and {{ author }}</span>
        <span v-else >{{ author }}, </span>
      </template>
    </p>
    <p>{{ title.conference }}.</p>
    </div>
  </div>
  
</template>

<style scoped>
h1 {
  margin:25px 0px 10px;
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 20px;
}
p {
  margin: 1px 0px;
  font-family: "Roboto Slab";
  font-weight: 300;
  line-height: 1.25rem;
}

h3 {
  margin-bottom: 1px;
  font-family: "Roboto Slab";
  font-weight: 700;
  font-size: 15.5px;
  line-height: 1.25rem;
}

.pdf {
  font-weight: 300;
}
</style>
