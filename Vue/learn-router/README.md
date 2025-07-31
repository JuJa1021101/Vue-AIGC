# 路由
因为vue是单页面，路由模拟当url改变时，切换显示不同的组件
实现成多页的效果

# 组件

路由里面提供了两个组件

1.router-link
2.router.push() 编程式的路由跳转

//router route的区别

# 参数
1.通过useRoute() 得到当前url的详细信息来获取

传递：router.push({path:'/hot',query: {id:123} })
接受：route.query.id


传递：router.push({ name:'./hot',params:{id:123} })
接受：route.params.id
接受： const props = defineProps({
    id:String
})
