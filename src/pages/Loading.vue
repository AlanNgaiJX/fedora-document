<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-16 00:50:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Loading.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Loading 加载中
      </h1>
      <p class="article-p">
        Loading 加载中
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li><fe-button :onClick="showLoading" type="primary">触发加载中</fe-button></li>
        </ul>
      </div>
      <code-pan :code="baseDemo" language="js" />
      <p class="article-p">
        若你正使用的是Composition API，可以使用inject来引入方法
      </p>
      <code-pan :code="injectDemo" language="js" />

      <!-- 全局配置 -->
      <h2 class="article-h2">
        全局配置
      </h2>
      <p class="article-p">
        setLoadingGlobal(props)
        方法用于设置一些全局的参数，以后每次触发showLoading都会使用那些参数，当然，你可以在showLoading的时候覆盖全局参数
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
  name: 'Loading',
  data() {
    return {
      baseDemo,
      injectDemo,
      props,
    };
  },
  methods: {
    showLoading() {
      this.$showLoading({ title: '3秒后消失' });
      setTimeout(() => {
        this.$hideLoading();
      }, 3000);
    },
  },
});
const baseDemo = `methods: {
  showLoading() {
    this.$showLoading({ title: '3秒后消失' });
    setTimeout(() => {
      this.$hideLoading();
    }, 3000);
  },
},`;

const injectDemo = `inject('setLoadingGlobal');
inject('showLoading');
inject('hideLoading');`;

const props = `  props: {
    title: {
      // 内容
      type: String,
      require: true,
    },
    mask: {
      // 是否显示遮罩
      type: Boolean,
      default: true,
    },
    maskOpacity: {
      // 遮罩透明度
      type: Number,
      default: 0,
    },
    position: {
      // 位置
      type: String,
      default: 'default',
      validate(position) {
        return ['default', 'top', 'middle', 'bottom'].includes(position);
      },
    },
    type: {
      // 图标
      type: String,
      default: 'CHASE',
      validator(type) {
        return (
          typeof type === 'string'
          && [
            'PLANE',
            'CHASE',
            'BOUNCE',
            'WAVE',
            'PULSE',
            'FLOW',
            'SWING',
            'CIRCLE',
            'CIRCLE-FADE',
            'GRID',
            'FOLD',
            'WANDER',
          ].includes(type)
        );
      },
    },
    size: {
      // 大小
      type: Number,
      default: 40, // px
    },
    speed: {
      // 旋转速度
      type: Number,
      default: 1,
      validator(value) {
        return typeof value === 'number' && value > 0;
      },
    },
  },`;
</script>

<style lang="scss">
@import '@/assets/_var.scss';
</style>
