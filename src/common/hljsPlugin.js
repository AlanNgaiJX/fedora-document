/* eslint-disable */
/*
 * @Author: your name
 * @Date: 2021-03-15 12:02:30
 * @LastEditTime: 2021-03-17 00:21:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/common/hljsPlugin.js
 */
import { defineComponent, h } from 'vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('scss', scss);


/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// @ts-nocheck

function hasValueOrEmptyAttribute(value) {
  return Boolean(value || value === '');
}

const Component = defineComponent({
  props: ['language', 'code', 'autodetect'],
  data() {
    return {
      detectedLanguage: '',
      unknownLanguage: false
    };
  },
  computed: {
    className() {
      if (this.unknownLanguage) return '';

      return `hljs ${this.detectedLanguage}`;
    },
    highlighted() {
      // no idea what language to use, return raw code
      if (!this.autoDetect && !hljs.getLanguage(this.language)) {
        console.warn(`The language "${this.language}" you specified could not be found.`);
        this.unknownLanguage = true;
        return escapeHTML(this.code);
      }

      let result = {};
      if (this.autoDetect) {
        result = hljs.highlightAuto(this.code);
        this.detectedLanguage = result.language;
      } else {
        result = hljs.highlight(this.language, this.code, this.ignoreIllegals);
        this.detectedLanguage = this.language;
      }
      return result.value;
    },
    autoDetect() {
      return !this.language || hasValueOrEmptyAttribute(this.autodetect);
    },
    ignoreIllegals() {
      return true;
    }
  },
  // this avoids needing to use a whole Vue compilation pipeline just
  // to build Highlight.js
  render() {
    return h('pre', {}, [
      h('code', {
        class: [this.className],
        innerHTML: this.highlighted
      })
    ]);
  }
  // template: `<pre><code :class="className" v-html="highlighted"></code></pre>`
});

export default {
  install(Vue) {
    Vue.component('highlightjs', Component);
  }
};
