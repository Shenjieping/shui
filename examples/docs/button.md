# Button 按钮
---
## 基础用法
使用 ```type```

<div class="demo-block">
  <div>
    <sh-button>默认按钮</sh-button>
    <sh-button type="primary">主要按钮</sh-button>
    <sh-button type="success">成功按钮</sh-button>
    <sh-button type="warning">警告按钮</sh-button>
    <sh-button type="danger">错误按钮</sh-button>
    <sh-button type="info">信息按钮</sh-button>
  </div>
</div>

::: demo
``` html
<div>
  <sh-button>默认按钮</sh-button>
  <sh-button type="primary">主要按钮</sh-button>
  <sh-button type="success">成功按钮</sh-button>
  <sh-button type="warning">警告按钮</sh-button>
  <sh-button type="danger">错误按钮</sh-button>
  <sh-button type="info">信息按钮</sh-button>
</div>
```
:::

## Attributes

| 参数      | 说明      | 类型          | 可选值         | 默认值      |
| -------- | --------- | ------------ | ------------- | ---------- |
| size     | 尺寸       | string       | default, medium, small       | -       |
| type     | 类型       | string       | primary, success, warning, danger, info   | -    |
