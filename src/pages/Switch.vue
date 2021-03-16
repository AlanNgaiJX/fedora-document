<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 16:53:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Switch.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Switch 开关
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Switch，基础的开关按钮。
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <fe-switch v-model:value="switch1"></fe-switch>
      </div>
      <code-pan :code="baseDemo" />

      <!-- innerText & format -->
      <h2 class="article-h2">
        内置文字
      </h2>
      <div class="demo-wrap">
        <fe-switch v-model:value="switch2" innerText :format="{ on: 'on', off: 'off' }"></fe-switch>
      </div>
      <code-pan :code="innerTextDemo" />

      <!-- outerText & format -->
      <h2 class="article-h2">
        外置文字
      </h2>
      <div class="demo-wrap">
        <fe-switch v-model:value="switch3" outerText :format="{ on: '开', off: '关' }" />
      </div>
      <code-pan :code="outerTextDemo" />

      <!-- disable-->
      <h2 class="article-h2">
        Disabled 不可用
      </h2>
      <div class="demo-wrap">
        <fe-switch v-model:value="switch4" disable />
      </div>
      <code-pan :code="disableDemo" />

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
// <fe-switch v-model:value="switch2" innerText :format="{ on: '开', off: '关' }" />

// {
//   data() {
//     return {
//       switch3: false,
//     };
//   }
// }
export default defineComponent({
  name: 'Switch',
  data() {
    return {
      iport,
      baseDemo,
      innerTextDemo,
      outerTextDemo,
      disableDemo,
      props,
      switch1: true,
      switch2: false,
      switch3: false,
      switch4: false,
    };
  },
});
const iport = "import { Switch } from 'fedora';";
const baseDemo = `<fe-switch v-model:value="switch1"></fe-switch>

{
  data() {
    return {
      switch1: true,
    };
  }
}`;
const innerTextDemo = `<fe-switch 
 v-model:value="switch2" 
 innerText 
 :format="{ on: 'on', off: 'off' }"
/>

{
  data() {
    return {
      switch2: false,
    };
  }
}`;
const outerTextDemo = `<fe-switch v-model:value="switch2" innerText :format="{ on: '开', off: '关' }" />

{
  data() {
    return {
      switch3: false,
    };
  }
}`;

const disableDemo = '<fe-switch v-model:value="switch4" disable></fe-switch>';

const props = `  props: {
    value: { // 值
      type: [Number, String, Boolean],
    },
    format: { // 版式
      type: Object,
      default() {
        return {
          on: true,
          off: false,
        };
      },
    },
    innerText: { // 是否内置文字
      type: Boolean,
      default: false,
    },
    outerText: { // 是否外置文字
      type: Boolean,
      default: false,
    },
    disable: { // 是否可用
      type: Boolean,
      default: false,
    },
  },`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
