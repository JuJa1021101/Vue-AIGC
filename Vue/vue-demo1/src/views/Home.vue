<!-- <template>
    <div class="home">
    <header class="header">
        <div class="title">旅梦后台管理</div>
        <div class="user-info">欢迎 admin</div>
    </header>
    <section class="body">
        <aside class="menu">
            <ul class="menu-list">
                <li v-for="{item,index} in menu" key="item.id">
                    <router-link :to="item.path">{{ item.name }}</router-link>
                </li>
            </ul>
        </aside>
        <main class="main">
        </main>
    </section>
</div>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref([
  {id: 1, name: '班级管理', path: '/class'},
  {id: 2, name: '讲师列表', path: '/teacher'},
  {id: 3, name: '就业统计', path: '/job'}
])
</script>

<style lang="css" scoped>
.home{
    height: 100vh;
}
.body{
    display: flex;
    height: calc(100vh - 70vh);
}
.header{
    height: 70px;
    display: flex;
    justify-content: space-between;
    font-size: 30;
    align-items: center;
    color: #fff;
    padding: 0 50px;
    background-color: rgb(16, 222, 222);
}
</style> -->
<!-- <template>
    <div class="home">
  
      <header class="header">
        <div class="title">旅梦后台管理</div>
        <div class="user-info">欢迎 admin</div>
      </header>
      <section class="body">
        <aside class="menu">
          <ul>
            <li v-for="(item, index) in menu" :key="item.id">
              <RouterLink :to="item.path">{{ item.name }}</RouterLink>
            </li>
          </ul>
        </aside>
        <main class="main">
  
        </main>
      </section>
  
    </div>
  
  
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  
  const menu = ref([
    { id: 1, name: '班级管理', path: '/class' },
    { id: 2, name: '讲师列表', path: '/teacher' },
    { id: 3, name: '就业统计', path: '/job' }
  ])
  </script>
  
  <style lang="css" scoped>
  .home{
    height: 100vh;
  }
  .header{
    height: 70px;
    display: flex;
    justify-content: space-between;
    font-size: 30;
    align-items: center;
    color: #fff;
    padding: 0 50px;
    background-color: rgb(16, 222, 222);
}
  
  .title {
    font-size: 30px;
  }
  
  .body {
    display: flex;
    height: calc(100vh - 70px);
  }
  
  .menu {
    width: 180px;
    background: #1680c2;
  }
  .menu-item{
    height: 50px;

  }
  .menu-item a{
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    width: 100px;
    height: 100px;


  }
  .menu-item
  </style> -->

  <template>
    <div class="home">
  
      <header class="header">
        <div class="title">旅梦后台管理</div>
        <div class="user-info">欢迎 admin</div>
      </header>
      <section class="body">
        <aside class="menu">
          <ul>
            <li class="menu-item" v-for="(item, index) in menu" :key="item.id">
              <RouterLink :to="item.path">{{ item.name }}</RouterLink>
            </li>
          </ul>
        </aside>
        <main class="main">
            <RouterView></RouterView>
        </main>
      </section>
  
    </div>
  
  
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';
  
  const menu = ref([
    { id: 1, name: '班级管理', path: '/class' },
    { id: 2, name: '讲师列表', path: '/teacher' },
    { id: 3, name: '就业统计', path: '/job' }
  ])
  </script>
  
  <style lang="css" scoped>
  .home{
    height: 100vh;
  }
  .header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    padding: 0 50px;
    background-color: #6ec5f0;
    color: #fff;
  }
  
  .title {
    font-size: 30px;
  }
  
  .body {
    display: flex;
    height: calc(100vh - 70px);
  }
  
  .menu {
    width: 180px;
    background: #52aad7;
  }
  .menu-item{
    height: 50px;
  }
  .menu-item a{
    color: #fff;
    font-size: 20px;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    line-height: 50px;
  }
  .menu-item a:hover{
    background-color: rgba(255, 255, 255, 0.5);
  }
  </style>