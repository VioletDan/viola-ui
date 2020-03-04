<template>
  <div id="app">
    <viola-switch v-model="isSwitch">switch：</viola-switch>
    <div class="btnBox">
      <div
        class="viola-doc-demo-block"
        v-for="(itemList, index) in typeList"
        :key="index"
      >
        <h2 class="viola-doc-demo-block-title">{{ itemList.title }}</h2>
        <div class="buttonBox">
          <viola-button
            :type="item.type"
            :text="item.text"
            v-for="(item, index) in itemList.list"
            :key="index"
            :plain="item.isPlain"
            :disabled="item.isDisabled"
            :loading="item.isLoading"
            :loading-text="item.loadingText"
            :loading-type="item.loadingType"
            :button-shape="item.buttonShape"
            :icon="item.icon"
            :block="item.isBlock"
            :url="item.url"
          ></viola-button>
        </div>
      </div>
    </div>
    <viola-layout :todos="todos">
      <template v-slot:header="{ todo }">
        <h1>Here might be a page title</h1>
        {{ todo.text }}
      </template>
      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </viola-layout>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isSwitch: false,
      typeList: [
        {
          title: "按钮类型",
          list: [
            {
              type: "default",
              text: "默认按钮"
            },
            {
              type: "primary ",
              text: "主要按钮"
            },
            {
              type: "info",
              text: "信息按钮"
            },
            {
              type: "danger",
              text: "危险按钮"
            },
            {
              type: "warning",
              text: "警告按钮"
            }
          ]
        },
        {
          title: "朴素类型",
          list: [
            {
              type: "warning",
              text: "朴素按钮1",
              isPlain: true
            },
            {
              type: "info",
              text: "朴素按钮2",
              isPlain: true
            }
          ]
        },
        {
          title: "禁用状态",
          list: [
            {
              type: "primary",
              text: "禁用状态",
              isDisabled: true
            },
            {
              type: "info",
              text: "禁用状态",
              isDisabled: true
            }
          ]
        },
        {
          title: "加载状态",
          list: [
            {
              type: "primary",
              isLoading: true,
              loadingType: "circular"
            },
            {
              type: "primary",
              isLoading: true
            },
            {
              type: "info",
              isLoading: true,
              loadingText: "加载中...",
              loadingType: "circular"
            }
          ]
        },
        {
          title: "按钮形状",
          list: [
            {
              type: "info",
              text: "方形按钮"
            },
            {
              type: "primary",
              text: "圆形按钮",
              buttonShape: "round"
            }
          ]
        },
        {
          title: "图标按钮",
          list: [
            {
              type: "primary",
              text: "图标按钮",
              icon: "iconniunaishuiyin"
            },
            {
              type: "primary",
              icon: "iconju1"
            },
            {
              type: "primary",
              icon: "iconhua"
            },
            {
              type: "primary",
              icon: "iconsuan"
            },
            {
              type: "primary",
              text: "按钮",
              isPlain: true,
              icon:
                "https://avatars3.githubusercontent.com/u/22906039?s=400&v=4"
            }
          ]
        },
        {
          title: "块级元素",
          list: [
            {
              type: "info",
              text: "块级元素",
              isBlock: true
            }
          ]
        },
        {
          title: "页面导航",
          list: [
            {
              type: "default",
              text: "url跳转",
              url: "https://www.baidu.com"
            },
            {
              type: "info",
              text: "路由跳转",
              to: "www.baidu.com"
            }
          ]
        }
      ],
      todos: [
        {
          text: "123"
        },
        {
          text: "123123"
        },
        {
          text: "苹果"
        },
        {
          text: "香蕉"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  watch: {
    isSwitch: newValue => {
      console.log("开关:", newValue);
    }
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  .viola-button {
    margin-top: 20px;
  }
}
body {
  min-width: 100vw;
  margin: 0;
  overflow-x: auto;
  color: #323233;
  font-size: 16px;
  background-color: #f7f8fa;
  -webkit-font-smoothing: antialiased;
}
.viola-doc-demo-block {
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
  & > .viola-doc-demo-block-title {
    margin: 0;
    padding: 32px 16px 0 0;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    text-align: left;
  }
  & > .buttonBox {
    width: 100%;
    text-align: left;
    & .viola-button {
      display: inline-block;
      margin-right: 20px;
    }
  }
}
div.btnBox {
  > div {
    &:nth-child(7) .viola-button {
      display: block;
      margin-right: 0;
    }
  }
}
</style>
