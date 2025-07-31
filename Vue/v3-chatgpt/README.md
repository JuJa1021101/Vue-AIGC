# 企业级vue3 开发  商业项目
- 项目架构  
    - vue-router 单页应用 路由功能
    - http://localhost:5173/#/

- 理解项目的需求
    - url发生改变 #hash 不会刷新页面 ，单页应用的要求
    - hashchang router-view 相应的组件显示到router-view位置就好了
    - 路由分为两种 hashHistory #Home 兼容性更好 锚链接
        localhost:5173#Home
        localhost:5173#about

    - 来自于锚链接的原生能力
    <a href="#Home">home</a> <a name="home"></a>
    url + '#Home'同时把我们送到home部位，页面不会刷新


- tailwindcss

    - npm install -D tailwindcss postcss autoprefixer
    安装
    - npx tailwindcss init -p
    初始化 Tailwind CSS 配置
    

- tailwindcss
    - 原子css Unocss
    - 4 1rem
    - py ml
    - css 带来了语义化


- 复杂的页面状态
    - input 兼具apikey的保存和OPenAI的聊天
    - 状态驱动界面

- 手写chatgpt
    - openai 聊天模型
        - model ： gpt-3.5-turbo
        - messages 上下文
            最近几次的聊天内容都发给llm 上下文越多 反馈越准确
        - role
            system      chat bot 角色
            assistant   openai 派出了一个助理
            user 提问
            assistant 回答
            