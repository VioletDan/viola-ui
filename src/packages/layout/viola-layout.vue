<template>
  <div class="viola-layout">
    <div class="container">
      <header v-for="(todo, index) in todos" :key="index">
        <slot name="header" :todo="todo">
          <!-- 后备内容 -->
          {{ todo.text }}
        </slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViolaLayout",
  props: {
    todos: {
      type: [Array]
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

<style scoped lang="scss"></style>
