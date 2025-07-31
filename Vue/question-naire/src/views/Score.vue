<template>
    <div class="score">
        <header class="your_score">
            <span class="score_num">{{score}}分</span>
            <div class="result_tip">提示语</div>
        </header>
        <!-- <img :src="pic" alt=""> -->
    </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useQuestionStore } from '@/store/question';
// import { storeToRefs } from 'pinia';
// import { onMounted, ref } from 'vue';


const _state = reactive({
    scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，旅梦欢迎你！",
      ],
    score : 0,


})
const {state} = useQuestionStore()
// const score = computed(() =>{
//     let sum = 0
//     if(state.answerList.length === 0)return 0
//     state.answerList.forEach((item,index) =>{
//         if(state.questionList.topic_answer[item].is_standard_answer === '1'){
//             sum += 20
//         }
       
        
//     })
//     return sum
// })
const score = computed(() => {
    if (state.answerList.length === 0 || !state.questionList.topic_answer) return 0;

    // 使用 reduce 函数并提供一个初始值为0的累加器，这样可以在找到第一个非标准答案后立即停止
    return state.answerList.reduce((totalScore, item) => {
        const answer = state.questionList.topic_answer[item];
        // 增加对 answer 的验证，确保它是定义好的
        if (answer && answer.is_standard_answer === '1') {
            totalScore += 20;
        }
        return totalScore;
    }, 0);
});
// import pic from '../assets/images/4-1.jpg'//不能把图片资源当成字符串 必须当成资源引入
// document.body.style.background = `url(${pic})`
// const pic = ref(`url(${import('../assets/images/4-1.jpg')})`)
// onMounted(async () => {
//   const imgPath = await import('../assets/images/4-1.jpg');
//   pic.value = `url(${imgPath.default})`;
// });
</script>

<style lang="css" scoped>
.score{
    font-size: 40px;
}
</style>
<style lang="less">
body{
    background:url('../assets/images/4-1.jpg');
    // background: v-bind(pic);
}
</style>
const score = computed(() => {
    if (state.answerList.length === 0 || !state.questionList.topic_answer) return 0;

    // 使用 reduce 函数并提供一个初始值为0的累加器，这样可以在找到第一个非标准答案后立即停止
    return state.answerList.reduce((totalScore, item) => {
        const answer = state.questionList.topic_answer[item];
        // 增加对 answer 的验证，确保它是定义好的
        if (answer && answer.is_standard_answer === '1') {
            totalScore += 20;
        }
        return totalScore;
    }, 0);
});