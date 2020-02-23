<template>
  <div class="viola-button clearfix">
    <span class="slot"><slot></slot></span>
    <div class="button-ani" @click="btnClick">按钮</div>
    <div>{{ toChild }}</div>
  </div>
</template>

<script>
export default {
  name: "ViolaButton",
  props: {
    toChild: {
      type: [String],
      value: "I am a child"
    }
  },
  data() {
    return {
      toParent: "toParent"
    };
  },
  computed: {},
  created() {},
  mounted() {
    // this.init(1)()
    console.log(this.fnBubbleArr());
    console.log(this.fnSelectArr());
    console.log(this.shuffle([3, 5, 1, 9, 4, 2, 1, 5]));
    //获取渲染后的宽高
    console.log(
      window.getComputedStyle(document.getElementsByClassName("button-ani")[0])
        .height
    );
  },
  watch: {},
  methods: {
    //父子组件传值
    btnClick() {
      this.$emit("event", this.toParent);
    },
    //测试闭包
    init(n) {
      let aaa = 999;
      return () => {
        console.log(n + aaa);
      };
    },
    //冒泡排序
    fnBubbleArr() {
      let array = [3, 5, 1, 9, 4, 2];
      let temp;
      /* 外循环为排序趟数，len个数进行len-1趟 */
      for (let i = 0; i < array.length - 1; i++) {
        /* 内循环为每趟比较的次数，第i趟比较len-1-i次 */
        for (let j = 0; j < array.length - 1 - i; j++) {
          if (array[j + 1] > array[j]) {
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
      return array;
    },
    //选择排序
    fnSelectArr() {
      let array = [3, 5, 1, 9, 4, 2, 1, 5];
      let temp, minIndex;
      for (var i = 0; i < array.length - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < array.length; j++) {
          if (array[j] < array[minIndex]) {
            // 寻找最小的数
            minIndex = j; // 将最小数的索引保存
          }
        }
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
      return array;
    },
    // ------------随机打乱一个数组
    shuffle(arr) {
      for (var i = 1; i < arr.length; i++) {
        const random = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random]] = [arr[random], arr[i]];
      }
      return arr;
    }
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
  }
  &.clearfix:after{
    content: '';
    height: 0;
    line-height: 0;
    display: block; 
    visibility: hidden;
    clear: both;
  }
  &.clearfix{
    zoom: 1;
  }
}
</style>
