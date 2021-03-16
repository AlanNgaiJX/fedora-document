<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 20:43:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Bubble.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Bubble 回收
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Bubble 回收，将内容回收到指定位置，这是一个动画组件。往往是为了向用户强调内容的来源位置。
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <fe-button
          id="bubble-target"
          :onClick="
            () => {
              show = !show;
            }
          "
          type="primary"
          >点我回收</fe-button
        >
        <fe-bubble :visable="show" relTo="#bubble-target">
          <div class="bubble-content">Hello my friend !!!</div>
        </fe-bubble>
      </div>
      <code-pan :code="baseDemo" language="html" />

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
  name: 'Bubble',
  data() {
    return {
      show: true,
      iport,
      baseDemo,
      props,
    };
  },
});

const iport = "import { Bubble } from 'fedora'";
const baseDemo = `<fe-button
  id="bubble-target"
  :onClick="
    () => {
      show = !show;
    }
  "
  type="primary"
  >点我回收</fe-button
>
<fe-bubble :visable="show" relTo="#bubble-target">
  <div class="bubble-content">Hello my friend !!!</div>
</fe-bubble>`;
const props = `props: {
  visable: {
    // bubble内容是否可见，不可见时触发动画
    type: Boolean,
    require: true,
  },
  relTo: {
    // 一个选择器，回收到哪个元素
    type: String,
    require: true,
  },
  animateDuration: {
    // 动画持续时间
    type: Number,
    default: 1,
  },
},`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
.bubble-content {
  display: inline-block;
  padding: 10px;
  background-color: #eee;
  box-shadow: $default-box-shadow;
}
#bubble-target {
  margin-top: 50px;
  margin-right: 150px;
}
</style>
