# watch vs computed
1. watch 默认不会主动执行一次，且watch是监听某个变量的变更，会执行内部的回调
2. computed 默认会主动执行一次，当回调中任意变量值进行变更时，computed都会重新执行