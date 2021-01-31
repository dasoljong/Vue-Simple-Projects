<template>
  <div class="todoListContainer">
    <h2>TO-DO LIST</h2>
    <div class="text-wrapper">
      <input type="text" placeholder="New task">
      <button>ADD</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
  .todoListContainer {
    text-align: center;
    align-content: center;
    margin: 50px auto;
    .text-wrapper {
      display: flex;
      flex-direction: row;
      input {
        margin-right: 10px;
      }
      button {
        border: none;

      }
    }
  }
</style>

