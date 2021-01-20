<template>
  <div class="noteAppContainer">
    <button class="add" @click="addNewNote">Add note</button>
  </div>
</template>

<script>
export default {
  name: "note-app",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    doEdit: function () {
      const mainEl = document.querySelector(".main");
      const textArea = document.querySelector(".textArea");

      mainEl.classList.toggle("hidden");
      textArea.classList.toggle("hidden");
    },
    update: function () {
      console.log(this.value);
      const main = document.querySelector(".main");
      main.innerHTML = this.value;
    },
    addNewNote: function () {
      const noteAppContainerEl = document.querySelector(".noteAppContainer");
      const note = document.createElement("div");

      note.insertAdjacentHTML(
        "afterbegin",
        '<div class="notes"><div class="tools"><button><i class="fas fa-edit edit" @click="doEdit"></i></button><button @click="deleteNote"><i class="fas fa-trash delete"></i></button></div><div class="main hidden"></div><textarea class="textArea" @input="update" v-model="value"></textarea></div>'
      );

      noteAppContainerEl.appendChild(note);
    },
    deleteNote: function () {
      console.log("1");
    },
  },
  created() {},
};
</script>

<style lang="scss">
.noteAppContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #a2a0a0;
  .add {
    display: block;
    border: none;
    border-radius: 5px;
    margin: 20px;
    background-color: #59b859;
    color: white;
    cursor: pointer;
    position: absolute;
    right: 0;
  }
  .notes {
    display: inline-block;
    background-color: white;
    width: 400px;
    height: 400px;
    margin: 20px;
    .tools {
      background-color: #e9d8da;
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem;
      .edit {
        margin-right: 10px;
      }
      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
    }
    .hidden {
      display: none;
    }
    .main {
      width: 100%;
      height: 400px;
    }
    textarea {
      outline: none;
      border: none;
      width: 100%;
      height: 400px;
    }
  }
}
</style>
