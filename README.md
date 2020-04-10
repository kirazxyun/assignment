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

明确组件目的是展示信息，该组件只是接收信息，并将信息展示出来。
且其中信息会分为多种不同的类型，所以将组件拆分为三个维度来处理
 - 信息流面板（Assignment）：信息展示的面板
 - 信息行（AssignmentItem）：用于处理每一行信息种类的判断
 - 信息组件（Message*）：不同类型的信息的展示组件

### 数据设计
```js
{
  id: `xxx`, // 信息唯一标示id
  type: 'userText', // 信息类型：userText-用户文字信息，userImage-用户图片，system-系统信息
  content: '你好', // 信息内容，如用户发送的文字信息
  imgPlaceholder: null, // 如果是图片，则用这个字段存放缩略图
  userId: 'laowang', // 发送信息的用户的id
  userName: '老王' // 发送信息的用户的名字
}
```

### 信息流面板

用于展示信息的面板

目前考虑了以下内容
 - 布局：面板要决定信息行的排布方式，如间距，滚动条位置等。
 - 信息展示量限制：信息不能无限制的展示，因为dom的增大会降低渲染性能，所以需要限制展示数量，一方面要控制历史记录的加载，另一方面在新的信息加进来的时候要去掉旧的信息。
 - 触发触顶事件，使用方可通过监听这个事件来判断是否要加载新的历史数据进来
 - 触发下拉事件，在移动端应该是通过下拉更新的方式加载数据（未实现）

### 信息流容器组件接口设计

#### props

属性|类型|是否必须|默认值|描述
-|-|-|-|-
messages|Array|是|[]|信息数组，存放要展示的信息队列
max|Number|否|100|同时展示的信息阈值
ownerId|String|是|-|面板所属的用户id
loading|Boolean|否|false|显示数据加载中

#### methods

方法|参数|描述
-|-|-
scrollBottom|-| 滚动到底部

#### event

事件名|参数|描述
-|-|-
scroll-top|-|触顶
reach-max|-|到达阈值

### 信息行

信息行用来根据信息类型判断要展示哪个信息组件：
 - 根据数据的type计算信息组件名称
 - 消息不支持提示：对于暂不支持的消息类型，给予统一的提示信息

 ### 信息行接口设计

#### props

属性|类型|是否必须|默认值|描述
-|-|-|-|-
data|Object|是|-|信息内容

### 信息组件

消息可以分为多种类型，比如图片，文字，音频等，针对这部分，我们为每种消息类型定制一个组件，在组件内部处理该类型信息的展示方式。而不同类型的组件也有一些问题要考虑，如下
- 多媒体类型的信息要考虑懒加载，例如图片懒加载，利用占位图的方式避免一开始就加载大图。

### 信息组件接口设计

#### props

属性|类型|是否必须|默认值|描述
-|-|-|-|-
data|Object|是|-|信息内容
