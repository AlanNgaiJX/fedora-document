/*
 * @Author: your name
 * @Date: 2021-03-15 12:30:59
 * @LastEditTime: 2021-03-15 12:31:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/common/globalComp.js
 */
import CodePan from '@/components/codePan.vue';

export default {
  install(Vue) {
    Vue.component(CodePan.name, CodePan);
  },
};
