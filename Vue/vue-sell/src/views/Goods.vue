<template>
    <div class="goods">
        <div class="goods-contents">

            <div class="menu-wrap" ref="menuWrap">
                <ul>
                    <li class="menu-item " v-for="(item,index) in state.goods" :key="index" @click="select(index)" :class="{'current':currentIndex === index}">
                        <span class="text" >
                            <Supporticon size="3" :type="item.type" v-if="item.type>=0"></Supporticon>
                            {{ item.name }}
                        </span>
                    </li>
                </ul>
            </div>
            <!-- <div class="foods-wrap">
                <ul>
                    <li class="food-list">
                        <h1 class="title">菜系一
                        <ul>
                            <li class="food-item">
                                <div class="pic">
                                    <img src="" alt="">
                                </div>
                                <div class="content">
                                    <h2 class="name">辣椒炒辣椒</h2>
                                    <div class="desc">微辣</div>
                                    <div class="extra">
                                        <span class="count">月售100份</span>
                                        <span>好评率100%</span>
                                    </div>
                                    <div class="price">
                                        <span class="now">$100</span>
                                        <span class="old">$99</span>
                                    </div>
                                    <div class="cartcontrol-wrap">+</div>
                                </div>
                            </li>
                        </ul>
                        </h1>
                    </li>
                </ul>

            </div> -->
            <div class="foods-wrap" ref="foodWrap">
        <ul>
          <!-- 菜系 -->
          <li ref = "foodList" class="food-list" v-for="(item,index) in state.goods " :key="index" >
            <h1 class="title">{{ item.name }}</h1>
            <ul>
              <!-- 菜品 -->
              <li  class="food-item" v-for="(food,index) in item.foods" :key="index" >
                <div class="pic">
                  <img :src=food.icon alt="">
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <div class="desc">{{ food.desc }}</div>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrap">
                    <CartControl :food="food" @update:food="updateFood" ></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
        </div>
        
    </div>
    <ShopCart :selectedFood="state.selectedFoods" :seller="seller"></ShopCart>
</template>

<script setup>
import { reactive, ref,nextTick, computed,defineProps } from 'vue';
import Supporticon from '../components/support-ico/index.vue';
import { getGoods } from '@/api';
import BScroll from '@better-scroll/core'
import CartControl from '../components/cart-control/index.vue'
import ShopCart from '../components/shop-cart/index.vue'
// let bs = new BScroll('', {

// })//滚动效果
// const initScroll = () =>{
    
// }
// onMounted(()=>{

// })
const foodList = ref(null)
const menuWrap = ref(null)//获取dom结构
const foodWrap = ref(null)
const props = defineProps({
  seller:{}
})
const initScroll = () =>{
     new BScroll(menuWrap.value, {
        click:true,

    })//滚动效果
    state.foodsScroll = new BScroll(foodWrap.value,{
        click:true,
        probeType:3
    })
    state.foodsScroll.on('scroll',pos =>{
        console.log(Math.abs(pos.y));

        state.scrollY = Math.abs(pos.y)

    })
}
// onUpdated(()=>{
//     initScroll()
// })

const currentIndex = computed(() =>{
    for(let i =0;i<state.listHeight.length;i++){
        let h1 = state.listHeight[i]
        let h2 = state.listHeight[i+1]
        if(!h2 || (state.scrollY >=h1 && state.scrollY<h2)){
            return i
        }
        
    }
    return 0
})
const state = reactive({
    goods:[],

    foodsScroll: null,
    listHeight: [],
    scrollY:0,
    selectedFoods:[]
})
const select =(i) =>{
    state.currentIndex = i
    state.foodsScroll.scrollToElement(foodList.value[i],300)
}


 getGoods().then(res =>{
   console.log(res);
    state.goods = res
    nextTick(()=>{
        initScroll()
        _calulateHeight()
    })//nextTick只会在组件编译挂载且渲染完成后才执行

})

const _calulateHeight = () =>{
    // foodList.value[0].clientHeight
    let height = 0
    state.listHeight.push(height)

    foodList.value.forEach(li =>{
        height += li.clientHeight
        state.listHeight.push(height)
    })

    console.log(state.listHeight);
}
const updateFood = () => {
    // console.log(state.goods);
    //将拥有count字段的对象都挑出来
    const arr = []
    for(let good of state.goods){
        for(let food of good.foods){
            if(food.count ){
                arr.push(food)
            }
        }
    }
    state.selectedFoods = arr
    console.log(state.selectedFoods);

}
</script>

<style lang="less" scoped>
@import '../assets/variable.less';
.goods{
    width: 100%;
    position: absolute;
    top: 177px;
    bottom: 46px;
    overflow: hidden;
    .goods-contents{
        display: flex;
        height: 100%;
        .menu-wrap{
            flex: 0 0 80px;
            background-color: @color-background-ssss;
            // overflow-y:scroll ;
            .menu-item{
                padding: 0 14px;
                font-size: @fontsize-small;
                height: 54px;
                display: flex;
                justify-content: center;
                align-items: center;
                &.current{
                    background-color: #fff;
                    font-weight: bold;
                }
            }
        }
        .foods-wrap {
      flex: 1;

      .title {
        height: 26px;
        line-height: 26px;
        font-size: @fontsize-small;
        color: rgb(147, 153, 159);
        background-color: @color-background-ssss;
        padding-left: 14px;
        border-left: 2px solid #d9dde1;
      }

      .food-item {
        display: flex;
        padding: 18px;

        .pic {
          flex: 0 0 57px;
          margin-right: 10px;

          img {
            width: 100%;
          }
        }

        .content {
          flex: 1;
          position: relative;

          .name {
            font-size: @fontsize-medium;
            color: @color-background;
            margin: 2px 0 8px 0;
          }

          .desc,
          .extra {
            font-size: @fontsize-small-s;
            color: rgb(147, 153, 159);
            margin-bottom: 8px;

            .count {
              margin-right: 12px;
            }
          }

          .price {
            font-weight: 700;

            .now {
              font-size: @fontsize-medium;
              color: @color-red;
              margin-right: 8px;
            }

            .old {
              font-size: @fontsize-small-s;
              color: rgb(147, 153, 159);
              text-decoration: line-through;
            }
          }

          .cartcontrol-wrap {
            position: absolute;
            right: 0;
            bottom: 12px;
          }
        }
      }
    }
    }
}
</style>