<template>
  <div id="app">
    <viola-switch v-model="isSwitch">开关：</viola-switch>
    <div>{{fromChild}}</div>
    <viola-button class="viola-button" @event="event($event)" v-bind:toChild="toChild">按钮:</viola-button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isSwitch: false,
      fromChild:'fromChild',
      toChild:'I am a fahter'
    };
  },
  watch: {
    isSwitch: newValue => {
      console.log("开关:", newValue);
    }
  },
  methods:{
    event(data){
      console.log(data)
      this.fromChild = data;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .viola-button{
    margin-top: 20px;
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
