<!-- <template>
    <Transition name="fade">
<div class="header-detail">
    <div class="detail-wrapper">
        <div class="detail-main">
            <h1 class="name">名字</h1>
            <div class="star-wrapper">⭐⭐⭐⭐⭐</div>
        </div>
        <div class="title">
            <span class="">优惠信息</span>
        </div>
    </div>
    <div class="detail-close" @click.stop="closeDetail">
    <i class="iconfont icon-guanbi" ></i>
    </div>
</div>
</Transition>
</template>

<script setup>
const emits = defineEmits(['hide']);//创建事件
const closeDetail = () =>{
    emits('hide',false);
}
</script>

<style lang="less" scoped>
@import '../../assets/variable.less';
.header-detail{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: @color-background-s;
    color: @color-white;
    z-index: 100;
    backdrop-filter: blur(10px);

    &.fade-enter-form,
    &.fade-leave-to{
        opacity: 0;
        background-color: @color-background;

    }
    &.fade-enter-active,
    &.fade-leave-active{
        transition: all 0.3s ease;
    }

    .detail-close{
        position: absolute;
        bottom: 30px;
        left: 50%;
    }
    .detail-wrapper{
        width: 100%;
        min-height: 100%;
        overflow: auto;
        .detail-main{
            margin-top: 64px;
            padding-bottom: 64px;
            .name{
                text-align: center;
                font-size: @fontsize-large ;
                // font
                font-weight: bold;
            }
            .star-wrapper{
                padding-top: 10px;
                text-align: center;
            }
            .title{
                width: 80%;
                margin: 28px auto 24px auto;
                text-align: center;

                &::before,
                &::after{
                    content: '';
                    height: 1px;
                    background-color: #fff;
                    flex: 1;
                }
                span{
                    font-size: @fontsize-medium;
                    padding: 0 12px;
                    font-weight: bold;
                }
            }   
        }
    }

//虚化filter
//被容器挡住容器虚化backdrop-filter
}

</style> -->
<template>
    <Transition name="fade">
      <div class="header-detail">
        <div class="detail-wrapper">
          <div class="detail-main">
            <h1 class="name">商店名字</h1>
            <div class="star-wrapper">
              ⭐️⭐️⭐️⭐️⭐️
            </div>
  
            <div class="title">
              <span>优惠信息</span>
            </div>
  
  
          </div>
        </div>
  
  
  
        <div class="detail-close" @click.stop="close">
          <i class="iconfont icon-guanbi"></i>
        </div>
      </div>
    </Transition>
    
  </template>
  
  <script setup>
  const emits = defineEmits(['hide'])  // 创建事件
  const close = () => {
    emits('hide', false);  // 发布了一个事件
  }
  
  </script>
  
  <style lang="less" scoped>
  @import '@/assets/variable.less';
  
  .header-detail{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: @color-background-s;
    color: @color-white;
    z-index: 100;
    backdrop-filter: blur(10px);
    &.fade-enter-from,
    &.fade-leave-to{
      opacity: 0;
      background: @color-background;
    }
    &.fade-enter-active,
    &.fade-leave-active {
      transition: all 0.5s ease;
    }
    .detail-wrapper{
      width: 100%;
      min-height: 100%;
      overflow: auto;
      .detail-main{
        margin-top: 64px;
        padding-bottom: 64px;
        .name{
          text-align: center;
          font-size: @fontsize-large;
          font-weight: bold;
        }
        .star-wrapper{
          padding: 2px 0;
          margin-top: 8px;
          text-align: center;
        }
        .title{
          width: 80%;
          margin: 28px auto 24px auto;
          text-align: center;
          display: flex;
          align-items: center;
  
          &::before,
          &::after{
            content: '';
            height: 1px;
            background-color: #fff;
            flex: 1;
            opacity: 0.3;
          }
  
          span{
            font-size: @fontsize-medium;
            padding: 0 12px;
            font-weight: bold;
          }
        }
      }
    }
  
  
  
    .detail-close{
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      .iconfont{
        font-size: @fontsize-large-xxxx;
      }
    }
  }
  </style>