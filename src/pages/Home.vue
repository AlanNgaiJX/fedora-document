<!--
 * @Author: your name
 * @Date: 2021-03-14 21:10:10
 * @LastEditTime: 2021-03-15 14:21:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/pages/Home.vue
-->
<template>
  <div id="Home">
    <nav-header />
    <div class="home-content">
      <fe-icon name="fe-fedora" class="banner-icon" />
      <h1 class="title">Fedora</h1>
      <p>[fɪˈdɔːrə]</p>
      <h2 class="side-title">基于 Vue3.0 的实用UI组件库</h2>
      <fe-button
        :icon="{ name: 'fe-go', lay: 'after' }"
        type="primary"
        class="btn-getstart"
        :onClick="
          () => {
            $router.push({ path: '/document/' });
          }
        "
        >get start</fe-button
      >
    </div>
    <div class="aside-content">
      <div class="format">
        <div class="format-title">简约</div>
        <div class="format-content">风格干净，基于 SCSS，可根据业务定制样式</div>
      </div>
      <div class="format">
        <div class="format-title">Vue 驱动</div>
        <div class="format-content">基于Vue 3.0，未来将至，趁早准备<br />（React版本正在构建）</div>
      </div>
      <div class="format">
        <div class="format-title">持续支持</div>
        <div class="format-content">自动化测试，持续更新</div>
      </div>
    </div>
    <div class="footer">
      Copyright @ 2021 Alan Ngai
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import NavHeader from '@/components/navHeader.vue';

export default defineComponent({
  name: 'Home',
  components: {
    'nav-header': NavHeader,
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
#Home {
  padding-top: 60px;

  .home-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid $border-color;

    .banner-icon {
      width: 150px;
      height: 150px;
      color: $theme-color;
      margin-top: 50px;
      margin-bottom: 20px;
    }

    .title {
      font-weight: 500;
      margin: 0 30px;
      font-size: 45px;
    }

    p {
      color: $color-text-secondary;
      margin-top: 10px;
    }

    .side-title {
      color: $theme-text;
      font-size: 30px;
      font-weight: 300;
      margin-top: 20px;
    }

    .btn-getstart {
      margin-top: 30px;
      font-size: 16px;
      margin-bottom: 100px;
    }
  }

  .aside-content {
    display: flex;
    box-sizing: border-box;
    padding: 0 100px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $border-color;
    padding-bottom: 30px;

    .format {
      margin: 20px;
      height: 150px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      min-width: 100px;

      .format-title {
        font-size: 25px;
        margin-bottom: 10px;
        height: 35px;
      }

      .format-content {
        color: $color-text-secondary;
        line-height: 30px;
        height: 35px;
        color: $theme-text;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    margin: 50px;
    color: $color-text-placeholder;
  }
}
</style>
