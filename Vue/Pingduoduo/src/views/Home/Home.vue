<template>
    <div class="bg-white min-h-screen">
        <!-- Search Bar -->
        <div class="search-container">
            <van-search v-model="search" placeholder="请输入搜索关键字" shape="round" class="custom-search">
                <template #left-icon>
                    <van-icon name="search" size="1.25rem" />
                </template>
                <template #right-icon>
                    <van-icon name="photograph" size="1.25rem" />
                </template>
            </van-search>
        </div>


        <!-- Navigation Tabs -->
        <van-tabs v-model:active="activeTab" class="border-b ">
            <van-tab :title="item.title" v-for="item in topBarState" :key="item.title" />
        </van-tabs>
        <!-- Pingxiaoquan Tabs -->
        <div class="px-4 py-2 relative flex justify-between items-center border-gray-200 border-b-8">
            <div class="flex items-center">
                <div
                    class="h-8 w-8 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-500 to-red-500">
                    <van-icon name="bell" color="white" />
                </div>
                <div class="ml-2">拼小圈</div>
            </div>
            <div class="flex items-center">
                <div class="mr-2 text-xs text-gray-400">查看好友动态</div>
                <div>
                    <van-icon name="arrow" class="text-gray-400" />
                </div>
            </div>
        </div>

        <!-- Quick Access Buttons -->
        <section class="navbar flex overflow-x-scroll w-screen space-x-4 px-4 border-b-gray-200 border-b-8">
            <div class="navbar-item flex flex-col  rounded-lg 
                flex-[0_0_auto] w-18" v-for="item in navBarState" :key="item.title">
                <div class="navbar-item__icon p-2 mx-auto ">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.icon"></use>
                    </svg>
                </div>

                <div class="navbar-item__text text-xs p-2 pb-0 mx-auto">
                    {{ item.title }}
                    
                </div>


            </div>
        </section>

        <!-- Content -->
        <!-- <div class="p-2 grid grid-cols-2 gap-2 items-center">
            <div class="col-span-1" v-for="item in productState" :key="item.id">
                <van-card  :price="item.price" :desc="item.desc" :thumb="item.thumb">
                    <template #tags>
                        <van-tag plain type="danger">{{ item.type }}</van-tag>
                    </template>
                </van-card>
            </div>
        </div> -->
        <div class="p-2 grid grid-cols-2 gap-2 items-center">
    <div class="col-span-1" v-for="item in productState" :key="item.id">
        <van-card :desc="item.desc" :thumb="item.thumb">
            <template #footer>
                <div class="grid grid-cols-2 gap-2">
                    <div>
                        <van-tag plain type="danger" class="text-lg font-bold">{{ item.type }}</van-tag>
                    </div>
                    <div>
                        <div class="flex items-center">
                            <span class="font-bold text-base truncate">{{ item.desc }}</span>
                        </div>
                        
                    </div>
                    <div class="text-sm text-left">
                            {{ item.price }}

                    </div>
                    <div class="text-xs">已卖了{{item.count}}件</div>
                </div>
            </template>
        </van-card>
    </div>
</div>

        <!-- Footer Navigation -->
    </div>
</template>
  
  <script setup >
  import { ref,toRefs } from 'vue';
  import { useHomeStore } from '../../store/homeStore'

  const homeStore = useHomeStore()
  const { topBarState,navBarState,productState } = toRefs(homeStore)
  const search = ref('');
  const activeTab = ref(0);
  console.log(activeTab);
  
  const activeTabbar = ref(0);

  const takePhoto = () => {
    // Implement photo-taking logic here
  };
  </script>
<style scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
:deep(.van-card__thumb)
  {
    --van-card-thumb-size: 150px;
  }
  :deep(.van-card__footer)
  {
    text-align: left;
  }
  .truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

</style>