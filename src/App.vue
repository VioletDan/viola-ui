<template>
  <div id="app">
    <viola-switch v-model="isSwitch">开关：</viola-switch>
    <viola-button
      :type="item.type"
      :text="item.text"
      v-for="(item, index) in typeList"
      :key="index"
      :plain="item.isPlain"
      :disabled="item.isDisabled"
      :loading="item.isLoading"
      :loading-text="item.loadingText"
      :loading-type="item.loadingType"
      :button-shape="item.buttonShape"
      :icon="item.icon"
      :block="item.isBlock"
    ></viola-button>
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
        },
        {
          type: "warning",
          text: "朴素按钮1",
          isPlain: true
        },
        {
          type: "info",
          text: "朴素按钮2",
          isPlain: true,
          isDisabled: true
        },
        {
          type: "primary",
          text: "禁用状态",
          isDisabled: true
        },
        {
          type: "info",
          text: "禁用状态",
          isDisabled: true
        },
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
        },
        {
          type: "info",
          text: "方形按钮"
        },
        {
          type: "primary",
          text: "圆形按钮",
          buttonShape: "round"
        },
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
          icon: "https://img.yzcdn.cn/vant/logo.png"
        },
        {
          type: "info",
          text: "块级元素",
          isBlock:true
        }
      ]
    };
  },
  watch: {
    isSwitch: newValue => {
      console.log("开关:", newValue);
    },
    checked: newValue => {
      console.log("checked", newValue);
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
  margin-top: 60px;
  .viola-button {
    margin-top: 20px;
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
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
</style>
