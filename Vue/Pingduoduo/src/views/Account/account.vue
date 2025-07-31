<template>
    <div class="flex items-center p-4 bg-white">
    <!-- 用户信息部分 -->
        <div class="flex items-center flex-1">
            <div class="w-12 h-12 rounded-full mr-4 bg-slate-600"></div>
        <div>
        <div class="flex items-center">
          <span class="font-bold text-lg">Stars</span>
          <van-icon name="phone-o" class="ml-2"></van-icon>
        </div>
        <div class="text-gray-500">
          <van-icon name="location-o" class="mr-1"></van-icon>
          <span>收货地址</span>
        </div>
      </div>
    </div>
    <!-- 右侧按钮部分 -->
    <div class="flex space-x-2">
      <van-button type="default" size="small" @click="quit" to="/login">退出登录</van-button>
      <van-button type="default" size="small" icon="setting-o">设置</van-button>
    </div>
  </div>
  <div class="p-4 bg-red-100 text-red-600">
    省钱月卡 开通领124元优惠券
    <van-icon name="arrow" class="ml-2"></van-icon>
  </div>
    <div class="p-4">
        
      <!-- 我的订单 -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <span class="text-lg font-bold">我的订单</span>
          <a href="#" class="text-gray-500 text-sm">查看全部</a>
        </div>
        <van-grid :column-num="5" class="text-center">
          <van-grid-item icon="card" text="待付款" />
          <van-grid-item icon="share" text="待分享" />
          <van-grid-item icon="logistics" text="待发货" />
          <van-grid-item icon="home-o" text="待收货" />
          <van-grid-item icon="comment" text="评价" />
        </van-grid>
      </div>
  
      <!-- 多多钱包 -->
      <div class="mb-4">
        <div class="flex justify-between items-center mb-2">
          <span class="text-lg font-bold">多多钱包</span>
          <a href="#" class="text-gray-500 text-sm">查看余额</a>
        </div>
        <van-grid :column-num="5" class="text-center">
          <van-grid-item icon="gift-o" text="优惠券" />
          <van-grid-item icon="bag-o" text="商品收藏" />
          <van-grid-item icon="add-o" text="店铺关注" />
          <van-grid-item icon="browsing-history" text="历史浏览" />
          <van-grid-item icon="after-sale" text="退款售后" />
        </van-grid>
      </div>
  
      <!-- 其他功能 -->
      <van-grid :column-num="5" class="text-center">
        <van-grid-item icon="gold-coin-o" text="天天领现金" />
        <van-grid-item icon="friends-o" text="多多牧场" />
        <van-grid-item icon="location-o" text="收货地址" />
        <van-grid-item icon="service-o" text="官方客服" />
        <van-grid-item icon="setting-o" text="设置" />
      </van-grid>
    </div>
  </template>
  
  <script setup>
  const quit = () =>{
    localStorage.clear('userInfo')
  }
  </script>
  
  <style scoped>
  /* 可根据需要添加额外样式 */
  </style>