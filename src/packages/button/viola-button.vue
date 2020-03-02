<template>
  <div class="viola-button clearfix">
    <div :class="[typeClass, 'button-ani']"><slot></slot></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ViolaButton",
  props: {
    type: {
      type: String,
      value: "default"
    }
  },
  data() {
    return {};
  },
  computed: {
    typeClass() {
      return `viola-button-${this.type}`;
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
.viola-button {
  // overflow: hidden;
  display: inline-block;
  margin-right: 20px;
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
}
</style>
