<script setup>
defineProps({
  // data: {
  //   type: Object,
  //   required: true
  // }
})
</script>

<template>
  <div class='resume-container'>
    <iframe src="https://drive.google.com/file/d/1aPKg6KDg7BRcOl0qcIYM9r7pfMjsQK_D/preview" width="640" height="480" allow="autoplay"></iframe>
  </div>
</template>

<style scoped>
  .resume-container {
    position: relative;
    width: 95%;
    aspect-ratio: 1/1.2;
    margin: 20px auto;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
</style>
