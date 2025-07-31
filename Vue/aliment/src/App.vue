<script setup lang="ts">
</script>

<template>
  <div>
    <ElDialog></ElDialog>
    <el-dialog>
      <iframe
        src="//player.bilibili.com/player.html?aid=673762230&bvid=BV1pU4y1G7VX&cid=358701287&page=1"
        scrolling="no"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
        width="500"
        height="300"
      ></iframe>
    </el-dialog>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
