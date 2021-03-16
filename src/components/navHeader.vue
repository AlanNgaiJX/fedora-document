<!--
 * @Author: your name
 * @Date: 2021-03-14 21:33:12
 * @LastEditTime: 2021-03-16 15:38:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/components/navHeader.vue
-->
<template>
  <div class="nav-header">
    <div class="left">
      <fe-icon name="fe-fedora" class="favicon" />
      <h1 class="title">Fedora</h1>
    </div>
    <div class="right">
      <a @click="()=>{$router.push('/')}">主页</a>
      <a href="https://github.com/AlanNgaiJX/fedora" target="_blank">Github<fe-icon name="fe-link" class="link-icon"/></a>
      <a href="https://github.com/AlanNgaiJX" target="_blank">作者<fe-icon name="fe-link" class="link-icon"/></a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'nav-header',
});
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';

.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid $border-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px;
  background-color: #fff;

  .right,
  .left {
    display: flex;
    align-items: center;
  }

  .favicon {
    color: $theme-color;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .title {
    font-weight: 500;
    margin: 0 30px;
    cursor: pointer;
  }

  .right {
    a {
      display: flex;
      margin-left: 30px;
      align-items: center;
      font-weight: 500;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: $theme-color;
      }
    }

    .link-icon {
      margin-left: 5px;
    }
  }
}
</style>
