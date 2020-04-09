# assignment

> A Vue.js component

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 设计

明确组件目的是展示信息，而信息会分为多种不同的类型，所以组件分为两个维度来处理
 - 信息流容器：信息展示的面板
 - 信息组件：不同类型的信息的展示组件

### 信息流容器

用于展示信息的面板，决定了信息的展示方式，我们可以在面板里对信息做一些统一处理，比如过滤、判断信息类型是否支持等等。

目前考虑了以下内容
 - 信息流布局：每条信息行都包含了头像和信息组件，面板要决定这些信息行的排布方式
 - 信息懒加载：将信息一股脑的展示在面板上肯定是不合适的，太多的信息可能引起卡顿，需要做一些类似分页的优化操作，按照这边的特性，用下拉加载的方式来处理比较合适。
 - 新消息提示：用户在浏览历史信息的时候，如果来一条新的信息，应该给予提示
 - 消息不支持提示：对于暂不支持的消息类型，给予统一的提示信息

### 信息流容器组件接口设计

#### props

属性|类型|是否必须|默认值|描述
-|-|-|-|-
data|Array|是|[]|信息数组，存放要展示的信息队列
max|Number|否|25|同时展示的信息阈值
get-data-method|Function|是|-|获取数据的接口

#### event

事件名|参数|描述
-|-|-
upper|-|触顶
floor|-|触底

#### data

属性名|类型|描述
-|-|-
type|String|消息类型：text、image、system
content|String|消息内容

### 信息组件

消息可以分为多种类型，比如图片，文字，音频等，针对这部分，我们为每种消息类型定制一个组件，在组件内部处理该类型信息的展示方式。而不同类型的组件也有一些问题要考虑，如下
- 多媒体类型的信息要考虑懒加载，例如图片懒加载，利用占位图的方式避免一开始就加载大图。

### 信息组件接口设计

#### props

属性|类型|是否必须|默认值|描述
-|-|-|-|-
data|String|是|-|信息内容
