<template>
  <div class="mainPage">
    <div class="demo_home">
      <div class="demo_home_title">
        <img src="../assets/favicon.jpg" />
        <span>viola-ui</span>
      </div>
      <div class="demo_home_desc">
        手写vue组件,如有不足,请大家多多指教
      </div>
      <div class="demo_home_nav" v-for="(item, index) in navList" :key="index">
        <div class="demo_home_nav_title">{{ item.title }}</div>
        <div class="demo_home_nav_group">
          <router-link
            class="demo_home_nav_block"
            v-for="(itemChild, index) in item.childList"
            :key="index"
            v-bind:to="itemChild.link"
            >{{ itemChild.name }}
            <i class="iconfont iconxiangyoujiantou"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainPage",
  props: {},
  data() {
    return {
      navList: [
        {
          title: "基础组件",
          childList: [
            { link: "/BaseUI/Button", name: "Button 按钮" },
            { link: "/BaseUI/Cell", name: "Cell 单元格" },
            { link: "/BaseUI/Icon", name: "icon 图标" },
            { link: "/BaseUI/Image", name: "Image 图片" },
            { link: "/BaseUI/Layout", name: "Layout 布局" },
            { link: "/BaseUI/Style", name: "Style 内置样式" }
          ]
        },
        {
          title: "表单组件",
          childList: [
            { link: "/FormUI/Calendar", name: "Calendar 日历" },
            { link: "/FormUI/Checkbox", name: "Checkbox 复选框" },
            { link: "/FormUI/DatetimePicker", name: "DatetimePicker 时间选择" },
            { link: "/FormUI/Field", name: "Field 输入框" },
            { link: "/FormUI/Form", name: "Form 表单" },
            { link: "/FormUI/NumberKeyboard", name: "NumberKeyboard 数字键盘" },
            { link: "/FormUI/Picker", name: "Picker 选择器" },
            { link: "/FormUI/Radio", name: "Radio 单选框" },
            { link: "/FormUI/Rate", name: "Rate 评分" },
            { link: "/FormUI/Search", name: "Search 搜索" },
            { link: "/FormUI/Slider", name: "Slider 滑块" },
            { link: "/FormUI/Stepper", name: "Stepper 步进器" },
            { link: "/FormUI/Switch", name: "Switch 开关" },
            { link: "/FormUI/Uploader", name: "Uploader 文件上传" }
          ]
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.demo_home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 46px 20px 20px;
  background: #fff;
  & > .demo_home_title {
    margin: 0 0 16px;
    font-size: 32px;
    & > img {
      width: 32px;
    }
    & > span {
      margin-left: 16px;
      font-weight: 500;
      vertical-align: middle;
    }
  }
  & > .demo_home_desc {
    margin: 0 0 40px;
    color: rgba(158, 158, 158, 0.76);
    font-size: 14px;
  }
  & > .demo_home_nav {
    & > .demo_home_nav_title {
      margin: 24px 0 8px 0;
      color: rgba(158, 158, 158, 0.76);
      font-size: 14px;
    }
    & > .demo_home_nav_group {
      & .demo_home_nav_block {
        display: block;
        position: relative;
        font-size: 14px;
        line-height: 40px;
        background-color: #f7f8fa;
        border-radius: 99px;
        padding-left: 20px;
        padding-right: 20px;
        margin-bottom: 12px;
        font-weight: 500;
        color: #19191c;
        & > .iconfont {
          float: right;
        }
      }
    }
  }
}
</style>
