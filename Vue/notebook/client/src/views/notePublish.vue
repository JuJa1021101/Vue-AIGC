<template>
  <div class="note-publish">
    <div class="editor">
      <QuillEditor theme="snow" v-model:content="state.content" placeholder="请输入笔记内容" contentType="html" />
    </div>

    <div class="note-wrap">
      <div class="note-cell">
        <van-field v-model="state.title" label="标题" placeholder="请输入标题" />
      </div>

      <div class="note-cell">
        <van-field label="图片上传">
          <template #input>
            <van-uploader v-model="state.img" :after-read="afterRead" max-count="1" />
          </template>
        </van-field>

      </div>

      <div class="note-cell">
        <div class="sort" @click="showPicker = true">
          <span>分类</span>
          <span>{{state.note_type}} <van-icon name="arrow" /></span>
        </div>

        <van-popup 
          v-model:show="showPicker" 
          round 
          position="bottom"
        >
          <van-picker 
            :columns="columns" 
            @cancel="showPicker = false" 
            @confirm="onConfirm" />
        </van-popup>
      </div>

    </div>

    <div class="btn">
      <van-button type="primary" block @click="publish">发布笔记</van-button>
    </div>
  </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { reactive, ref } from 'vue';
import axios from '@/api/index'
import { showToast } from 'vant';
import { useRouter } from 'vue-router';

const rouetr = useRouter()
// const actions = [
//     { name: '美食' },
//     { name: '旅行' },
//     { name: '恋爱' },
//     { name: '学习' },
//     { name: '吵架' }
// ]

const columns = [
    { text: '美食', value: '美食' },
    { text: '旅行', value: '旅行' },
    { text: '恋爱', value: '恋爱' },
    { text: '学习', value: '学习' },
    { text: '吵架', value: '吵架' },
  ];

const onConfirm = ({selectedValues}) => {
  // console.log(selectedValues);
  state.note_type = selectedValues[0];
  showPicker.value = false
}

const state = reactive({
  content: '',
  title: '',
  img: [],
  note_type: ''
})

const afterRead = (file) => {
  console.log('图片读取到了', file);
}

//发布 用post 因为有一堆的参数要给
const showPicker = ref(false)

const publish = async () => {
  const res = await axios.post('/note-publish', {
      title: state.title,
      note_content: state.content,
      head_img: state.img.length ? state.img[0].content : '',
      note_type: state.note_type
  })
  showToast({
    type:'success',
    message:res.msg,
    duration:1500
  })
    setTimeout(()=>{
      rouetr.push('/noteClass')
    },1500)

  
  console.log(res);
}

</script>

<style lang="less" scoped>
.note-publish {
  min-height: 100vh;

  :deep(.ql-container) {
    height: 200px;
  }

  .note-cell {
    border-bottom: 1px solid #d1d5db;

    .sort {
      display: flex;
      justify-content: space-between;
      line-height: 3;
      padding: 3px 16px;
      color: #323233;
    }
  }

  .btn{
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
  }
}
</style>