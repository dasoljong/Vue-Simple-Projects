<template>
  <div>
    <label>
      <input
        type="text"
        v-model="todoContent"
        v-on:keyup.enter="addContent(todoContent)"
      />
    </label>
    <ul>
      <li v-for="(todo, i) in todoList" :key="(todo, i)">
        {{ todo }} <button @click="deleteContent(i)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      todoContent: "",
      todoList: [],
    };
  },
  methods: {
    addContent(todoContent) {
      if (todoContent.length > 0) {
        this.todoList.push(todoContent);
      }
      this.todoContent = "";
    },
    deleteContent(i) {
      this.todoList.splice(i, 1);
    },
  },
};
</script>
