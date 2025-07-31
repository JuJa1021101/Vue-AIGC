# vue 动画

- 页面动态效果
    - transition css 属性的切换
    - animations
    - js stylue + requestAnimation
    - v-if/v-show 切换组件 带来动画？

- vue提供了一些内置组件，比如Transition
- <component :is="">

- 良好的编程风格 
    - BEM命名规范
    - 组件的思维
    - 优质的html和css代码
    - @import 将css模块化
        - app.css
        - card.css
        - animation.css


- 动态效果
    - css transition 切换类名实现
    - css animation
    - 如果要有更细致的定制效果，一些内置的类似生命周期的钩子类名
        vue 提供了更细致的定制效果 ，一些内置的类似生命周期的钩子类名
        v-if/v-show 切换组件/html片段的效果，动画，内置组件transition 更好的服务于动画定制
        .v-enter-from .v-enter-active .v-enter-to
        .v-leave-from .v-leave-active .v-leave-to

    - 如果想定制呢？ name="slide" 有没有把vue 文档仔细看一遍
    - animation 只需要定制enter-active-class 和leave-active-class
    - 专业的animation.css
        -transition 支持 class特性 animate-tada


- 当在CSS中对一个元素应用transform属性时，浏览器可能会自动创建一个新的合成图层（compositing layer），这是为了优化渲染性能。这种行为被称为“层化”（layering），它有助于提高页面的渲染效率，尤其是在进行复杂的动画或变换时。

以下是为什么添加transform会导致新图层产生的几个关键原因：

减少重绘和回流: 当元素需要进行变换时，如果没有独立的图层，浏览器可能需要重新计算整个页面的布局和绘制顺序。这可能导致页面的其他部分也需要重绘或回流，从而降低性能。通过创建一个新的图层，元素的变换只会影响该图层，而不会触发页面其他部分的重绘或回流。

利用GPU加速: transform属性通常涉及到复杂的数学运算，尤其是3D变换。GPU擅长处理这些类型的计算，因此浏览器会将这些任务卸载到GPU上执行。当元素被标记为需要进行变换时，浏览器会创建一个图层并将其发送给GPU，以便更高效地进行渲染。

提高动画性能: 对于动画来说，独立的图层意味着动画可以在GPU上进行，而不必等待主渲染线程完成其他任务。这可以显著提高动画的流畅性，特别是在高分辨率屏幕和高刷新率显示器上。

隔离渲染: 创建独立图层还可以帮助隔离渲染上下文，这意味着即使图层内的元素发生变化，也不会影响到页面的其他部分。这对于保持页面的响应性和避免不必要的重绘是非常有帮助的。

需要注意的是，虽然创建额外的图层可以带来性能提升，但过多的图层也会增加内存消耗。因此，在设计和优化网站时，开发者需要权衡图层的数量与性能之间的关系，确保达到最佳的用户体验。在Chrome开发者工具中，可以使用“Show Paint Rects”、“Show Layout Shifts”和“Show Layer Borders”等选项来调试和分析图层和渲染性能。