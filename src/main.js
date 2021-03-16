/*
 * @Author: your name
 * @Date: 2021-03-11 21:08:34
 * @LastEditTime: 2021-03-16 23:48:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/main.js
 */
import { createApp } from 'vue';
import fedora from 'fedora-ui';
import hljsPlugin from './common/hljsPlugin';
import globalComp from './common/globalComp';
import App from './App.vue';
import router from './router';

import 'highlight.js/styles/xcode.css';
import 'fedora-ui/dist/fedora.css';

createApp(App)
  .use(router)
  .use(fedora)
  .use(hljsPlugin)
  .use(globalComp)
  .mount('#app');
