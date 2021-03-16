<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 16:57:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Select.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Select 下拉选择
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Select，基础的下拉选择组件
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <fe-select v-model:value="selectValue1">
          <fe-select-option value="apple">apple</fe-select-option>
          <fe-select-option value="banana">banana</fe-select-option>
          <fe-select-option value="cat">cat</fe-select-option>
        </fe-select>
      </div>
      <code-pan :code="baseDemo" language="html" />

      <!-- 限制高度 -->
      <h2 class="article-h2">
        限制高度
      </h2>
      <div class="demo-wrap">
        <fe-select v-model:value="selectValue2" height="200">
          <fe-select-option value="1">1</fe-select-option>
          <fe-select-option value="2">2</fe-select-option>
          <fe-select-option value="3">3</fe-select-option>
          <fe-select-option value="4">4</fe-select-option>
          <fe-select-option value="5">5</fe-select-option>
          <fe-select-option value="6">6</fe-select-option>
          <fe-select-option value="7">8</fe-select-option>
          <fe-select-option value="9">9</fe-select-option>
        </fe-select>
      </div>
      <code-pan :code="limitHeightDemo" language="html" />

      <!-- 默认 与 不可选-->
      <h2 class="article-h2">
        默认 与 不可选
      </h2>
      <div class="demo-wrap">
        <fe-select v-model:value="selectValue3">
          <fe-select-option value="1" default>1</fe-select-option>
          <fe-select-option value="2">2</fe-select-option>
          <fe-select-option value="3" disable>3</fe-select-option>
        </fe-select>
      </div>
      <code-pan :code="defaultDemo" language="html" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性 Select
      </h2>
      <code-pan :code="propsSelect" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性 SelectOption
      </h2>
      <code-pan :code="propsSelectOption" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Select',
  data() {
    return {
      selectValue1: '',
      selectValue2: '',
      selectValue3: '',
      iport,
      baseDemo,
      limitHeightDemo,
      defaultDemo,
      propsSelect,
      propsSelectOption,
    };
  },
});

const iport = "import { Select, SelectOption } from 'fedora';";
const baseDemo = `<fe-select v-model:value="selectValue1">
  <fe-select-option value="apple">apple</fe-select-option>
  <fe-select-option value="banana">banana</fe-select-option>
  <fe-select-option value="cat">cat</fe-select-option>
</fe-select>`;
const limitHeightDemo = `<fe-select v-model:value="selectValue" height="200">
  <fe-select-option value="1">1</fe-select-option>
  <fe-select-option value="2">2</fe-select-option>
  <fe-select-option value="3">3</fe-select-option>
  <fe-select-option value="4">4</fe-select-option>
  <fe-select-option value="5">5</fe-select-option>
  <fe-select-option value="6">6</fe-select-option>
  <fe-select-option value="7">8</fe-select-option>
  <fe-select-option value="9">9</fe-select-option>
</fe-select>`;
const defaultDemo = `<fe-select v-model:value="selectValue3">
  <fe-select-option value="1" default>1</fe-select-option>
  <fe-select-option value="2">2</fe-select-option>
  <fe-select-option value="3" disable>3</fe-select-option>
</fe-select>`;
const propsSelect = `  props: {
    icon: { // 图标
      type: String,
      default: '',
    },
    value: { // 值
      type: [String, Number],
    },
    placeholder: { // placeholder
      type: String,
      default: '请输入',
    },
    height: { // 限制高度
      type: [Number, String],
      default: 'auto',
    },
  },`;
const propsSelectOption = `  props: {
    icon: { // 图标
      type: String,
      default: '',
    },
    value: { // 值
      type: [String, Number],
      require: true,
    },
    default: { // 默认选择
      type: Boolean,
      default: false,
    },
    disable: { // 是否可选
      type: Boolean,
      default: false,
    },
  },`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
