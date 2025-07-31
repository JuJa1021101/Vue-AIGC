<template>
    <div>
        {{ rate }}
    </div>
</template>

<script setup>
import {computed} from 'vue';

let props = defineProps({
    value:Number//没有传值就是默认值
})
let rate = computed(() =>"★★★★★☆☆☆☆☆".slice(5-props.value,10-props.value))
</script>


<style lang="css" scoped>

</style>