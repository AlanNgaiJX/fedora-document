<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 17:54:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Textarea.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Textarea 块输入
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Textarea 块输入，内容和功能基本跟随 Input
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap w-500">
        <fe-textarea v-model:value="textarea1" count cancelable>A textarea</fe-textarea>
      </div>
      <code-pan :code="baseDemo" language="html" />

      <!-- rowDemo -->
      <h2 class="article-h2">
        控制行数
      </h2>
      <div class="demo-wrap w-500">
        <fe-textarea v-model:value="textarea2" :rows="10" cancelable>A textarea</fe-textarea>
      </div>
      <code-pan :code="rowDemo" language="html" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性
      </h2>
      <code-pan :code="props" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Textarea',
  data() {
    return {
      textarea1: '',
      textarea2: '',
      iport,
      baseDemo,
      rowDemo,
      props,
    };
  },
});

const iport = "import { Textarea } from 'fedora';";
const baseDemo = '<fe-textarea v-model:value="textarea1" count cancelable>A textarea</fe-textarea>';
const rowDemo = '<fe-textarea v-model:value="textarea2" :rows="10" cancelable>A textarea</fe-textarea>';
const props = `  props: {
    value: { // 值
      type: String,
      require: true,
    },
    type: { // 类型
      type: String,
      default: 'text',
    },
    width: { // 宽度
      type: [String, Number],
      default: '100%',
    },
    placeholder: { // placeholder
      type: String,
      default: '',
    },
    fontSize: { // 字体大小
      type: [String, Number],
      default: '14px',
    },
    cancelable: { // 可清空
      type: Boolean,
      default: false,
    },
    validator: { // 验证器
      type: Function,
      default: () => true,
    },
    disable: { // 不可输入
      type: Boolean,
      default: false,
    },
    maxLength: { // 限制长度
      type: [Number, String],
    },
    count: { // 计数器
      type: Boolean,
      default: false,
    },
    required: { // 不可为空
      type: Boolean,
      default: false,
    },
    rows: { // 行数
      type: Number,
      default: 5,
    },
  },`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
