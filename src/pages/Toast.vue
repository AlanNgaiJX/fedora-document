<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-16 01:02:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Toast.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Toast 吐司消息
      </h1>
      <p class="article-p">
        Toast 吐司消息，与 Loading 一样，它是通过js触发的。
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li><fe-button :onClick="showToast" type="primary">显示</fe-button></li>
          <li><fe-button :onClick="showToast2" type="primary">滑入</fe-button></li>
          <li><fe-button :onClick="showToast3" type="primary">上方滑入</fe-button></li>
        </ul>
      </div>
      <code-pan :code="baseDemo" language="js" />
      <p class="article-p">
        注意：showToast 支持传入 html
        模板作为内容展示，但出于安全考虑（XSS攻击），需谨慎使用，并保证toast的内容非用户所提交的任何消息。
      </p>

      <p class="article-p">
        若你正使用的是Composition API，可以使用inject来引入方法
      </p>
      <code-pan :code="injectDemo" language="js" />

      <!-- 全局配置 -->
      <h2 class="article-h2">
        全局配置
      </h2>
      <p class="article-p">
        setToastGlobal(props)
        方法用于设置一些全局的参数，以后每次触发showToast都会使用那些参数，当然，你可以在showToast的时候覆盖全局参数
      </p>

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
  name: 'Toast',
  data() {
    return {
      baseDemo,
      injectDemo,
      props,
    };
  },
  methods: {
    showToast() {
      this.$showToast({ title: 'hello world' });
    },
    showToast2() {
      this.$showToast({
        title: 'hello world',
        enterAnimate: 'slideInUp',
        leaveAnimate: 'slideOutUp',
      });
    },
    showToast3() {
      this.$showToast({
        title: 'hello world',
        position: 'top',
        enterAnimate: 'slideInDown',
        leaveAnimate: 'slideOutUp',
      });
    },
  },
});
const baseDemo = `  methods: {
    showToast() {
      this.$showToast({ title: 'hello world' });
    },
    showToast2() {
      this.$showToast({
        title: 'hello world',
        enterAnimate: 'slideInUp',
        leaveAnimate: 'slideOutUp',
      });
    },
    showToast3() {
      this.$showToast({
        title: 'hello world',
        position: 'top',
        enterAnimate: 'slideInDown',
        leaveAnimate: 'slideOutUp',
      });
    },
  },`;

const injectDemo = `inject('setToastGlobal');
inject('showToast');
inject('hideToast');`;
const props = `  props: {
    title: { // 内容
      type: String,
      require: true,
    },
    icon: { // 图标
      type: String,
    },
    html: { // v-html
      type: String,
    },
    duration: { // 持续时间
      type: Number,
      default: 1.5,
    },
    mask: { // 显示遮罩
      type: Boolean,
      default: true,
    },
    destroy: {
      // 销毁实例的方法
      type: Function,
      require: true,
    },
    enterAnimate: { // 进入动画
      type: String,
      default: 'fadeIn',
      validate(animate) {
        return ['none', 'fadeIn', 'slideInDown', 'slideInUp'].includes('animate');
      },
    },
    leaveAnimate: { // 离开动画
      type: String,
      default: 'fadeOut',
      validate(animate) {
        return ['none', 'fadeOut', 'slideOutDown', 'slideOutUp'].includes(animate);
      },
    },
    animateSpeed: { // 动画速度
      type: Number,
      default: 5, // 建议3~6
    },
    position: { // 方位
      type: String,
      default: 'default',
      validate(position) {
        return ['default', 'top', 'middle', 'bottom'].includes(position);
      },
    },
    background: { // 背景
      type: String,
      default: 'rgba(187, 187, 187, 0.872)',
    },
    color: { // 颜色
      type: String,
      default: '#fff',
    },
    maxWidth: { // 最大宽度
      type: [String, Number],
      default: '30%',
    },
  },`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
