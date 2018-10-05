# Grid 栅格

## 分栏间隔

<b-row :gutter="20">
<b-col :span="12">
<div class="docs-col"></div>
</b-col>
<b-col :span="12">
<div class="docs-col"></div>
</b-col>
</b-row>

```
<b-row :gutter="20">
    <b-col :span="12">
        <div class="docs-col"></div>
    </b-col>
    <b-col :span="12">
        <div class="docs-col"></div>
    </b-col>
</b-row>
```

## 分栏偏移

<b-row :gutter="20">
<b-col :span="12" :offset="6">
<div class="docs-col"></div>
</b-col>
<b-col :span="4" :push="2">
<div class="docs-col"></div>
</b-col>
</b-row>

```
<b-row :gutter="20">
    <b-col :span="12" :offset="6">
        <div class="docs-col"></div>
    </b-col>
    <b-col :span="4" :push="2">
        <div class="docs-col"></div>
    </b-col>
</b-row>
```

<b-row>
<b-col :span="3" :pull="1">
<div class="docs-col"></div>
</b-col>
<b-col :span="17">
<div class="docs-col"></div>
</b-col>
</b-row>

```
<b-row>
    <b-col :span="3" :pull="1">
        <div class="docs-col"></div>
    </b-col>
    <b-col :span="17">
        <div class="docs-col"></div>
    </b-col>
</b-row>
```

## row属性

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|gutter|栅格间隔|number|-|0|

## col属性
|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|
|span|栅格列数|number|-|24|
|offset|栅格左侧间隔格数|number|-|0|
|push|栅格右移格数|number|-|0|
|pull|栅格左移格数|number|-|0|
