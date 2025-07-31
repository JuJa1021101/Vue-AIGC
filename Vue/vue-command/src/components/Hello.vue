<template>
    <div>
        {{ msg }}
    </div>
    <div v-text="msg2"></div>
    <div v-text="msg3"></div>
    <div>{{ msg3 }}</div>
    <div v-html="msg3"></div>
</template>

<script setup>
const msg = 'Hello world'
const msg2 = 'Hello Vue'
const msg3 = '<p>你好</p><p>帅</p>'//富文本
</script>

<style lang="css" scoped>

</style>