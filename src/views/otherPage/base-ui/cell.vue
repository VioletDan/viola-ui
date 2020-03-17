<template>
  <div class="cellPage" @click.exact="cellClick">
    <p v-if="show" ref="pNode">99999</p>
    <p v-for="(item,index) in arr" :key="index">{{item}}</p>
    <viola-cell></viola-cell>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {},
  data() {
    return {
      show: false,
      arr:[1,2,3]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {
      arr(newVal,oldVal){
          console.log(newVal,'watch',oldVal)
      }
  },
  methods: {
    cellClick(e) {
      console.log(e)
      this.show = true;
    //   this.arr[2]="我更改了"
      this.$set(this.arr,2,'我更改了')
      console.log(this.$refs.pNode);//undefined
      this.$nextTick(() => {
        console.log(this.$refs.pNode, "nextTick");
        this.$refs.pNode.innerHTML = " 5555"; //<p data-v-4e98a56b=""> 5555</p>
      });
    }
  },
  components: {}
};
</script>

<style scoped lang="scss"></style>
