<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 16:06:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Radio.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Radio 单选框
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Radio，基础的单选框，可使用最小单元 Radio，也可以列表使用 RadioList
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li><fe-radio active>hello</fe-radio></li>
          <li><fe-radio>world</fe-radio></li>
        </ul>
      </div>
      <code-pan :code="baseDemo" language="html" />

      <!-- rect -->
      <h2 class="article-h2">
        stroke 风格
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li><fe-radio active rect>hello</fe-radio></li>
          <li><fe-radio rect>world</fe-radio></li>
        </ul>
      </div>
      <code-pan :code="rectDemo" language="html" />

      <!-- radioList -->
      <h2 class="article-h2">
        Radio list 单选组
      </h2>
      <div class="demo-wrap">
        <fe-radio-list
          :list="[
            { value: 0, text: 'a' },
            { value: 1, text: 'b' },
            { value: 2, text: 'c' }
          ]"
          v-model:value="radioListValue"
        ></fe-radio-list>
      </div>
      <code-pan :code="listDemo" language="html" />

      <!-- radioList column-->
      <h2 class="article-h2">
        纵向排列
      </h2>
      <div class="demo-wrap">
        <fe-radio-list
          :list="[
            { value: 0, text: 'a' },
            { value: 1, text: 'b' },
            { value: 2, text: 'c' }
          ]"
          v-model:value="radioListValue1"
          layout="column"
        ></fe-radio-list>
      </div>
      <code-pan :code="listDemoColumn" language="html" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性 - Radio
      </h2>
      <code-pan :code="propsRadio" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性 - RadioList
      </h2>
      <code-pan :code="propsRadioList" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Radio',
  data() {
    return {
      iport,
      baseDemo,
      rectDemo,
      listDemo,
      listDemoColumn,
      propsRadio,
      propsRadioList,
      radioListValue: 0,
      radioListValue1: 0,
    };
  },
});
const iport = "import { Radio, RadioList } from 'fedora';";
const baseDemo = `<fe-radio active>hello</fe-radio>
<fe-radio>world</fe-radio>`;
const rectDemo = `<fe-radio active rect>hello</fe-radio>
<fe-radio rect>world</fe-radio>`;
const listDemo = `<fe-radio-list
  :list="[
    { value: 0, text: 'a' },
    { value: 1, text: 'b' },
    { value: 2, text: 'c' }
  ]"
  v-model:value="radioListValue"
></fe-radio-list>`;
const listDemoColumn = `<fe-radio-list
  :list="[
    { value: 0, text: 'a' },
    { value: 1, text: 'b' },
    { value: 2, text: 'c' }
  ]"
  layout="column"
  v-model:value="radioListValue"
></fe-radio-list>`;
const propsRadio = `  props: {
    active: { // 激活态
      type: Boolean,
      require: true,
      default: false,
    },
    value: { // 单选值
      type: [String, Number],
      require: true,
    },
    rect: { // stroke风格
      type: Boolean,
      default: false,
    },
  },`;
const propsRadioList = `  props: {
    rect: { // stroke风格
      type: Boolean,
      default: false,
    },
    value: { // 单选值
      type: [Number, String],
      require: true,
    },
    list: { // 单选列表
      type: Array,
      require: true,
      defualt: [
        { value: 0, text: 'a' },
        { value: 1, text: 'b' },
      ],
      /*
      example
      [{value:0, text: 'a'},{value:1, text: 'b'}]
      */
    },
    layout: { // 排列方式
      type: String,
      default: 'row',
      validator(layout) {
        if (layout && !['row', 'column'].includes(layout)) {
          console.error('layout的类型必须为row,column');
        }
        return true;
      },
    },
  },`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
