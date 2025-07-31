<template>
    <div class="relative h-screen bg-black text-white">
        <!-- 顶部导航栏 -->
        <div class="flex justify-between items-center p-4">
            <van-icon name="arrow-left" class="text-2xl"></van-icon>
            <div class="flex space-x-4">
                <span>直播</span>
                <span>关注</span>
                <span>短剧</span>
                <span class="border-b-2 border-white">推荐</span>
            </div>
            <div class="flex space-x-4">
                <van-icon name="search" class="text-2xl"></van-icon>
                <van-icon name="photograph" class="text-2xl"></van-icon>
            </div>
        </div>
        <!-- 中间内容 -->
        <div class="flex-1 flex justify-center items-center">
        </div>
        <!-- 底部操作栏 -->
        <div class="absolute bottom-0 left-0 right-0 p-4">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                    <div>
                        <div>@琪琪小公举</div>
                        <div>“唯一能见她的方式 你却说是臆想症”...</div>
                    </div>
                </div>
                <van-button type="primary" round size="small">+ 关注</van-button>
            </div>

        </div>
        <!-- 右侧悬浮按钮 -->
        <div class="absolute right-0 top-1/2 space-y-4">
            <div class=" flex-col items-center">
                <div class=" items-center justify-between text-gray-400">

                    <div class=" items-center space-x-2">
                        <van-icon name="good-job" class="text-3xl"></van-icon>
                        
                    </div>
                    <span>3.3万</span>
                    <div class=" items-center space-x-2">
                        <van-icon name="comment" class="text-2xl"></van-icon>
                        
                    </div>
                    <span>735</span>
                    <div class=" items-center space-x-2">
                        <van-icon name="share" class="text-2xl"></van-icon>
                        
                    </div>
                    <span>分享</span>
                </div>
            </div>

        </div>

    </div>
</template>
  
  <script>
  </script>
  
  <style scoped>
  /* 这里可以添加一些额外的样式，如果需要的话 */
  :deep(.van-icon)
{
    font-size: x-large;
}</style>
  