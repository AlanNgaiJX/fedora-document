<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 21:12:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Skeleton.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Skeleton 骨架屏
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Skeleton 骨架屏，该组件还包含一个最小单元组件 SkeletonItem，它是一个未指定宽高的动画
        block，可进一步用于骨架屏定制。
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap">
        <fe-switch v-model:value="isLoading"></fe-switch>
        <div class="paragraph-wrap">
          <fe-skeleton :loading="isLoading">
            <div>
              <h1>Hello world</h1>
              <h2>hello fedora...</h2>
            </div>
          </fe-skeleton>
        </div>
      </div>
      <code-pan :code="baseDemo" language="html" />

      <!-- base -->
      <h2 class="article-h2">
        定制
      </h2>
      <div class="demo-wrap">
        <div class="mySkeleton">
          <fe-skeleton-item class="b1" />
          <fe-skeleton-item class="t1" />
          <fe-skeleton-item class="p" />
          <fe-skeleton-item class="p" />
          <fe-skeleton-item class="p" />
        </div>
      </div>
      <code-pan :code="customDemo" language="html" />

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
  name: 'Skeleton',
  data() {
    return {
      iport,
      props,
      baseDemo,
      customDemo,
      isLoading: true,
    };
  },
});

const iport = "import { Skeleton, SkeletonItem } from 'fedora'";
const props = `  props: {
    loading: { // 加载状态
      type: Boolean,
      default: true,
    },
    avatar: { // 是否含有头像框
      type: Boolean,
      default: true,
    },
    rows: { // 正文内容多少行
      type: Number,
      default: 4,
    },
  },`;
const baseDemo = `<fe-switch v-model:value="isLoading"></fe-switch>
<div class="paragraph-wrap">
  <fe-skeleton :loading="isLoading">
    <div>
      <h1>Hello world</h1>
      <h2>hello fedora...</h2>
    </div>
  </fe-skeleton>
</div>`;
const customDemo = `<div class="mySkeleton">
  <fe-skeleton-item class="b1" />
  <fe-skeleton-item class="t1" />
  <fe-skeleton-item class="p" />
  <fe-skeleton-item class="p" />
  <fe-skeleton-item class="p" />
</div>

.mySkeleton {
  width: 100px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .b1 {
    height: 50px;
  }
  .t1 {
    height: 12px;
    width: 40%;
  }
  .p {
    height: 5px;
  }
}
`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
.paragraph-wrap {
  width: 500px;
  height: 100px;
  position: relative;
}

.mySkeleton {
  width: 100px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .b1 {
    height: 50px;
  }
  .t1 {
    height: 12px;
    width: 40%;
  }
  .p {
    height: 5px;
  }
}
</style>
