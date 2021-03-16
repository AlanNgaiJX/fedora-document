<template>
  <div class="article-page">
    <h1 class="article-h1">
      简介
    </h1>
    <h2 class="article-h2">
      简介
    </h2>
    <h3 class="article-h3">
      简介
    </h3>
    <p class="article-p">
      wheels-ada UI 是一个实用的 UI 简易框架，目前提供了一些常用组件（不定期更新），适合 PC
      端和移动端使用。wheels-ada UI 是一个实用的 UI
      简易框架，目前提供了一些常用组件（不定期更新），适合 PC 端和移动端使用。wheels-ada UI
      是一个实用的 UI 简易框架，目前提供了一些常用组件（不定期更新），适合 PC 端和移动端使用。
    </p>
    <div class="article-line"></div>
    <code-pan
      language="javascript"
      code="import { createApp } from 'vue';
import fedora from '@/packages/index';
import hljsPlugin from './common/hljsPlugin';
import App from './App.vue';
import router from './router';

import 'highlight.js/styles/github.css';

const app = createApp(App);
app.use(router).use(fedora, { app }).use(hljsPlugin).mount('#app');
"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({ name: '' });
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
