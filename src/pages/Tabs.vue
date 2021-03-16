<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 20:08:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Tabs.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Tabs 标签页
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Tabs 标签页，插槽式设计
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <fe-tabs selected="2">
          <fe-tabs-head>
            <fe-tabs-item name="1">item-1</fe-tabs-item>
            <fe-tabs-item name="2">item-2</fe-tabs-item>
            <fe-tabs-item name="3">item-3</fe-tabs-item>
            <fe-tabs-item name="4">item-4</fe-tabs-item>
            <fe-tabs-item name="5" disabled>item-disabled</fe-tabs-item>
          </fe-tabs-head>
          <fe-tabs-body>
            <fe-tabs-pane name="1">content-1</fe-tabs-pane>
            <fe-tabs-pane name="2">content-2</fe-tabs-pane>
            <fe-tabs-pane name="3">content-3</fe-tabs-pane>
            <fe-tabs-pane name="4">content-4</fe-tabs-pane>
          </fe-tabs-body>
        </fe-tabs>
      </div>
      <code-pan :code="baseDemo" language="html" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性 Tabs
      </h2>
      <code-pan :code="tabsProps" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性 TabsItem
      </h2>
      <code-pan :code="tabsItemProps" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性 TabsPan
      </h2>
      <code-pan :code="tabsPanProps" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tabs',
  data() {
    return {
      iport,
      baseDemo,
      tabsProps,
      tabsItemProps,
      tabsPanProps,
    };
  },
});

const iport = "import {Tabs, TabsHead, TabsBody, TabsItem,TabsPane} from 'fedora';";
const baseDemo = `<fe-tabs selected="2">
  <fe-tabs-head>
    <fe-tabs-item name="1">item-1</fe-tabs-item>
    <fe-tabs-item name="2">item-2</fe-tabs-item>
    <fe-tabs-item name="3">item-3</fe-tabs-item>
    <fe-tabs-item name="4">item-4</fe-tabs-item>
    <fe-tabs-item name="5" disabled>item-disabled</fe-tabs-item>
  </fe-tabs-head>
  <fe-tabs-body>
    <fe-tabs-pane name="1">content-1</fe-tabs-pane>
    <fe-tabs-pane name="2">content-2</fe-tabs-pane>
    <fe-tabs-pane name="3">content-3</fe-tabs-pane>
    <fe-tabs-pane name="4">content-4</fe-tabs-pane>
  </fe-tabs-body>
</fe-tabs>`;
const tabsProps = `props: {
  selected: { // 默认选中的标签
    type: String,
    required: true,
  },
  direction: { // 版式，默认横版
    type: String,
    default: 'horizontal',
    validator(value) {
      return ['horizontal', 'vertical'].indexOf(value) >= 0;
    },
  },
},`;
const tabsItemProps = `props: {
  disabled: { // 不可选中
    type: Boolean,
    default: false,
  },
  name: { // tab名
    type: [String, Number],
    required: true,
  },
},`;
const tabsPanProps = `  props: {
    name: { // 名对应tab-item名
      type: [String, Number],
      required: true,
    },
  },`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
