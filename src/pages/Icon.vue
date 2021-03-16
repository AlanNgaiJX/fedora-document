<!--
 * @Author: your name
 * @Date: 2021-03-15 00:52:38
 * @LastEditTime: 2021-03-15 15:43:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora-document/src/pages/Icon.vue
-->
<template>
  <div class="article-page-wrap">
    <div class="article-page">
      <!-- sum -->
      <h1 class="article-h1">
        Icon 图标
      </h1>
      <code-pan :code="iport" :canexpand="false" />
      <p class="article-p">
        Icon，使用 svg 文件制作图标，已引入了以下基础图标，开箱即用。
      </p>

      <!-- icon-list -->
      <h2 class="article-h2">
        基础图标
      </h2>
      <div class="icon-list-wrap">
        <p>（点击图标可复制标签）</p>
        <br/>
        <ul class="grid-icons">
          <li v-for="item in iconList" :key="item" @click="copyIcon(item)">
            <div class="icon-wrap">
              <fe-icon :name="item" :className="'icon-item'" />
            </div>
            <span class="icon-name">{{ item }}</span>
          </li>
        </ul>
        <input
          type="text"
          v-show="true"
          ref="iconInput"
          :style="{
            opacity: 0
          }"
        />
      </div>

      <!-- icon-base -->
      <h2 class="article-h2">
        用法
      </h2>
      <br />
      <div>
        <fe-icon name="fe-search" className="icon-item" size="25" color="#000" />
      </div>
      <code-pan :code="iconBase" language="html" />

      <!-- props -->
      <h2 class="article-h2">
        Props 属性
      </h2>
      <code-pan :code="props" />
      <h2 class="article-h2">
        定制
      </h2>
      <p class="article-p">
        基础图标太少？尝试使用以下方案，引入您的svg图标并使用。
      </p>
      <h2 class="article-h2">
        方案一：使用iconfont.js
      </h2>
      <p class="article-p">
        1. 前往<a href="https://www.iconfont.cn/">iconfont</a>，添加图标到项目<br />
        2. 选择Symbol模式，下载图标包到本地。<br />
        3. 从图标包中找到iconfont.js，引入到项目中。<br />
        4. 图标的symbol名，“icon-xx-xxx”，将xx-xxx作为组件的name即可。<br />
      </p>
      <h2 class="article-h2">
        方案二：使用 webpack + svg-sprite-loader
      </h2>
      <p class="article-p">
        1. 创建@/src/assets/icon/svgIcon文件夹，把所需的svg文件都放这。<br />
        2. 配置vue.config.js，svg-sprite-loader将用于处理并引入.svg文件。<br />
      </p>
      <code-pan :code="configSVG" />
      <p class="article-p">
        3. 在 main.js 中引入整个svgIcon文件夹。
      </p>
      <code-pan :code="configSVG2" />
      <h2 class="article-h2">
        总结一下两种方案
      </h2>
      <p class="article-p">
        1.
        方案一适合小项目、团队合作要求不高的场景。开发过程中是在iconfont上不断更新图标列表，然后替换项目中的iconfont.js，
        但在提交代码的过程中，无法很好地追踪到哪个队友新增了哪个icon，如果协同开发，你的队友添加的图标也需要整合到你的本地仓库呢。<br />
        2.
        方案二除了配置有一丢丢繁琐，但恰好能解决了以上的痛点，适合大型项目多人合作场景，强力推荐。
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  data() {
    return {
      iconList: [
        'fe-search',
        'fe-edit',
        'fe-link',
        'fe-setting',
        'fe-upload',
        'fe-download',
        'fe-list',
        'fe-stroke-check',
        'fe-stroke-close',
        'fe-fill-check',
        'fe-stroke-info',
        'fe-up',
        'fe-left',
        'fe-down',
        'fe-right',
        'fe-left-triangle',
        'fe-right-triangle',
        'fe-up-triangle',
        'fe-down-triangle',
        'fe-go',
        'fe-check',
        'fe-close',
      ],
      iport,
      iconBase,
      props,
      configSVG,
      configSVG2,
    };
  },
  methods: {
    copyIcon(name) {
      const input = this.$refs.iconInput;
      input.value = `<fe-icon name="${name}" />`;
      this.$nextTick(() => {
        input.select();
        document.execCommand('copy');
        this.$showToast({ title: '已复制' });
      });
    },
  },
});

const iport = "import { Icon } from 'fedora';";
const iconBase = `<fe-icon
  name="fe-search"
  className="icon-item"
  size="25"
  color="#000"
/>`;
const props = `  props: {
    name: { // 图标名，如 fe-search
      type: String,
      required: true,
    },
    className: { // 自定义类名
      type: String,
      default: '',
    },
    color: { // 图标颜色
      type: String,
    },
    size: {
      // 图标大小，宽=高
      type: [Number, String],
    },
  },`;
const configSVG = `chainWebpack: (config) => {
    // 解析svg文件，该插件会自动将@/src/assets/icon/svgIcon下的svg文件,整合并注入到document中
    config.module
        .rule("svg")
        .exclude.add(path.resolve("src/assets/images/icon/svgIcon")) // url-loader不处理
        .end();
    config.module
        .rule("icon")
        .test(/\\.svg$/)
        .include.add(path.resolve("src/assets/images/icon/svgIcon"))
        .end()
        .use("svg-sprite-loader")
        .loader("svg-sprite-loader")
        .options({
            symbolId: "icon-[name]",
        })
        .end();
},`;

const configSVG2 = `import { Icon } from 'fedora';
Icon.useIcons("@/src/assets/icon/svgIcon");`;
</script>

<style lang="scss">
@import '@/assets/_var.scss';
.icon-list-wrap {
  margin-top: 20px;

  .grid-icons {
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(5, 20%);

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid #eee;
      cursor: pointer;

      .icon-wrap {
        .icon-item {
          width: 25px;
          height: 25px;
        }
      }
      .icon-name {
        font-size: 12px;
        margin-top: 8px;
      }
    }
  }
}
</style>
