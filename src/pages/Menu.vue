<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 18:03:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Menu.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Menu 菜单
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Menu 菜单，插槽式设计，提供折叠功能
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap w-500">
        <fe-menu width="300">
          <fe-sub-menu mark="1">
            <template v-slot:title>
              <div>title A</div>
            </template>
            <fe-menu-item mark="a-1">a-1</fe-menu-item>
            <fe-menu-item mark="a-2">a-2</fe-menu-item>
            <fe-menu-item mark="a-3">a-3</fe-menu-item>
          </fe-sub-menu>
          <fe-sub-menu mark="2">
            <template v-slot:title>
              <div>title B</div>
            </template>
            <fe-menu-item mark="b-1">b-1</fe-menu-item>
            <fe-menu-item mark="b-2">b-2</fe-menu-item>
            <fe-menu-item mark="b-3">b-3</fe-menu-item>
          </fe-sub-menu>
          <fe-sub-menu mark="3" foldable>
            <template v-slot:title>
              <div>title C</div>
            </template>
            <fe-menu-item mark="c-1">c-1</fe-menu-item>
            <fe-menu-item mark="c-2">c-2</fe-menu-item>
            <fe-menu-item mark="c-3">c-3</fe-menu-item>
            <fe-sub-menu mark="c-4" title="c-4" foldable>
              <fe-menu-item mark="c-4-1">c-4-1</fe-menu-item>
              <fe-menu-item mark="c-4-2">c-4-2</fe-menu-item>
              <fe-menu-item mark="c-4-3">c-4-3</fe-menu-item>
            </fe-sub-menu>
            <fe-menu-item mark="c-5">c-5</fe-menu-item>
          </fe-sub-menu>
        </fe-menu>
      </div>
      <code-pan :code="baseDemo" language="html" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性 Menu
      </h2>
      <code-pan :code="menuProps" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性 SubMenu
      </h2>
      <code-pan :code="subMenuProps" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性 MenuItem
      </h2>
      <code-pan :code="menuItemProps" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu',
  data() {
    return {
      iport,
      baseDemo,
      menuProps,
      subMenuProps,
      menuItemProps,
    };
  },
});
const iport = "import { Menu,SubMenu,MenuItem  } from 'fedora';";
const baseDemo = `<fe-menu width="300">
  <fe-sub-menu mark="1">
    <template v-slot:title>
      <div>title A</div>
    </template>
    <fe-menu-item mark="a-1">a-1</fe-menu-item>
    <fe-menu-item mark="a-2">a-2</fe-menu-item>
    <fe-menu-item mark="a-3">a-3</fe-menu-item>
  </fe-sub-menu>
  <fe-sub-menu mark="2">
    <template v-slot:title>
      <div>title B</div>
    </template>
    <fe-menu-item mark="b-1">b-1</fe-menu-item>
    <fe-menu-item mark="b-2">b-2</fe-menu-item>
    <fe-menu-item mark="b-3">b-3</fe-menu-item>
  </fe-sub-menu>
  <fe-sub-menu mark="3" foldable>
    <template v-slot:title>
      <div>title C</div>
    </template>
    <fe-menu-item mark="c-1">c-1</fe-menu-item>
    <fe-menu-item mark="c-2">c-2</fe-menu-item>
    <fe-menu-item mark="c-3">c-3</fe-menu-item>
    <fe-sub-menu mark="c-4" title="c-4" foldable>
      <fe-menu-item mark="c-4-1">c-4-1</fe-menu-item>
      <fe-menu-item mark="c-4-2">c-4-2</fe-menu-item>
      <fe-menu-item mark="c-4-3">c-4-3</fe-menu-item>
    </fe-sub-menu>
    <fe-menu-item mark="c-5">c-5</fe-menu-item>
  </fe-sub-menu>
</fe-menu>`;
const menuProps = `  props: {
    activeStyleLayer: { // active样式最高应用到那一层菜单，-1为 unlimit
      type: Number,
      default: -1,
    },
    width: { // 菜单宽度
      type: [Number, String],
      default: '100%',
    },
  },`;
const subMenuProps = `  props: {
    title: { // 标题
      type: String,
      default: '',
    },
    mark: { // 标记
      type: String,
      require: true,
    },
    foldable: { // 是否可折叠
      type: Boolean,
      default: false,
    },
  },`;
const menuItemProps = `  props: {
    mark: {// 唯一标记
      type: String,
      require: true,
    },
  },`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
