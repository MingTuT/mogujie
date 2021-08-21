# mogujie

## 依赖安装
```
npm install
```

### 项目运行
```
npm run serve
```

### 项目打包
```
npm run build
```

## 项目简介

该项目是一款模仿《蘑菇街》的购物应用程序，基于Vue.js开发，使用了Vue-Router、VueX、axios、ES6等技术。



## 组件

项目中使用到了 BetterScroll 和 Vant 组件库，其中使用了 Swipe 轮播组件、Tabbar 标签栏组件、Toast 轻提示组件和 Dialog 弹出框组件。



## Pages

| 页面   | 地址                                |
| ------ | ----------------------------------- |
| 首页   | http://localhost:8080/              |
| 详情页 | http://localhost:8080/detail/商品ID |
| 分类   | http://localhost:8080/category      |
| 购物车 | http://localhost:8080/cart          |
| 我的   | http://localhost:8080/profile       |

### 首页

+ 顶部使用 简单封装的 NavBar 组件，内部划分了左中右三个 slot，后续的其他页面只需传值给相应的 slot 即可完成布局。
+ 轮播图使用了 Vant 组件库 中的 Swipe 组件。
+ 推荐商品列表单独封装为 GoodsList 组件，主要展示商品的图片、名称和价格的相关信息。其中对图片加载做了优化，使用懒加载图片，并设置了未加载出内容时的占位图片。
+ 使用了二次封装的 BetterScroll 组件，初始加载30条数据，当触发监听滚动到底部事件，请求加载更多数据追加到商品列表中。
+ 使用 mixin 混入返回顶部按钮组件。
+ 使用 封装的 TabControl 组件，页面下滑到一定距离可以 TabControl 可以吸顶。实现原理：使用两个 TabControl  组件，第一个组件固定在 NavBar 之下并隐藏，第二个组件正常显示，监听 scroll 距离，触发两个组件的隐藏于显示的切换。

### 详情页

+ 从 route 传递的商品 ID 请求相应数据并保存。
+ 进入详情页会将原先底部的 van-tabbar 组件隐藏，并将 van-goods-action 组件显示。
+ 顶部导航栏封装为单独组件，点击不同标签可以滚动到相应的展示内容，滚动事件使用的 BetterScroll  的 scrollTo 事件实现。
+ 使用 VueX 实现添加购物车功能。并使用 localStorage 对数据进行持久存储，当 localStorage 中有数据时就会直接使用将其同步到 VueX 中的相关商品数据。
+ 引用 Vant 的 Toast 组件，在添加购物车后显示提示。
+ 使用 mixin 混入返回顶部按钮组件。

### 分类

+ 分类页主体布局为左右两个组件，左侧的 SlideBar 组件封装了 BetterScroll ，右侧直接使用BetterScroll 包裹。
+ 点击 SlideBar 中的不同选项，右侧能展示相应的商品分类。
+ 引用了和首页相同的 GoodsList 组件加 TabControl 组件，推荐更多分类商品。

### 购物车

+ 购物车的数据先从 localStorage 中获取，并当数据的信息发生改变于 VueX 进行同步更新。
+ 实现全选反选功能。
+ 利用 computed 计算属性动态计算选中商品的数量和汇总的价格。
+ 使用 Vant 的 Dialog 弹出框确认提交订单提示。

### 我的

+ 该页面仅使用了 flex 布局实现页面内容展示，并未实现具体功能。



## 效果展示
<img src="https://s3.bmp.ovh/imgs/2021/08/efc3b6730ef423a0.jpg" alt="img" width="375" />

<img src="https://s3.bmp.ovh/imgs/2021/08/2e1851a8ea0615c5.jpg" alt="img" width="375" />

<img src="https://s3.bmp.ovh/imgs/2021/08/1e371554cf2f483a.jpg" alt="img" width="375" />

<img src="https://s3.bmp.ovh/imgs/2021/08/903eb7f582f019a2.jpg" alt="img" width="375" />

<img src="https://s3.bmp.ovh/imgs/2021/08/aa60a3dc59df70b2.jpg" alt="img" width="375" />

<img src="https://s3.bmp.ovh/imgs/2021/08/ae2de0c7ac9b7fff.jpg" alt="img" width="375" />

<img src="https://s3.bmp.ovh/imgs/2021/08/33db74880be3e0ef.jpg" alt="img" width="375" />



<img src="https://s3.bmp.ovh/imgs/2021/08/af982cfd78c26834.jpg" alt="img" width="375" />
