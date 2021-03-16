<!--
 * @Author: your name
 * @Date: 2021-03-14 23:01:20
 * @LastEditTime: 2021-03-15 12:14:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/components/sumarry.vue
-->
<template>
  <div class="summary mini-scroll">
    <fe-menu width="230" class="my-menu">
      <fe-sub-menu mark="1">
        <template v-slot:title>
          <div>介绍</div>
        </template>
        <fe-menu-item mark="a-1" @click="to('/document/intro')">简介</fe-menu-item>
        <fe-menu-item mark="a-3" @click="to('/document/contact')">贡献代码</fe-menu-item>
      </fe-sub-menu>
      <fe-sub-menu mark="2">
        <template v-slot:title>
          <div>入门</div>
        </template>
        <fe-menu-item mark="b-1" @click="to('/document/install')">安装</fe-menu-item>
        <fe-menu-item mark="b-2" @click="to('/document/start')">快速上手</fe-menu-item>
      </fe-sub-menu>
      <fe-sub-menu mark="3">
        <template v-slot:title>
          <div>组件</div>
        </template>
        <fe-menu-item mark="c-1" @click="to('/document/icon')">Icon 图标</fe-menu-item>
        <fe-menu-item mark="c-2" @click="to('/document/button')">Button 按钮</fe-menu-item>
        <fe-menu-item mark="c-3" @click="to('/document/radio')">Radio 单选</fe-menu-item>
        <fe-menu-item mark="c-4" @click="to('/document/switch')">Switch 开关</fe-menu-item>
        <fe-menu-item mark="c-5" @click="to('/document/select')">Select 下拉选择</fe-menu-item>
        <fe-menu-item mark="c-6" @click="to('/document/slider')">Slider 滑动输入</fe-menu-item>
        <fe-menu-item mark="c-7" @click="to('/document/input')">Input 输入框</fe-menu-item>
        <fe-menu-item mark="c-8" @click="to('/document/textarea')">Textarea 块输入</fe-menu-item>
        <fe-menu-item mark="c-9" @click="to('/document/menu')">Menu 菜单</fe-menu-item>
        <fe-menu-item mark="c-10" @click="to('/document/tabs')">Tabs 标签页</fe-menu-item>
        <fe-menu-item mark="c-11" @click="to('/document/popover')">Popover 弹出</fe-menu-item>
        <fe-menu-item mark="c-12" @click="to('/document/bubble')">Bubble 回收</fe-menu-item>
        <fe-menu-item mark="c-13" @click="to('/document/skeleton')">Skeleton 骨架屏</fe-menu-item>
        <fe-menu-item mark="c-14" @click="to('/document/lazyImg')">LazyImg 图片懒加载</fe-menu-item>
        <fe-menu-item mark="c-15" @click="to('/document/squareImg')">SuqareImg 方形图</fe-menu-item>
        <fe-menu-item mark="c-16" @click="to('/document/spin')">Spin 加载态</fe-menu-item>
        <fe-menu-item mark="c-17" @click="to('/document/loading')">Loading 加载中</fe-menu-item>
        <fe-menu-item mark="c-18" @click="to('/document/toast')">Toast 吐司消息</fe-menu-item>
        <!-- <fe-sub-menu mark="c-4" title="c-4" foldable>
          <fe-menu-item mark="c-4-1">c-4-1</fe-menu-item>
          <fe-menu-item mark="c-4-2">c-4-2</fe-menu-item>
          <fe-menu-item mark="c-4-3">c-4-3</fe-menu-item>
        </fe-sub-menu> -->
      </fe-sub-menu>
    </fe-menu>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'left-summary',
  methods: {
    to(path) {
      this.$router.push({ path });
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';

.summary {
  position: fixed;
  width: 250px;
  left: 0;
  top: 60px;
  bottom: 0;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  border-right: 1px solid $border-color;
  padding-bottom: 150px;

  .my-menu {
    margin-left: 10px;
    box-sizing: border-box;

    .fe-sub-menu {
    }
    .menu-big-title {
      div {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
    .fe-menu-item {
      // margin: 10px 0;
      font-size: 14px;
      height: 40px;
      display: flex;
      align-items: center;
      // background-color: red;
    }
  }
}
</style>
