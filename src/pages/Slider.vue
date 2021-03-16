<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 17:04:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Slider.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Slider 滑动输入
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Slider 滑动输入组件
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <div>{{ sliderVal1 }}</div>
        <fe-slider v-model:value="sliderVal1"></fe-slider>
      </div>
      <code-pan :code="baseDemo" language="html" />

      <!-- toFixed -->
      <h2 class="article-h2">
        设置精度
      </h2>
      <div class="demo-wrap">
        <div>{{ sliderVal2 }}</div>
        <fe-slider v-model:value="sliderVal2" :toFixed="1"></fe-slider>
      </div>
      <code-pan :code="fixedDemo" language="html" />

      <!-- disable -->
      <h2 class="article-h2">
        disable
      </h2>
      <div class="demo-wrap">
        <fe-slider v-model:value="sliderVal3" disable></fe-slider>
      </div>
      <code-pan :code="disableDemo" language="html" />

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
  name: 'Slider',
  data() {
    return {
      iport,
      baseDemo,
      fixedDemo,
      disableDemo,
      props,
      sliderVal1: 0.3,
      sliderVal2: 0.4,
      sliderVal3: 0.5,
    };
  },
});

const iport = "import { Slider } from 'fedora';";
const baseDemo = '<fe-slider v-model:value="sliderVal1"></fe-slider>';
const fixedDemo = '<fe-slider v-model:value="sliderVal2" :toFixed="1"></fe-slider>';
const disableDemo = '<fe-slider v-model:value="sliderVal3" disable></fe-slider>';
const props = `  props: {
    value: { // 值
      type: Number,
      required: true,
    },
    toFixed: { // 精度到小数点几位
      type: Number,
      default: 3,
    },
    disable: { // 不可操作
      type: Boolean,
      default: false,
    },
  },`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
