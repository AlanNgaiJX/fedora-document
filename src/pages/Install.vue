<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-16 11:41:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Install.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        安装
      </h1>
      <code-pan :code="npminstall" :canexpand="false"/>
      <code-pan :code="yarninstall" :canexpand="false" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Install',
  data() {
    return {
      npminstall,
      yarninstall,
    };
  },
});

const npminstall = 'npm install fedora-ui -save';
const yarninstall = 'yarn add fedora-ui';
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
