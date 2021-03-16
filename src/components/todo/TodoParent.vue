<template>
  <div>
    <label>
      <input type="text" v-model="content" v-on:keyup.enter="addContent(content)">
    </label>
    <todo-children :lists="parentLists"></todo-children>
  </div>
</template>

<script>
  import TodoChildren from "@/components/todo/TodoChildren";
  export  default {
    name: "todo-parent",
    components:{TodoChildren},
    data(){
      return{
        content: "",
        parentLists:[],
      }
    },
    methods:{
      addContent(content) {
        if(content.length > 0) {
          this.parentLists.push(content);
          this.content = "";
        }
      }
    }
  }
</script>