# vue-kindeditor
基于Kindeditor、适用于Vue2的富文本编辑器

# 使用
将components/kindeditor目录放入你的组件库，并修改对应kindeditor.js的路径

## 全局注册
``` javascript
import VueKindEditor from './components/kindeditor'
Vue.use(VueKindEditor)
```

## 独立引用
``` javascript
import { kindeditor } from './components/kindeditor'
export default{
    components: {
        kindeditor
    }
}
```

``` html
<kindeditor v-model="content" :options="{width: '640px', height: '320px'}"></kindeditor>
```