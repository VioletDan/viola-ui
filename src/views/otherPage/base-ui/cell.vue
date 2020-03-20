<template>
  <div class="cellPage">
    <div class="viola-doc-demo-block">
      <h2 class="viola-doc-demo-block-title">基础用法</h2>
      <viola-cell :title="title" :value="value"></viola-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {},
  data() {
    return {
      title: "测试1",
      value: "单元格44"
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
.cellPage {
  padding: 16px 0;
  & .viola-doc-demo-block {
    width: 100%;
    box-sizing: border-box;
    & .viola-doc-demo-block-title {
      margin: 0;
      padding: 32px 16px 16px 16px;
      color: rgba(69, 90, 100, 0.6);
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      text-align: left;
    }
  }
}
</style>