<template>
    <div class="home">
        <div class="top-bg absolute h-36 -z-10 w-screen 
        bg-gradient-to-b from-orange-500 to-orange-300
        "></div>

        <van-search v-model="searchField" placeholder="请输入搜索关键字" show-action shape="round" background="transparent"
            class="mb-2">
            <template #action>
                <div class="">
                    <van-icon name="shopping-cart-o" size="1.25rem"></van-icon>
                </div>
            </template>
        </van-search>

        <main class="flex flex-col space-y-4">
            <header class="
            w-[calc(100vw-2rem)]
            min-h-24 bg-white rounded-2xl 
            p-2 shadow-md self-center">

                <section class="topbar flex justify-around mb-3">
                    <div class="topbar-item flex-col item-center" v-for="item in topBarState" :key="item.title">
                        <div class="topbar-item__icon">
                            <van-icon :name="item.icon" size="2rem"></van-icon>
                        </div>
                        <div class="topbar-item__text text-xs">{{ item.title }}</div>
                    </div>
                </section>

                <van-button type="primary" block size="small" color="rgb(246,247,248)">
                    <div class="text-black flex">
                        <van-icon name="apps-o" size="1rem"></van-icon>
                        <span class="text-xs ml-2 font-bold">
                            所有分类
                        </span>
                    </div>
                </van-button>

            </header>

            <section class="navbar flex overflow-x-scroll w-screen space-x-4 px-4">
                <div class="navbar-item flex flex-col border rounded-lg 
                flex-[0_0_auto] w-24" v-for="item in navBarState" :key="item.title">
                    <div class="navbar-item__text text-xs p-2 pb-0">
                        {{ item.title }}
                    </div>
                    <div class="navbar-item__icon self-end p-2">
                        <van-icon :name="item.icon" size="1.5rem" />
                    </div>
                </div>
            </section>
            <section>
                <h2 class="title">最近浏览</h2>
                <RecentlyViewCard :items="recentlyViewdState"></RecentlyViewCard>
            </section>
            <section>
                <h2 class="title">想去哪里玩？</h2>
                <div class="flex w-screen overflow-x-scroll space-x-2 px-4">
                
                </div>
            </section>
            <section>
                <h2 class="title">探索更多</h2>
            </section>
        </main>
    </div>
</template>

<script setup>
// 数据？
// pinia 数据管理 + 组件显式
import { useHomeStore } from '../../store/homeStore';
import { toRefs, ref } from 'vue';
import { useDiscountStore } from '../../store/discountStore.ts';
import RecentlyViewCard from '../../components/RecentlyViewCard.vue';
const discountStore = useDiscountStore();
const homeStore = useHomeStore()
const searchField = ref('')
const { topBarState, navBarState, recentlyViewdState } = toRefs(homeStore)

const { discountInfo } = toRefs(discountStore)
console.log(recentlyViewdState.value);

</script>

<style lang="scss" scoped></style>