<template>
  <div class="viola-cell-block">
    <div class="viola-cell">
      <div class="viola-cell-title">单元格</div>
      <div class="viola-cell-value">内容</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViolaCell",
  props: {},
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
}
.viola-cell::after {
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
</style>
