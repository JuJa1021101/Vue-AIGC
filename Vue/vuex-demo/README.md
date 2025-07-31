# vuex 带来了数据流管理


- 小项目不需要vuex/pinia ,但是大型项目 需要专职的财务，vuex管理项目

- 专业打理数据流
- 把数据收归中央管理 父组件也别打理

- npm i vuex
    - 插件 install use
- 读状态
    - useStore
    - computed  store.state.count

- 写状态
    state.dispatch('increment') dispatch 一个action
    action 执行一下 最后一定执行commit  提交修改
    mutation 修改状态
    state.count++ 值发生改变，所有用到它的地方全部更新