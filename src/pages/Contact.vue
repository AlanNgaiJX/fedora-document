<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-16 15:34:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Contact.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <h1 class="article-h1">
        贡献代码
      </h1>
      <p class="article-p">
        感谢您的关注。Fedora
        现在是个人项目，我正在寻找志同道合的伙伴，一起维护仓库。我曾为滴滴团队的组件库cube-ui着迷，当中的一些想法让当时初学 vue
        的我受益匪浅。我汲取了其中一些营养，并想结合现在主流的ant、vite等库，努力衍生出一个更轻量、更原型（容易进行二次开发）的组件库，Fedora。
      </p>
      <h2 class="article-h2">
        仓库
      </h2>
      <div class="article-link">
        <a href="https://github.com/AlanNgaiJX/fedora/pulls" target="_blank">Pull Requests</a>
      </div>
      <div class="article-link">
        <a href="https://github.com/AlanNgaiJX/fedora/issues" target="_blank">Issues</a>
      </div>

      <h2 class="article-h2">
        联系我
      </h2>
      <p class="article-p">email：634620668@qq.com</p>
      <h2 class="article-h2">
        we-chat
      </h2>
      <p class="article-p">Id: alan18688552330 | 请备注 "Fedora"</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({ name: 'Contact' });
</script>

<style lang="scss">
@import '@/assets/_var.scss';
.article-page-wrap {

}
</style>
