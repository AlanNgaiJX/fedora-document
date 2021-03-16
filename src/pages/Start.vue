<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-16 23:52:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Start.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        快速上手
      </h1>
      <p class="article-p">
        Fedora 支持 "全局" 与 "按需" 两种引入方式。
      </p>
      <h2 class="article-h2">
        全局引入
      </h2>
      <code-pan :code="globalImport" :canexpand="false" />

      <h2 class="article-h2">
        按需引入
      </h2>
      <code-pan :code="partImport" :canexpand="false" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Start',
  data() {
    return { globalImport, partImport };
  },
});
const globalImport = `  // 引入 fedora
  import fedora from 'fedora-ui';

  // 引入样式
  import 'fedora-ui/dist/fedora.css';

  // 全局使用 fedora
  createApp(App).use(fedora);`;
const partImport = `  // 引入 组件
  import { Button, Select, Modal } from 'fedora-ui';

  // 引入样式
  import 'fedora-ui/dist/fedora.css';

  // 使用组件（注意，Modal是一个插件）
  createApp(App)
    .use(Button)
    .use(Select)
    .use(Modal)
    .mount('#app');`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
