<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-16 00:20:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Spin.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Spin 加载动态
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Spin 加载动态，基于css动画的一套动效图标。
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="spin-list-wrap">
        <p>（点击图标可复制标签）</p>
        <br />
        <ul class="grid-icons">
          <li v-for="item in spinList" :key="item" @click="copyIcon(item)">
            <div class="icon-wrap">
              <fe-spin :type="item" />
            </div>
            <span class="icon-name">{{ item }}</span>
          </li>
        </ul>
        <input
          type="text"
          v-show="true"
          ref="iconInput"
          :style="{
            opacity: 0
          }"
        />
      </div>

      <!-- icon-base -->
      <h2 class="article-h2">
        用法
      </h2>
      <br />
      <div>
        <fe-spin type="SWING" />
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
  name: 'Spin',
  data() {
    return {
      spinList: [
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
      ],
      iport,
      baseDemo,
      props,
    };
  },
  methods: {
    copyIcon(name) {
      const input = this.$refs.iconInput;
      input.value = `<fe-spin type="${name}" />`;
      this.$nextTick(() => {
        input.select();
        document.execCommand('copy');
        this.$showToast({ title: '已复制' });
      });
    },
  },
});
const iport = "import { Spin } from 'fedora'";
const baseDemo = '<fe-spin type="SWING" />';
const props = `  props: {
    type: { // 类型
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
    size: { // 大小
      type: Number,
      default: 40, // px
    },
    speed: { // 旋转速度
      type: Number,
      default: 1,
      validator(value) {
        return typeof value === 'number' && value > 0;
      },
    },
  },`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';

.spin-list-wrap {
  margin-top: 20px;

  .grid-icons {
    width: 500px;
    height: 400px;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(3, 25%);

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid #eee;
      cursor: pointer;

      .icon-wrap {
        .icon-item {
          width: 25px;
          height: 25px;
        }
      }
      .icon-name {
        font-size: 12px;
        margin-top: 8px;
      }
    }
  }
}
</style>
