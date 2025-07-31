# 组件化
vue 支持将代码抽离再拿回来使用

# 指令
1. v-text
2. v-html
3. v-if  为false，整个dom结构直接不加载     性能开销更大
4. v-show 为false，这是通过css讲dom树将display改为none
5. v-for 在用v-for的时候需要添加一个唯一标识key，能让性能更好
6. v-on 绑定事件
7. v-bind 把它当作js代码
8. 