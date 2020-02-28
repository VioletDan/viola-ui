<template>
  <div id="app">
    <viola-switch v-model="isSwitch">开关：</viola-switch>
    <viola-button class="viola-button" :type="type">按钮:</viola-button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      isSwitch: false,
      type:'default2'
    };
  },
  watch: {
    isSwitch: newValue => {
      console.log("开关:", newValue);
    }
  },
  methods: {}
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
  .viola-button {
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
