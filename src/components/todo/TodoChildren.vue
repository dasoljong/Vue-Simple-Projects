<template>
  <div>
    <ul>
      <li v-for="(list, i) in lists" :key="(list, i)">
        {{ list }} <button @click="deleteContent(i)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo-children",
  props: {
    lists: [],
  },
  data() {
    return {};
  },
  methods: {
    deleteContent(i) {
      this.lists.splice(i, 1);
    },
  },
};
</script>
