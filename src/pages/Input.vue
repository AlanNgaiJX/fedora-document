<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 17:35:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Input.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Input 输入框
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Input 输入框，提供了一些自定义插槽，可进行label、validate等定制
      </p>

      <!-- base -->
      <h2 class="article-h2">
        基础使用
      </h2>
      <div class="demo-wrap w-500">
        <fe-input v-model:value="input1"></fe-input>
      </div>
      <code-pan :code="baseDemo" language="html" />

      <!-- cancleDemo -->
      <h2 class="article-h2">
        可清空
      </h2>
      <div class="demo-wrap w-500">
        <fe-input v-model:value="input2" cancelable>Username</fe-input>
      </div>
      <code-pan :code="cancleDemo" language="html" />

      <!-- pwdDemo -->
      <h2 class="article-h2">
        不同类型输入
      </h2>
      <div class="demo-wrap w-500">
        <fe-input v-model:value="input3" type="password" cancelable>Password</fe-input>
      </div>
      <code-pan :code="pwdDemo" language="html" />

      <!-- iconDemo -->
      <h2 class="article-h2">
        带有图标的
      </h2>
      <div class="demo-wrap w-500">
        <fe-input v-model:value="input4" rightIcon="fe-edit" cancelable>Edit</fe-input>
        <fe-input v-model:value="input5" leftIcon="fe-edit" cancelable>Edit</fe-input>
      </div>
      <code-pan :code="iconDemo" language="html" />

      <!-- lengthDemo -->
      <h2 class="article-h2">
        限制输入长度
      </h2>
      <div class="demo-wrap w-500">
        <fe-input v-model:value="input6" maxLength="5">MaxLength 5</fe-input>
      </div>
      <code-pan :code="lengthDemo" language="html" />

      <!-- countDemo -->
      <h2 class="article-h2">
        计数器
      </h2>
      <div class="demo-wrap w-500">
        <fe-input v-model:value="input6" maxLength="5" count>MaxLength 5 Count</fe-input>
      </div>
      <code-pan :code="countDemo" language="html" />

      <!-- validateDemo -->
      <h2 class="article-h2">
        表单验证器
      </h2>
      <div class="demo-wrap w-500">
        <fe-input
          v-model:value="input8"
          required
          :validator="
            value => {
              return /^\d+$/.test(value);
            }
          "
        >
          <template v-slot:default>
            Validator
          </template>
          <template v-slot:unvalidText>
            required and only need numbers !!
          </template>
        </fe-input>
      </div>
      <code-pan :code="validateDemo" language="html" />

      <!-- disableDemo -->
      <h2 class="article-h2">
        不可输入
      </h2>
      <div class="demo-wrap w-500">
        <fe-input v-model:value="input9" disable>Disable</fe-input>
      </div>
      <code-pan :code="disableDemo" language="html" />

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
  name: 'Input',
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      iport,
      baseDemo,
      cancleDemo,
      pwdDemo,
      iconDemo,
      lengthDemo,
      countDemo,
      validateDemo,
      disableDemo,
      props,
    };
  },
});

const iport = "import { Input } from 'fedora';";
const baseDemo = '<fe-input v-model:value="input1"></fe-input>';
const cancleDemo = '<fe-input v-model:value="input2" cancelable>Username</fe-input>';
const pwdDemo = '<fe-input v-model:value="input3" type="password" cancelable>Password</fe-input>';
const iconDemo = `<fe-input v-model:value="input4" rightIcon="fe-edit" cancelable>Edit</fe-input>
<fe-input v-model:value="input5" leftIcon="fe-edit" cancelable>Edit</fe-input>
`;
const lengthDemo = '<fe-input v-model:value="input6" maxLength="5">MaxLength 5</fe-input>';
const countDemo = '<fe-input v-model:value="input6" maxLength="5" count>MaxLength 5 Count</fe-input>';
const validateDemo = `<fe-input
  v-model:value="input8"
  required
  :validator="
    value => {
      return /^\\d+$/.test(value);
    }
  "
>
  <template v-slot:default>
    Validator
  </template>
  <template v-slot:unvalidText>
    required and only need numbers !!
  </template>
</fe-input>`;
const disableDemo = '<fe-input v-model:value="input9" disable>Disable</fe-input>';
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
    fontSize: { // 字大小
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
    leftIcon: { // 左图标
      type: String,
      default: '',
    },
    rightIcon: { // 右图标
      type: String,
      default: '',
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
  },`;
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
</style>
