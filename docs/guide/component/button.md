# Button 按钮

按钮组件，可以用来替换标准的html按钮。

## 不同类型

<b-btn type="default">default</b-btn>
<b-btn type="primary">primary</b-btn>
<b-btn type="success">success</b-btn>
<b-btn type="warning">warning</b-btn>
<b-btn type="danger">danger</b-btn>
<b-btn type="info">info</b-btn>
<b-btn type="text">text</b-btn>

## 链接按钮

<b-btn href="/">link</b-btn>

## 圆角按钮

<b-btn type="default" round>default</b-btn>
<b-btn type="primary" round>primary</b-btn>
<b-btn type="success" round>success</b-btn>
<b-btn type="warning" round>warning</b-btn>
<b-btn type="danger" round>danger</b-btn>
<b-btn type="info" round>info</b-btn>
<b-btn type="text" round>text</b-btn>

## 不同尺寸

<b-btn size="large" circle>large</b-btn>
<b-btn size="normal" circle>normal</b-btn>
<b-btn size="small" circle>small</b-btn>
<b-btn size="mini" circle>mini</b-btn>

## 扁平按钮

<b-btn type="default" flat>default</b-btn>
<b-btn type="primary" flat>primary</b-btn>
<b-btn type="success" flat>success</b-btn>
<b-btn type="warning" flat>warning</b-btn>
<b-btn type="danger" flat>danger</b-btn>
<b-btn type="info" flat>info</b-btn>
<b-btn type="text" flat>text</b-btn>

## 块级按钮

<b-btn full>full</b-btn>

## 禁用按钮

<b-btn type="default" disabled>default</b-btn>
<b-btn type="primary" disabled>primary</b-btn>
<b-btn type="success" disabled>success</b-btn>
<b-btn type="warning" disabled>warning</b-btn>
<b-btn type="danger" disabled>danger</b-btn>
<b-btn type="info" disabled>info</b-btn>
<b-btn type="text" disabled>text</b-btn>

## 属性

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|color|按钮颜色|String|-|-|
|text-color|文本颜色|String|-|-|
|type|类型|String|primary / success / warning / danger / info / text|-|
|size|大小|String|large / normal / small / mini|-|
|href|相当于 a 标签的 href属性，设置之后会渲染成 a 标签|String|-|-|
|round|是否圆角|Boolean|-|false|
|circle|是否圆形|Boolean|-|false|
|flat|是否扁平|Boolean|-|false|
|full|块级按钮|Boolean|-|false|
|disabled|是否禁用|Boolean|-|false|
|native-type|原生 type 属性|String|button / submit / reset|button|

<style>
.b-button + .b-button {
    margin: 10px;
}
</style>