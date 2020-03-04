<template>
  <div class="viola-button clearfix">
    <span> <slot></slot></span>
    <button
      :class="[typeClass, 'button-ani']"
      :disabled="disabled"
      @click="btnClick"
    >
      <span class="iconFont viola-button-icon" v-if="!loading">
        <i :class="['iconfont', icon]" v-if="!setIcon"></i>
        <img class="viola-button-icon-img" :src="icon" v-else />
      </span>
      <span class="button_text" v-if="!loading">{{ text }}</span>
      <LoadingUI v-else :loading-type="setLoadingType">{{
        loadingText
      }}</LoadingUI>

      <!-- <transition name="fade">
        <p v-if="show">6666</p>
      </transition> -->
    </button>
  </div>
</template>

<script>
import axios from "axios";
import LoadingUI from "../loading/index";
export default {
  name: "ViolaButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    text: {
      type: [String, Number],
      default: ""
    },
    //朴素按钮
    plain: {
      type: [Boolean],
      default: false
    },
    //是否禁用
    disabled: {
      type: [Boolean],
      default: false
    },
    //是否显示为加载状态
    loading: {
      type: [Boolean],
      default: false
    },
    //加载文字
    loadingText: {
      default: ""
    },
    //加载图标类型 可选 spinner circular
    loadingType: {
      type: [String],
      default: "spinner"
    },
    //按钮形状 可选 square(方形) round(圆形)
    buttonShape: {
      type: [String],
      default: "square"
    },
    //图标icon
    icon: {
      type: [String]
    },
    //block 是否是块级元素
    block: {
      type: Boolean,
      default: false
    },
    //url 导航跳转的链接
    url: {
      type: [String],
      default: ""
    }
  },
  data() {
    return {
      show: true
    };
  },
  computed: {
    typeClass() {
      let _type = `viola-button-${this.type}`;
      let _plain = this.plain ? `viola-button-plain` : "";
      let _disabled = this.disabled ? `viola-button-disabled` : "";
      let _loading = this.loading ? `viola-button-loading` : "";
      let _buttonShape = this.buttonShape
        ? `viola-button-${this.buttonShape}`
        : "viola-button-square";
      let _block = this.block ? `viola-button-block` : "";
      return `${_type} ${_plain} ${_disabled} ${_loading} ${_buttonShape} ${_block}`;
    },
    //设置加载类型的默认值
    setLoadingType() {
      return this.loadingType || "spinner";
    },
    //判断用户传入的是图标字符还是链接
    setIcon() {
      return this.CheckUrl(this.icon);
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    //检查图片链接是否正确
    CheckUrl(str) {
      var RegUrl = new RegExp();
      RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");
      if (!RegUrl.test(str)) {
        return false;
      }
      return true;
    },
    //点击事件
    btnClick(e) {
      // this.show = !this.show;      
      if (this.url) {
        window.location.href = this.url;
      }
    }
  },
  components: {
    LoadingUI
  }
};
</script>

<style scoped lang="scss">
button {
  border: 0;
  background-color: transparent;
  outline: none;
}
.viola-button {
  // overflow: hidden;
  // display: inline-block;
  // margin-right: 20px;
  .slot {
    height: 31px;
    width: auto;
    line-height: 31px;
    text-align: center;
    color: #000;
    font-weight: bold;
    border: 1px solid transparent;
    display: block;
    margin-right: 15px;
    float: left;
  }
  .button-ani,
  .viola-button-default {
    padding: 0 15px;
    height: 44px;
    font-size: 14px;
    line-height: 42px;
    text-align: center;
    display: inline-block;
    border-radius: 2px;
    background-color: #fff;
    border: 1px solid #ebedf0;
    cursor: pointer;
    & .button_text {
      vertical-align: middle;
    }
  }
  &.clearfix:after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }
  &.clearfix {
    zoom: 1;
  }
  .viola-button-primary {
    color: #fff;
    background-color: #07c160;
    border: 1px solid #07c160;
  }
  .viola-button-info {
    color: #fff;
    background-color: #1989fa;
    border: 1px solid #1989fa;
  }
  .viola-button-danger {
    color: #fff;
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
  }
  .viola-button-warning {
    color: #fff;
    background-color: #ff976a;
    border: 1px solid #ff976a;
  }
  // viola-button-plai
  .viola-button-primary.viola-button-plain {
    color: #07c160;
    background-color: #fff;
    border: 1px solid #07c160;
  }
  .viola-button-info.viola-button-plain {
    color: #1989fa;
    background-color: #fff;
    border: 1px solid #1989fa;
  }
  .viola-button-danger.viola-button-plain {
    color: #ee0a24;
    background-color: #fff;
    border: 1px solid #ee0a24;
  }
  .viola-button-warning.viola-button-plain {
    color: #ff976a;
    background-color: #fff;
    border: 1px solid #ff976a;
  }
  .viola-button-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  .viola-button-round {
    border-radius: 999px;
  }
  .viola-button-icon {
    vertical-align: middle;
    line-height: inherit;
    & .viola-button-icon-img {
      width: 1em;
      height: 1em;
      object-fit: contain;
    }
  }
  .viola-button-block {
    width: 100%;
    display: block;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
