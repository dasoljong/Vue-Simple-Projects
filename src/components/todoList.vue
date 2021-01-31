<template>
  <div class="todoListContainer">
    <h2>TO-DO LIST</h2>
    <div class="textWrapper">
      <input type="text" placeholder="New task" v-model="todoText" v-on:keyup.enter="submitText(todoText)" />
      <button @click="submitText(todoText)">ADD</button>
    </div>
    <ul class="listWrapper">
      <li v-for="(todo, index) in todos" v-bind:key="(todo, index)">
        {{ todo.todoText }}
        <i class="far fa-trash-alt deleteBtn" @click="deleteText(index)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  data() {
    return {
      todoText: "",
      todos: []
    };
  },
  methods: {
    submitText(todoText) {
      if (todoText.length > 0) {
        this.todos.push({ todoText });
        this.todoText = "";
      } else {
        alert("할 일을 입력하세요");
      }
    },
    deleteText(index) {
      this.todos.splice(index, 1)
    },
  }
};
</script>

<style lang="scss">
.todoListContainer {
  text-align: center;
  width: 100%;
  max-width: 500px;
  margin: 50px auto;
  .textWrapper {
    display: inline-block;
    input {
      margin-right: 10px;
    }
    button {
      border: none;
      background-color: #87a9e2;
      color: white;
      transition: 0.3s;
    }
    button:hover {
      background-color: #337ab7;
    }
  }
  .listWrapper {
    margin: 30px auto 0;
    display: block;
    padding: unset;
    width: 100%;
    max-width: 230px;
    li {
      width: 150px;
      list-style: none;
      border-bottom: 1px solid black;
      display: flex;
      justify-content: space-between;
      margin: 0 auto 10px;
      align-items: center;
    }
    i{
      transition: 0.3s;
    }
    i:hover {
      color: red;
    }
  }
}
</style>
