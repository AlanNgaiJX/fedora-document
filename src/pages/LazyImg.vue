<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 21:24:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/LazyImg.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        LazyImg 图片懒加载
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        基于 IntersectionObserver API 的图片懒加载组件，如果需要适配IE浏览器请自主引入 polyfill
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <ul id="lazyImgWrap" class="mini-scroll">
          <li v-for="item in imgTestList" :key="item">
            <fe-lazy-img :src="item" root="#lazyImgWrap" />
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
  name: 'LazyImg',
  data() {
    return {
      iport,
      baseDemo,
      props,
      imgTestList: [
        'https://weiliicimg9.pstatp.com/weili/sm/902486763408195718.webp',
        'https://weiliicimg6.pstatp.com/weili/sm/859237851489239068.webp',
        'https://icweiliimg1.pstatp.com/weili/sm/902407280738041883.webp',
        'https://weiliicimg1.pstatp.com/weili/sm/918167250912935995.webp',
        'https://icweiliimg9.pstatp.com/weili/sm/902637765867602006.webp',
        'https://icweiliimg6.pstatp.com/weili/sm/918001868906954866.webp',
        'https://icweiliimg9.pstatp.com/weili/sm/921656216061345836.webp',
        'https://icweiliimg9.pstatp.com/weili/sm/902453735104315419.webp',
        'https://weiliicimg1.pstatp.com/weili/sm/918200949226340409.webp',
        'https://icweiliimg6.pstatp.com/weili/sm/842591984187473920.webp',
        'https://icweiliimg1.pstatp.com/weili/sm/698713345727397892.webp',
        'https://weiliicimg9.pstatp.com/weili/sm/903534881457307698.webp',
        'https://weiliicimg9.pstatp.com/weili/sm/903210851943841838.webp',
        'https://icweiliimg6.pstatp.com/weili/sm/902300396187287577.webp',
        'https://weiliicimg6.pstatp.com/weili/sm/918774293000618066.webp',
        'https://weiliicimg6.pstatp.com/weili/sm/919768182792650805.webp',
        'https://weiliicimg6.pstatp.com/weili/sm/918366563165274133.webp',
        'https://weiliicimg6.pstatp.com/weili/sm/918364621840056330.webp',
        'https://weiliicimg1.pstatp.com/weili/sm/903752009228615688.webp',
        'https://icweiliimg1.pstatp.com/weili/sm/903252040680210452.webp',
        'https://icweiliimg6.pstatp.com/weili/sm/787156179869368387.webp',
        'https://weiliicimg1.pstatp.com/weili/sm/903191773694525578.webp',
        'https://icweiliimg1.pstatp.com/weili/sm/919784709831917573.webp',
        'https://weiliicimg9.pstatp.com/weili/sm/424128896716636174.webp',
        'https://weiliicimg1.pstatp.com/weili/sm/1018931126458384482.webp',
        'https://icweiliimg1.pstatp.com/weili/sm/903078910543921282.webp',
        'https://weiliicimg9.pstatp.com/weili/sm/919337457702404135.webp',
        'https://weiliicimg6.pstatp.com/weili/sm/455074239159336965.webp',
        'https://weiliicimg1.pstatp.com/weili/sm/289021311624675360.webp',
        'https://icweiliimg6.pstatp.com/weili/sm/906864460363464793.webp',
        'https://weiliicimg1.pstatp.com/weili/sm/57458166983700242.webp',
        'https://weiliicimg6.pstatp.com/weili/sm/773569995716165673.webp',
        'https://icweiliimg6.pstatp.com/weili/sm/902958891983175741.webp',
      ],
    };
  },
});
const iport = "import { LazyImg } from 'fedora'";
const baseDemo = `<ul id="lazyImgWrap">
  <li v-for="item in imgTestList" :key="item">
    <fe-lazy-img :src="item" root="#lazyImgWrap" />
  </li>
</ul>`;
const props = `  props: {
    src: { // 图片地址
      type: String,
      require: true,
    },
    errSrc: { // 错误图地址
      type: String,
      default: '',
    },
    alt: { // img.alt
      type: String,
      default: '',
    },
    root: { // 指定 intersection的窗口节点，请提供选择器
      type: String,
      default: '',
    },
    rootMargin: { // 窗口的margin，向窗口四周扩散或收缩
      type: String,
      default: '0px 0px 0px 0px', // 'px/%'
    },
    style: { // 图片样式
      type: Object,
      default: () => ({}),
    },
  },`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';

#lazyImgWrap {
  width: 150px;
  height: 300px;
  overflow: auto;
  position: relative;
  border: 1px solid $border-color;
  li {
    width: 100%;
    margin: 30px 0;
    img {
      width: 100%;
    }
  }
}
</style>
