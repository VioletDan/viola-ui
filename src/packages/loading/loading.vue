<template>
  <div :class="['loading-ui', setLoadingType]">
    <span class="span-ani">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <svg viewBox="25 25 50 50" class="button-loading__circular">
        <circle cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    </span>
    <span class="span-text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "LoadingUI",
  props: {
    //加载图标类型 可选 spinner circular
    loadingType: {
      type: [String],
      value: "spinner"
    }
  },
  data() {
    return {};
  },
  computed: {
    //设置加载类型的
    setLoadingType() {
      return `loading-ui-${this.loadingType}`;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.loading-ui {
  display: inline-block;
  vertical-align: top;
  color: inherit;
  & > span {
    position: relative;
    display: inline-block;
    color: currentColor;
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    font-size: 14px;
  }
  & > span.span-ani {
    width: 20px;
    height: 20px;
  }
  &.loading-ui-spinner > span.span-ani {
    animation: viola_rotate 0.8s linear infinite;
    animation-timing-function: steps(12);
    & > .button-loading__circular {
      display: none;
    }
    & > i {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      &::before {
        display: block;
        width: 2px;
        height: 25%;
        margin: 0 auto;
        background-color: currentColor;
        border-radius: 40%;
        content: "";
      }
    }
    & > i:nth-child(1) {
      transform: rotate(30deg);
      opacity: 1;
    }
    & > i:nth-child(2) {
      transform: rotate(60deg);
      opacity: 0.9375;
    }
    & > i:nth-child(3) {
      transform: rotate(90deg);
      opacity: 0.875;
    }
    & > i:nth-child(4) {
      transform: rotate(120deg);
      opacity: 0.8125;
    }
    & > i:nth-child(5) {
      transform: rotate(150deg);
      opacity: 0.75;
    }
    & > i:nth-child(6) {
      transform: rotate(180deg);
      opacity: 0.6875;
    }
    & > i:nth-child(7) {
      transform: rotate(210deg);
      opacity: 0.625;
    }
    & > i:nth-child(8) {
      transform: rotate(240deg);
      opacity: 0.5625;
    }
    & > i:nth-child(9) {
      transform: rotate(270deg);
      opacity: 0.5;
    }
    & > i:nth-child(10) {
      transform: rotate(300deg);
      opacity: 0.4375;
    }
    & > i:nth-child(11) {
      transform: rotate(330deg);
      opacity: 0.375;
    }
    & > i:nth-child(12) {
      transform: rotate(360deg);
      opacity: 0.3125;
    }
  }
  &.loading-ui-circular > span.span-ani {
    & {
      animation: viola_rotate 2s linear infinite;
    }
    & > i {
      display: none;
    }
    & > .button-loading__circular {
      display: block;
      width: 100%;
      height: 100%;
      & circle {
        stroke: currentColor;
        stroke-width: 3;
        stroke-linecap: round;
        animation: viola_circular 1.5s ease-in-out infinite;
      }
    }
  }
}

@-webkit-keyframes viola_rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes viola_circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}
</style>
