<template>
    <div class="container">
        <div class="nav">
            <div class="time">{{ now }}</div>
            <div class="city" @click="state.show = true">切换城市</div>
        </div>
        <div class="city-info">
            <p class="city">{{ state.city }}</p>
            <p class="weather">{{ state.today.weather }}</p>
            <h2 class="temp">
                <em>{{ state.today.temperature }}</em> ℃
            </h2>
            <div class="detail">
                <span>风力：{{ state.today.windPower }}级</span> |
                <span>风向：{{ state.today.windDirection }}风</span> |
                <span>空气湿度：{{ state.today.humidity }}%</span>
            </div>
        </div>
        <div class="future" v-if="state.forecast.length">
            <div class="group">
                明天：
                <span class="tm">白天：{{state.forecast[1].dayTemp}}℃ {{ state.forecast[1].dayWeather }} 
                    {{state.forecast[1].dayWindDir}}风  {{state.forecast[1].dayWindPower}}级</span>
                <span class="tm">夜间：{{state.forecast[1].nightTemp}}℃ {{state.forecast[1].nightWeather}}
                    {{ state.forecast[1].nightWindDir }}风  {{state.forecast[1].nightWindPower}}级</span>
            </div>
            <div class="group">
                后天：
                <span class="tm">白天：{{state.forecast[2].dayTemp}}℃ {{ state.forecast[2].dayWeather }} 
                    {{state.forecast[2].dayWindDir}}风  {{state.forecast[2].dayWindPower}}级</span>
                <span class="tm">夜间：{{state.forecast[2].nightTemp}}℃ {{state.forecast[2].nightWeather}}
                    {{ state.forecast[2].nightWindDir }}风  {{state.forecast[2].nightWindPower}}级</span>
            </div>
        </div>
        <div class="echarts-wrap" ref="echartWrap">

        </div>
        <van-action-sheet v-model:show="state.show" >
            <div class="content">
                <van-area title="地区" :area-list="areaList" :columns-num="2" @confirm="selectCity" @cancel="cancelCity"/>
            </div>
        </van-action-sheet>

        
        
    </div>
</template>

<script setup>
import {   reactive,ref,nextTick } from 'vue';
import { areaList } from '@vant/area-data';
import * as echarts from 'echarts';
let now = ref('上午00:00:00')
setInterval(() =>{
    now.value =new Date().toLocaleTimeString()
},1000);

AMap.plugin('AMap.CitySearch', function () {
  var citySearch = new AMap.CitySearch()
  citySearch.getLocalCity(function (status, result) {
    if (status === 'complete' && result.info === 'OK') {
      // 查询成功，result即为当前所在城市信息
      console.log(result);
      state.city = result.city
      getWeather(state.city)
      
    }
  })
})
const state = reactive({
    city:'',
    today:{},
    forecast:{},
    show:false
})
const getWeather = (city) =>{
    //加载天气查询插件
AMap.plugin("AMap.Weather", function () {
  //创建天气查询实例
  var weather = new AMap.Weather();
  //执行实时天气信息查询
  weather.getLive(city, function (err, data) {
    // console.log(err, data);
    //err 正确时返回 null
    //data 返回实时天气数据，返回数据见下表
    state.today = data;
    });
    weather.getForecast(city, function (err, data) {
        state.forecast = data.forecasts;
        nextTick(() =>{
            initEcharts(data.forecasts.map(item => item.dayTemp) ,data.forecasts.map(item => item.nightTemp));
            // 保证页面的顺序逻辑正常运行
        })
        // console.log(state.forecast)
    })
    

});
}
// const areaList = {
//   province_list: {
//     110000: '北京市',
//     120000: '天津市',
//   },
//   city_list: {
//     110100: '北京市',
//     120100: '天津市',
//   },
//   county_list: {
//     110101: '东城区',
//     110102: '西城区',
//     // ....
//   },
// };
const selectCity= ({ selectedOptions }) =>{
    // console.log(selectedOptions[1].text)
    state.city = selectedOptions[1].text;
    getWeather(state.city)
    state.show = false
}
const cancelCity = () =>{
    state.show = false
}

const echartWrap = ref(null);
const initEcharts = (arr,arr1) =>{
    // console.log(echartWrap.value);
    let myecharts = echarts.init(echartWrap.value)
    myecharts.setOption({
        xAxis: {
        type: 'category',
        data: ['今天', '明天', '后天', '大后天']
        },
        yAxis: {
            type:'value'
        },
        series: [
        {
            name: '白天温度',
            type: 'line',
            data: arr,
        },
        {
            name: '晚上温度',
            type: 'line',
            data: arr1,
        },

  ]
    })
}





</script>

<style lang="css" scoped>
    .container{
        min-height: 100vh;
        /* 最小高度，如果里面内容撑出来不会限制 */
        background-color: black;
        opacity: 0.7;
        color: aliceblue;
        
    }
    .nav{
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
    .city-info{
        text-align: center;
    }
    p{
        margin-top: 10px;
    }
    .temp{
        font-size: 26px;
        margin: 10px 0;
    }
    .temp em{
        font-size: 34px;
    }
    .future{
        margin-top: 30px;
        padding: 0 10px;
    }
    .group{
        min-height: 44px;
        line-height: 44px;
        /* 文在y轴上居中 */
        background-color: rgba(255, 255, 255, 0.3);
        font-size: 11px;
        padding: 0 10px;
        margin-bottom: 10px;
        border-radius: 5px;
    }
    .echarts-wrap{
        width: 100%;
        height: 300px;
    }

</style>