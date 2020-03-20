<template>
  <div class="viola-cell-block">
    <div class="viola-cell">
      <div class="viola-cell-title">
        <span>{{ title }}</span>
        <div class="viola-cell-title-des">
          描述信息
        </div>
      </div>
      <div class="viola-cell-value">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViolaCell",
  props: {
    title: {
      default: "单元格"
    },
    value: {
      default: "内容"
    }
  },
  data() {
    return {};
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
.viola-cell {
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  & .viola-cell-title{
    flex: 1;
    & .viola-cell-title-des{
      font-size: 12px;
      color: #969799;
    }
  }
  & .viola-cell-value{
    color: #969799;
  }
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #ebedf0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
</style>
