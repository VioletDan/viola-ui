<template>
  <div class="viola-button clearfix">
    <span class="slot"><slot></slot></span>
    <div class="button-ani">{{type}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ViolaButton",
  props: {
    type:{
      type:String,
      value:'default'
    }
  },
  data() {
    return {
      toParent: "toParent",
      arrList: [
        {
          name: 4,
          age: 5,
          fn: () => {
            console.log(5555);
          },
          test: undefined,
          list: {
            name2: 6666,
            fn: () => {
              console.log(888888);
            }
          }
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {
  },
  watch: {},
  methods: {
  },
  components: {}
};
</script>

<style scoped lang="scss">
.viola-button {
  // overflow: hidden;
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
  .button-ani {
    width: 80px;
    height: 31px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
    line-height: 31px;
    color: #fff;
    border-color: #64bd63;
    box-shadow: #64bd63 0 0 0 16px inset;
    float: left;
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
}
</style>
