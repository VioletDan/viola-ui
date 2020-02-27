<template>
  <div class="viola-button clearfix">
    <span class="slot"><slot></slot></span>
    <div class="button-ani" @click="btnClick">按钮</div>
    <div>{{ toChild }}</div>
    <div class="centerBox">
      <div class="con">我要垂直居中</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
var objTest = {
  name: "我是测试哈哈哈哈哈哈哈"
};
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
    // this.init(1)()
    console.log(this.fnBubbleArr());
    console.log(this.fnSelectArr());
    console.log(this.shuffle([3, 5, 1, 9, 4, 2, 1, 5]));
    //获取渲染后的宽高
    console.log(
      window.getComputedStyle(document.getElementsByClassName("button-ani")[0])
        .height
    );

    //原生ajax
    // this.xhr();

    // 对象深拷贝
    var obj = this.deepCloneObjFn(this.arrList);
    obj[0].list.fn();
    console.log(obj);
    //lodash
    const obj2 = _.cloneDeep(this.arrList);
    console.log(obj2);
    _.defer(function(stamp) {
      console.log(_.now() - stamp);
    }, _.now());

    //this的指向以及call和apply的区别
    this.funcTest()(1, 2);
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
    },
    // ------------原生ajax
    xhr() {
      // axios.defaults.baseURL = '/api/';
      // axios
      //   .get(
      //     "splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0"
      //   )
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
      var xhr = null;
      if (window.XMLHttpRequest) {
        //IE7+,Firefox,Chrome,Safari,Opera
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xhr.open(
        "GET",
        "/api/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0",
        true
      );
      xhr.send();
      xhr.onreadysatechange = function(e) {
        if ((xhr, readyState === 4 && xhr.status === 200)) {
          console.log(xhr.responseXML);
        }
      };
    },
    // ------------对象深拷贝
    deepCloneObjFn(obj) {
      // var deepCopyObj = JSON.parse(JSON.stringify(this.arrList));
      // deepCopyObj[0].name = 6666666;
      // console.log(this.arrList, deepCopyObj);

      // var CopyObj = Object.assign({}, this.arrList);
      // CopyObj[0].name = 6666666;
      // console.log(this.arrList, CopyObj);

      let deepCopyObj = Array.isArray(obj) ? [] : {};
      if (obj && typeof obj === "object") {
        for (let key in obj) {
          //判断子元素是不是对象.如果是就递归复制
          if (obj[key] && typeof obj[key] === "object") {
            deepCopyObj[key] = this.deepCloneObjFn(obj[key]);
          } else {
            deepCopyObj[key] = obj[key];
          }
        }
      }

      return deepCopyObj;
    },
    // ------------this指向问题
    funcTest(a, b) {
      return function fn(a, b) {
        console.log(a + " " + +" " + b);
      };
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

  .centerBox {
    width: abs($number: -130px);
    // width: percentage($number: 0.5);
    height: ceil($number: 49.5px);
    // background: #64bd63;
    // background-color: adjust-color(hsl(25, 100%, 80%), $lightness: -30%, $alpha: -0.4);
    // background-color: adjust-color(#102030, $red: -5, $blue: 5);
    // background-color: adjust-color(#102030, $blue: 5);
    // background-color: adjust-hue(hsl(120, 30%, 90%), 60deg);
    // background-color: blue(hsl(240, 100%, 50%))blue(hsl(240, 100%, 50%));
    // background-color: blue(rgb(100, 200, 70));
    // background-color: darken(hsl(25, 100%, 80%), 30%);
    // background-color: desaturate(#855, 20%);
    // background-color: opacify(rgba(0, 0, 17, 0.8), 0.2);
    background-color: grayscale(red);
    color: #fff;
    margin-top: 20px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    .con {
      display: inline-table;
    }
  }
}
</style>
