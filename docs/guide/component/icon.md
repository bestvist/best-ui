# Icon 图标

BestUI 基于[iconfont](http://iconfont.cn/)图标库，图标均以symbol方式引入，这是一种全新的使用方式，做了一个svg的集合。

::: warning 相关特点:

* 支持多色图标了，不再受单色限制。
* 通过一些技巧，支持像字体那样，通过font-size,color来调整样式。
* 支持 ie9+ 及现代浏览器。
* 浏览器渲染svg的性能一般。
:::

## 使用方式
引入b-icon组件，添加name属性即可显示相应图标。
<demo-code>
<b-icon name="check-circle"></b-icon>
<b-icon name="close-circle"></b-icon>
<b-icon name="left-circle"></b-icon>
<div slot="codeText">
    ```
    <b-icon name="check-circle"></b-icon>
    <b-icon name="close-circle"></b-icon>
    <b-icon name="left-circle"></b-icon>
    ```
</div>
</demo-code>


## 图标集合

<b-icon name="check-circle"></b-icon>
<b-icon name="close-circle"></b-icon>
<b-icon name="left-circle"></b-icon>
<b-icon name="down-circle"></b-icon>
<b-icon name="right-circle"></b-icon>
<b-icon name="up-circle"></b-icon>
<b-icon name="warning-circle"></b-icon>
<b-icon name="sync"></b-icon>
<b-icon name="undo"></b-icon>
<b-icon name="redo"></b-icon>
<b-icon name="reload"></b-icon>
<b-icon name="eye"></b-icon>
<b-icon name="right"></b-icon>
<b-icon name="left"></b-icon>
<b-icon name="up"></b-icon>
<b-icon name="down"></b-icon>
<b-icon name="check-circle-fill"></b-icon>
<b-icon name="left-circle-fill"></b-icon>
<b-icon name="down-circle-fill"></b-icon>
<b-icon name="minus-circle-fill"></b-icon>
<b-icon name="close-circle-fill"></b-icon>
<b-icon name="info-circle-fill"></b-icon>
<b-icon name="up-circle-fill"></b-icon>
<b-icon name="right-circle-fill"></b-icon>
<b-icon name="plus-circle-fill"></b-icon>
<b-icon name="question-circle-fill"></b-icon>
<b-icon name="heart-fill"></b-icon>

## 属性

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|name|图标名称|String|-|-|