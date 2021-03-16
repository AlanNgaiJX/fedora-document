<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 13:38:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Intro.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <h1 class="article-h1">
        简介
      </h1>
      <p class="article-p">
        Fedora 是一个基于 Vue 3.0 的、简约通用的 UI
        组件库，为基础业务提供了支援。其样式基于SCSS构建，可进一步定制业务主题。
      </p>
      <h2 class="article-h2">
        现已支持
      </h2>
      <ul class="func-list">
        <li>Icon 图标</li>
        <li>Button 按钮</li>
        <li>Radio 单选</li>
        <li>Switch 开关</li>
        <li>Select 下拉选择</li>
        <li>Slider 滑动输入</li>
        <li>Input 输入框</li>
        <li>Textarea 块输入</li>
        <li>Menu 菜单</li>
        <li>Tabs 标签页</li>
        <li>Popover 弹出</li>
        <li>Bubble 回收</li>
        <li>Skeleton 骨架屏</li>
        <li>LazyImg 图片懒加载</li>
        <li>SuqareImg 方形图</li>
        <li>Spin 加载态</li>
        <li>Loading 加载中</li>
        <li>Toast 吐司消息</li>
        <li>...</li>
      </ul>
      <h2 class="article-h2">
        正在构建
      </h2>
      <ul class="func-list">
        <li>Modal 模态框</li>
        <li>Grid 网格</li>
        <li>Crul 表格</li>
        <li>...</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({ name: 'Intro' });
</script>

<style lang="scss">
@import '@/assets/_var.scss';
.article-page-wrap {
  box-sizing: border-box;

  .func-list {
    margin: 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 30px 30px 30px 30px 30px 30px 30px;
    row-gap: 5px;
    column-gap: 10px;

    li {
      font-size: 14px;
      display: flex;
      align-items: center;
      padding: 5px;
      background-color: #d9f2ff42;
    }
  }
}
</style>
