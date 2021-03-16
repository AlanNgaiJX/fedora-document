<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 15:44:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Button.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Button 按钮
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Button，基础的按钮组件，根据props改变样式风格。
      </p>

      <!-- color -->
      <h2 class="article-h2">
        根据 type 切换按钮颜色风格
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li><fe-button>hello</fe-button></li>
          <li><fe-button type="primary">hello</fe-button></li>
          <li><fe-button type="warning">hello</fe-button></li>
          <li><fe-button type="danger">hello</fe-button></li>
          <li><fe-button type="success">hello</fe-button></li>
          <li><fe-button type="info">hello</fe-button></li>
        </ul>
      </div>
      <code-pan :code="demoTypes" language="html" />

      <!-- stroke -->
      <h2 class="article-h2">
        根据 stroke 切换 fill | stroke风格
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li><fe-button type="primary" stroke>hello</fe-button></li>
          <li><fe-button type="primary">hello</fe-button></li>
        </ul>
      </div>
      <code-pan :code="demoStroke" language="html" />

      <!-- shape -->
      <h2 class="article-h2">
        根据 shape 切换按钮形状
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li><fe-button type="primary" shape="default">hello</fe-button></li>
          <li><fe-button type="primary" shape="rect">hello</fe-button></li>
          <li><fe-button type="primary" shape="round">hello</fe-button></li>
          <li><fe-button type="primary" shape="default" stroke>hello</fe-button></li>
          <li><fe-button type="primary" shape="rect" stroke>hello</fe-button></li>
          <li><fe-button type="primary" shape="round" stroke>hello</fe-button></li>
        </ul>
      </div>
      <code-pan :code="demoShape" language="html" />

      <!-- status -->
      <h2 class="article-h2">
        根据 status 切换按钮状态
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li><fe-button type="primary" status="disable">hello</fe-button></li>
          <li><fe-button type="primary" status="loading">hello</fe-button></li>
        </ul>
      </div>
      <code-pan :code="demoStatus" language="html" />

      <!-- icon -->
      <h2 class="article-h2">
        使用 icon 按钮
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li><fe-button type="primary" icon="fe-check">hello</fe-button></li>
          <li>
            <fe-button
              type="primary"
              :icon="{
                name: 'fe-go',
                lay: 'after',
                className: 'afIcon'
              }"
            >
              hello
            </fe-button>
          </li>
        </ul>
      </div>
      <code-pan :code="demoIcon" language="html" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性
      </h2>
      <code-pan :code="props" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  data() {
    return {
      iport,
      demoTypes,
      demoStroke,
      demoShape,
      demoStatus,
      demoIcon,
      props,
    };
  },
});
const iport = "import { Button } from 'fedora';";
const demoTypes = `<fe-button>hello</fe-button>
<fe-button type="primary">hello</fe-button>
<fe-button type="warning">hello</fe-button>
<fe-button type="danger">hello</fe-button>
<fe-button type="success">hello</fe-button>
<fe-button type="info">hello</fe-button>`;
const demoStroke = `<fe-button type="primary" stroke>hello</fe-button>
<fe-button type="primary">hello</fe-button>`;
const demoShape = `<fe-button type="primary" shape="default">hello</fe-button>
<fe-button type="primary" shape="rect">hello</fe-button>
<fe-button type="primary" shape="round">hello</fe-button>
<fe-button type="primary" shape="default" stroke>hello</fe-button>
<fe-button type="primary" shape="rect" stroke>hello</fe-button>
<fe-button type="primary" shape="round" stroke>hello</fe-button>`;
const demoStatus = `<fe-button type="primary" status="disable">hello</fe-button>
<fe-button type="primary" status="loading">hello</fe-button>`;
const demoIcon = `<fe-button type="primary" icon="fe-check">hello</fe-button>
<fe-button
  type="primary"
  :icon="{
        name: 'fe-go',
        lay: 'after',
        className: 'afIcon',
      }"
  >
  hello
</fe-button>`;
const props = `  props: {
    type: { // 颜色风格
      type: String,
      default: 'default',
      validator(type) {
        if (
          type
          && !['default', 'primary', 'warning', 'danger', 'success', 'info'].includes(type)
        ) {
          console.error('type的类型必须为default、primary,warning,danger,success,info');
        }
        return true;
      },
    },
    stroke: { // 轮廓风格
      type: Boolean,
      default: false,
    },
    shape: { // 按钮形状：'default', 'round', 'rect'
      type: String,
      default: 'default',
      validator(shape) {
        if (shape && !['default', 'round', 'rect'].includes(shape)) {
          console.error('shape的类型必须为default,round,rect');
        }
        return true;
      },
    },
    status: { // 按钮状态：'default', 'disable', 'loading'
      type: String,
      default: 'default',
      validator(status) {
        if (status && !['default', 'disable', 'loading'].includes(status)) {
          console.error('status的类型必须为default,disable,loading');
        }
        return true;
      },
    },
    icon: { // 使用图标
      type: [Object, String],
      default: null,
      /* 可以是stirng或是一个objcet，example：
      {
        name:"fe-check",
        lay: "before", // or "after",
        className: "btn-icon"
      }

      or just

      "fe-check"
      */
    },
    onClick: { // click事件回调
      type: Function,
      default: () => {},
    },
  },`;
</script>

<style lang="scss">
@import '@/assets/_var.scss';
</style>
