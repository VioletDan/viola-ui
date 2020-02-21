<template>
  <div>
    <div class="viola-switch">
      <span class="slot"><slot></slot></span>
      <div
        :class="[
          { checked: checked },
          'switch-box switch-box-ani switch-box-aniB'
        ]"
        @click="handleChange(value)"
      >
        <span :class="[{ checked: checked }, 'switch-box-ani2']"></span>
      </div>
      <input
        type="checkbox"
        name="check"
        class="check"
        @change="handleChange"
        :true-value="activeValue"
        :false-value="inactiveValue"
        :disabled="disabled"
        :value="value"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ViolaSwitch",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: [Boolean],
      default: true
    }
  },
  data() {
    return {};
  },
  computed: {
    checked() {
      return this.value === this.activeValue;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleChange(value) {
      this.$emit("input", this.checked ? this.inactiveValue : this.activeValue);
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.viola-switch {
  width: auto;
  overflow: hidden;
  input {
    display: none;
  }
  .slot {
    height: 31px;
    width: auto;
    display: inline-block;
    line-height: 31px;
    text-align: center;
    color: #000;
    font-weight: bold;
    border: 1px solid transparent;
    float: left;
  }
  .switch-box {
    width: 52px;
    height: 31px;
    position: relative;
    border: 1px solid #dfdfdf;
    background-color: #fdfdfd;
    box-shadow: #dfdfdf 0 0 0 0 inset;
    border-radius: 20px;
    background-clip: content-box;
    display: inline-block;
    -webkit-appearance: none;
    user-select: none;
    outline: none;
    float: left;
    &.checked {
      border-color: #64bd63;
      box-shadow: #64bd63 0 0 0 16px inset;
      background-color: #64bd63;
    }
    &.switch-box-ani {
      transition: background-color ease 0.4s;
    }
    span {
      width: 29px;
      height: 29px;
      position: absolute;
      top: 0.5px;
      left: 0;
      border-radius: 20px;
      background-color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
      &.switch-box-ani2 {
        transition: left ease 0.3s;
      }
      &.checked {
        left: 21px;
      }
    }
  }
}
</style>
