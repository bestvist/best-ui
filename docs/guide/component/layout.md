# Layout 布局

## 基础布局

<b-layout>
<b-header>header</b-header>
<b-content class="docs-layout-content"></b-content>
<b-footer>footer</b-footer>
</b-layout>

```
<b-layout>
    <b-header>header</b-header>
    <b-content class="docs-layout-content"></b-content>
    <b-footer>footer</b-footer>
</b-layout>
```

## 侧边栏布局

<b-layout>
<b-header>header</b-header>
<b-layout horizontal>
<b-slider class="docs-layout-slider" width="200px"></b-slider>
<b-content class="docs-layout-content"></b-content>
</b-layout>
<b-footer>footer</b-footer>
</b-layout>

```
<b-layout>
    <b-header>header</b-header>
    <b-layout horizontal>
        <b-slider class="docs-layout-slider" width="200px"></b-slider>
        <b-content class="docs-layout-content"></b-content>
    </b-layout>
    <b-footer>footer</b-footer>
</b-layout>
```

## Props

|参数|说明|类型|可选值|默认值|
|-|-|-|-|-|



<style lang="scss">
.docs-layout-content {
    height: 300px;
    background: rgb(247, 230, 186);
}

.docs-layout-slider {
    background: rgb(172, 199, 240);
}
</style>