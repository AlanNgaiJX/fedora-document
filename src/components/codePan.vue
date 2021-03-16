<!--
 * @Author: your name
 * @Date: 2021-03-15 12:24:29
 * @LastEditTime: 2021-03-15 14:27:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/components/codePan.vue
-->
<template>
  <div class="code-pan" :class="classes">
    <div
      class="btn-expand"
      @click="swithShow"
      v-text="show ? '折起代码' : '展开代码'"
      v-if="canexpand"
    ></div>
    <transition enter-active-class="animate__animated animate_fadeIn">
      <highlightjs :language="language" :code="code" v-if="show" />
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'code-pan',
  props: {
    language: {
      type: String,
      // eslint-disable-next-line
      default: 'javascript'
    },
    code: {
      type: String,
      require,
    },
    expand: {
      type: Boolean,
      default: true,
    },
    canexpand: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    classes() {
      const a = [];
      a.push(`code-pan-${this.language}`);
      return a;
    },
  },
  methods: {
    swithShow() {
      this.show = !this.show;
    },
  },
  mounted() {
    this.show = this.expand;
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/_var.scss';
.code-pan {
  margin: 20px 0;
  padding: 20px 0;
  box-shadow: $default-box-shadow;
  position: relative;
  min-height: 0px;

  .btn-expand {
    font-size: 12px;
    position: absolute;
    right: 10px;
    top: 5px;
    color: $color-text-secondary;
    cursor: pointer;

    &:hover {
      color: $primary;
    }
  }
}
</style>
