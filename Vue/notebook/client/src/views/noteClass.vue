<template>
    <div class="note-class-wrapper">
      <div class="note-class" :class="{hide:showMenu}">
        <header>
          <div><van-icon name="wap-nav" @click=toggleShow /></div>
          <div>
            <van-icon name="edit" @click="rouetr.push('/notePublish')"/>
          <van-icon name="like-o" />
          <van-icon name="search" />
          </div>
        </header>
        <!-- <section>
          <div class="note-item" v-for="(item, index) in noteClassList" :key="index" :style="{ backgroundColor: item.bgColor }">
            <span class="title">{{ item.title }}</span>
          </div>
        </section> -->
        <section>
          <div class="note-item" v-for="(item,index) in noteClassList" :key="index" :style="{backgroundColor:item.bgColor}" @click="goNoteList(item.title)">
            <span class="title">{{ item.title }}</span>
          </div>
        </section>
      </div>

      <!-- menu -->
      <Menu class="menu" :class="{ show: showMenu }" @hiddenMenu="handle"></Menu>
    </div>
</template>

<script setup>
import Menu from '@/components/menu.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const rouetr = useRouter()
const showMenu = ref(false)
const goNoteList = (title) =>{
  rouetr.push({path:'/noteList',query:{title}})
}
const toggleShow = () =>{
  showMenu.value = true
}
const handle = (val) =>{
  showMenu.value = val
}
const noteClassList = [
  { bgColor: '#f0aa84', title: '美食' },
  { bgColor: '#dcf189', title: '旅行' },
  { bgColor: '#e0c2f1', title: '恋爱' },
  { bgColor: '#c2ebf1', title: '学习' },
  { bgColor: '#949c9d', title: '吵架' }
]
</script>

<style lang="less" scoped>
.note-class-wrapper{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .note-class{
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 0.5866rem;
    box-sizing: border-box;
    overflow-y: scroll;
    transform: translateX(0%);
    transition: transform 0.3s;
    &.hide{
      transform: translateX(100%);
    }

    header{
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      align-items: center;
      margin: 10px 0;
      .van-icon{
        font-size: 24px;
        margin: 0 5px;
      }
    }
    section{
      width: 100%;
      .note-item{
        height: 3.2rem;
        border-radius: 0.3rem;
        margin-bottom: 0.64rem;
        box-shadow: 0 0 10px 2px #ccc;
        overflow: hidden;

        .title{
          display: block;
          margin-top: 0.5333rem;
          text-align: center;
          font-size: 0.5333rem;
          color: #fff;
        }
      }
    }
  }
  .menu{
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateX(-100%);
    transition: all 0.3s;
    &.show{
      transform: translateX(0%);
    }
  }
}
</style>