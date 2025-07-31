# v3 后台管理系统

- 实习项目  外包必备


- vue 组件库 ElementPlus
npm i element-plus

main.js use使用全局组件     ElementPlus 加载CSS

- 路由
    - 放心使用history 不用care hash的兼容性
    - 路由守卫
        - 权限
        - 身份权限 admin user 


- 五星路由功能
    - 两种路由形式的优缺点
        hash  兼容性好 但形式不好
        history 兼容性差 但是和后端路由一致
        综合项目分析    后台系统    自己人用    history
        用户项目 如果考虑兼容性用hash   用户端移动端项目不太需要兼容性
        用history也行
        hash一般在（PC） 
    - 路由的懒加载
    - 二级路由
    - 路由守卫
        - 登录鉴权 auth
        - 角色权限 role admin user ['']
    - 404 403
    - meta 用法
        - title document.title
        - auth login
        - permiss role
    - NProgress 进度条
        用户体验
        router.beforeEach
        router.afterEach
        NProgress.start() NProgress.done()

        - history 概念展示出来
            访问历史
            useRouter push go(-1)


- ELForm 的用法
    - Element Puls UI组件库中的Form组件
    - ElForm ElForm ElInput ElCheckbox 
    - v-model 双向绑定 reactive{username,password,........}
        - ElForm    :model="param"
    - validate rules 配置一下
        - 对form 进行 ref绑定 绑定的是Form组件
        - 提交之前 valid一下
    - 提交成功


- pania
    - 状态管理
    - 比vuex 更年轻更好用
    - app.use(createPinia())


- 设置全局状态数据
    - collapse 状态 true | false
        - 窄屏的Pad 
        - v-if /if-else + action collapse
    - permiss 权限状态
        - 跨组件层级访问是常态
        - key,defaultList 
        - defaultList 可用于计算 login.vue ms_name this.handleSet key
        - router.js 403
        - 任何需要校验权限的地方

- Object.entries 的用法 和应用场景
    - es6 新增的遍历对象的方法
    - Object.keys() Object.values() 基础上
    - app.component 全局声明组件的时候 一次性的把ElementPlus/icons 全部注册
    - for of + 展开运算符
    - ElementPlus 设计的很好 个人开发者可能用icons 企业一般有自己的icon
        ElementPlus 将icons 拆开 ，更少更轻 同时有了定制性



- css 特性
    - transition
    - css4 variable 主题切换
        :root{-- }
        var()

- ElDropDown
    - 触发DropDown的内容 交给slot
    - DropDownMenu 内容？ 交给具名slot
    - slot 带来了组件超级定制性
    - ElDialog slot header default footer 三部分 无限复用
    - template vue 内置组件 包一下内部的内容 挂载到页面上就消失
        <template #header>


- template 用法
    - vue组件的模板声明
    - template #title 具名slot 插入到相应位置
    - template 接受指令v-if v-show
