<!--
 * @Author: your name
 * @Date: 2021-03-14 21:11:07
 * @LastEditTime: 2021-03-15 20:37:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/pages/Document.vue
-->
<template>
  <div id="Document">
    <nav-header />
    <left-summary />
    <div class="page-router-view mini-scroll">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import NavHeader from '@/components/navHeader.vue';
import Summary from '@/components/summary.vue';

export default defineComponent({
  name: 'Document',
  components: {
    'nav-header': NavHeader,
    'left-summary': Summary,
  },
});
</script>

<style lang="scss">
@import '@/assets/_var.scss';
#Document {
  padding-top: 60px;

  .page-router-view {
    position: fixed;
    left: 250px;
    top: 60px;
    right: 0;
    bottom: 0;
    overflow: auto;
  }

  .article-page-wrap {
    box-sizing: border-box;

    .article-page {
      max-width: 900px;
      margin: 0 auto;
      padding: 50px 30px;
      box-sizing: border-box;
      position: relative;

      .article-h1 {
        font-size: 26px;
        font-weight: bold;
      }

      .article-h2 {
        font-size: 20px;
        font-weight: bold;
        margin-top: 80px;
      }

      .article-h3 {
        font-size: 20px;
        font-weight: bold;
      }

      .article-p {
        line-height: 35px;
        padding: 20px 0;
        font-size: 14px;
        color: $color-text-paragraph;
      }

      .high-light {
        color: $theme-color;
      }

      .article-line {
        height: 1px;
        width: 100%;
        background-color: $border-color;
      }

      .article-list {
        display: block;
        padding-left: 20px;
        margin: 10px 0;

        li {
          list-style: disc outside none;
          font-size: 14px;
          padding: 5px 0;
        }
      }

      .article-link {
        margin: 10px;

        a {
          color: $primary;
        }
        color: $primary;
      }

      .demo-wrap {
        margin: 30px 0;
        position: relative;

        &.w-500{
          width: 500px;
        }
      }

      .inline-list {
        li {
          margin: 10px;
          display: inline-block;
        }
      }
    }
  }
}
</style>
