# Input 输入框

## 基础用法

<b-input placeholder="请输入内容"></b-input>

## 文本域

<b-input type="textarea" placeholder="请输入内容"></b-input>

## 文本前后缀

<b-input prefix="$: "></b-input>
<b-input suffix="qq.com"></b-input>

## 错误信息

<b-input :error-msg="`用户名错误<a href='/'>链接</a>`"></b-input>

## 属性

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|type|类型|String|input / textarea|input|
|value|绑定值|String/Number|-|-|
|max|最大输入长度|Number|-|-|
|min|最小输入长度|Number|-|-|
|placeholder|输入框占位文本|String|-|-|
|disabled|是否禁用|Boolean|-|false|
|readonly|是否只读|Boolean|-|false|
|resize|是否缩放，只对于 type="textarea" |Boolean|-|false|
|step|设置输入字段的合法数字间隔|-|-|-|
|autofocus|是否自动获取焦点|Boolean|-|false|
|height|文本框高度|String|-|80px|
|autocomplete|是否自动补全|String|on / off|off|
|prefix|输入框前缀|String|-|-|
|suffix|输入框后缀|String|-|-|
|errorMsg|错误信息，可嵌入html内容|String|-|-|
