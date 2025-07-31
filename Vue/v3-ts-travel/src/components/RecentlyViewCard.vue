<template>
    <div class="item-wrapper flex space-x-2 w-screen overflow-scroll px-4">
        <div
            class="item flex-[0_0_auto] w-28 space-y-2"
            
            
            v-for="(item,index) in props.items"
            :key="item.title"
        >
            <div class="item-image">
                <img :src="item.cover" 
                class="rounded-lg"
                >
            </div>
            <div class="item-info">
                <div class="item-name text-xs font-bold">{{ item.title }}</div>
                <div class="item-price text-xs font-bold">{{ (item.price) }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { recentlyviewedItem } from '../types/home';
// import { getCurrency } from '../utils/utils'
// 核心数据
interface Props{
    items: recentlyviewedItem[];
}
const props = defineProps<Props>()
</script>

<style lang="scss" scoped>

</style>