<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-16 00:05:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/SquareImg.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        SquareImg 方形图
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        SquareImg 方形图，基于 object-fit 纯CSS实现，在IE下会切换js实现以兼容
      </p>

      <!-- 原图 -->
      <h2 class="article-h2">
        例图
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li>
            <img
              class="test-img"
              src="https://weiliicimg1.pstatp.com/weili/sm/855155794310856747.webp"
              alt=""
            />
          </li>
          <li>
            <img
              class="test-img"
              src="https://weiliicimg6.pstatp.com/weili/sm/919768182792650805.webp"
              alt=""
            />
          </li>
        </ul>
      </div>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <ul class="inline-list">
          <li>
            <fe-square-img
              size="100"
              objectFit="none"
              src="https://weiliicimg1.pstatp.com/weili/sm/855155794310856747.webp"
            />
            none
          </li>
          <li>
            <fe-square-img
              size="100"
              src="https://weiliicimg1.pstatp.com/weili/sm/855155794310856747.webp"
            />
            cover
          </li>
          <li>
            <fe-square-img
              size="100"
              objectFit="contain"
              backgroundColor="#eee"
              src="https://weiliicimg1.pstatp.com/weili/sm/855155794310856747.webp"
            />
            contain
          </li>
          <li>
            <fe-square-img
              size="100"
              objectFit="fill"
              backgroundColor="#eee"
              src="https://weiliicimg1.pstatp.com/weili/sm/855155794310856747.webp"
            />
            fill
          </li>
          <li>
            <fe-square-img
              size="100"
              objectFit="scale-down"
              backgroundColor="#eee"
              src="https://weiliicimg1.pstatp.com/weili/sm/855155794310856747.webp"
            />
            scale-down
          </li>
        </ul>
        <ul class="inline-list">
          <li>
            <fe-square-img
              size="100"
              objectFit="none"
              src="https://weiliicimg6.pstatp.com/weili/sm/919768182792650805.webp"
            />
            none
          </li>
          <li>
            <fe-square-img
              size="100"
              src="https://weiliicimg6.pstatp.com/weili/sm/919768182792650805.webp"
            />
            cover
          </li>
          <li>
            <fe-square-img
              size="100"
              objectFit="contain"
              backgroundColor="#eee"
              src="https://weiliicimg6.pstatp.com/weili/sm/919768182792650805.webp"
            />
            contain
          </li>
          <li>
            <fe-square-img
              size="100"
              objectFit="fill"
              backgroundColor="#eee"
              src="https://weiliicimg6.pstatp.com/weili/sm/919768182792650805.webp"
            />
            fill
          </li>
          <li>
            <fe-square-img
              size="100"
              objectFit="scale-down"
              backgroundColor="#eee"
              src="https://weiliicimg6.pstatp.com/weili/sm/919768182792650805.webp"
            />
            scale-down
          </li>
        </ul>
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
  name: 'SquareImg',
  data() {
    return {
      iport,
      baseDemo,
      props,
    };
  },
});

const iport = "import { SquareImg} from 'fedora'";
const baseDemo = `<ul class="inline-list">
  <li>
    <fe-square-img
      size="100"
      objectFit="none"
      src="https://weiliicimg1.pstatp.com/weili/sm/855155794310856747.webp"
    />
    none
  </li>
  <li>
    <fe-square-img
      size="100"
      src="https://weiliicimg1.pstatp.com/weili/sm/855155794310856747.webp"
    />
    cover
  </li>
  <li>
    <fe-square-img
      size="100"
      objectFit="contain"
      backgroundColor="#eee"
      src="https://weiliicimg1.pstatp.com/weili/sm/855155794310856747.webp"
    />
    contain
  </li>
  <li>
    <fe-square-img
      size="100"
      objectFit="fill"
      backgroundColor="#eee"
      src="https://weiliicimg1.pstatp.com/weili/sm/855155794310856747.webp"
    />
    fill
  </li>
  <li>
    <fe-square-img
      size="100"
      objectFit="scale-down"
      backgroundColor="#eee"
      src="https://weiliicimg1.pstatp.com/weili/sm/855155794310856747.webp"
    />
    scale-down
  </li>
</ul>`;
const props = `  props: {
    borderRadius: { // 圆角
      type: [String, Number],
      default: 0,
    },
    backgroundColor: { // 背景色
      type: String,
      default: '#fff',
    },
    src: { // 图片地址
      type: String,
      require: true,
    },
    size: { // 大小
      type: [String, Number],
      default: '100%',
    },
    alt: { // alt
      type: String,
      default: '',
    },
    objectFit: { // 排版模式
      type: String,
      default: 'cover',
      validator: (objectFit) => ['none', 'fill', 'contain', 'cover', 'none', 'scale-down'].includes(objectFit),
    },
    lazyLoad: { // 懒加载
      type: Boolean,
      default: false,
    },
  }`;
</script>

<style lang="scss">
@import '@/assets/_var.scss';

.test-img {
  width: 200px;
  height: auto;
}
</style>
