<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 20:27:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Popover.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Popover 弹出
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Popover 弹出，在目标四周弹出附加内容
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li>
            <fe-popover>
              <fe-button type="primary">点击弹出</fe-button>
              <template v-slot:content>Hello</template>
            </fe-popover>
          </li>
          <li>
            <fe-popover trigger="hover">
              <fe-button type="primary">hover弹出</fe-button>
              <template v-slot:content>Hello</template>
            </fe-popover>
          </li>
        </ul>
      </div>
      <code-pan :code="baseDemo" language="html" />

      <!-- position -->
      <h2 class="article-h2">
        变化位置
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li>
            <fe-popover trigger="hover">
              <fe-button type="primary">上方</fe-button>
              <template v-slot:content>Hello</template>
            </fe-popover>
          </li>
          <li>
            <fe-popover trigger="hover" position="right">
              <fe-button type="primary">右方</fe-button>
              <template v-slot:content>Hello</template>
            </fe-popover>
          </li>
          <li>
            <fe-popover trigger="hover" position="bottom">
              <fe-button type="primary">下方</fe-button>
              <template v-slot:content>Hello</template>
            </fe-popover>
          </li>
          <li>
            <fe-popover trigger="hover" position="left">
              <fe-button type="primary">左方</fe-button>
              <template v-slot:content>Hello</template>
            </fe-popover>
          </li>
        </ul>
      </div>
      <code-pan :code="positonDemo" language="html" />

      <!-- close -->
      <h2 class="article-h2">
        更多交互
      </h2>
      <div class="demo-wrap">
        <fe-popover>
          <template v-slot:content="{ close }">
            弹出内容
            <fe-button :onClick="close" round>点我关闭</fe-button>
          </template>
          <fe-button border>点我弹出</fe-button>
        </fe-popover>
      </div>
      <code-pan :code="closeDemo" language="html" />

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
  name: 'Popover',
  data() {
    return {
      iport,
      baseDemo,
      positonDemo,
      closeDemo,
      props,
    };
  },
});

const iport = "import { Popover } from 'fedora'";
const baseDemo = `<fe-popover>
  <fe-button type="primary">点击弹出</fe-button>
  <template v-slot:content>Hello</template>
</fe-popover>

<fe-popover trigger="hover">
  <fe-button type="primary">hover弹出</fe-button>
  <template v-slot:content>Hello</template>
</fe-popover>`;
const positonDemo = `<ul class="inline-list">
  <li>
    <fe-popover trigger="hover">
      <fe-button type="primary">上方</fe-button>
      <template v-slot:content>Hello</template>
    </fe-popover>
  </li>
  <li>
    <fe-popover trigger="hover" position="right">
      <fe-button type="primary">右方</fe-button>
      <template v-slot:content>Hello</template>
    </fe-popover>
  </li>
  <li>
    <fe-popover trigger="hover" position="bottom">
      <fe-button type="primary">下方</fe-button>
      <template v-slot:content>Hello</template>
    </fe-popover>
  </li>
  <li>
    <fe-popover trigger="hover" position="left">
      <fe-button type="primary">左方</fe-button>
      <template v-slot:content>Hello</template>
    </fe-popover>
  </li>
</ul>`;
const closeDemo = `<fe-popover>
  <template v-slot:content="{ close }" >
    弹出内容
    <fe-button :onClick="close" round>点我关闭</fe-button>
  </template>
  <fe-button border>点我弹出</fe-button>
</fe-popover>`;
const props = `props: {
  position: { // 弹出的方位
    type: String,
    default: 'top',
    validator(value) {
      return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
    },
  },
  trigger: { // 触发方式
    type: String,
    default: 'click',
    validator(value) {
      return ['click', 'hover'].indexOf(value) >= 0;
    },
  },
},`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
