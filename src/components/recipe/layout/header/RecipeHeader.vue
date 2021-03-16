<template>
  <header>
    <div class="headerContainer" v-bind:class="{ active: isActive }">
      <i class="fas fa-bars"></i>
      <div class="title">allrecipes</div>
      <i class="fas fa-search" @click="openSearchBar"></i>
    </div>
    <div class="searchContainer" v-bind:class="{ active: isActive }">
      <label>
        <input class="searchText" type="text" v-model="searchContent" />
      </label>
      <button class="searchBtn" @click="clickSearchBtn">search</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "recipe-header",
  data() {
    return {
      isActive: false,
      searchContent: "",
    };
  },
  methods: {
    openSearchBar() {
      this.isActive = !this.isActive;
    },
    clickSearchBtn() {
      if (this.searchContent.length === 0) {
        this.isActive = !this.isActive;
      }
    },
  },
};
</script>

<style lang="scss">
header {
  width: 100%;
  height: 40px;
  display: block;
  padding: 10px;
  flex-direction: row;
  .headerContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .title {
      font-style: italic;
      font-weight: bold;
      color: coral;
      text-decoration: underline;
    }
  }
  .headerContainer.active {
    display: none;
  }
  .searchContainer {
    display: none;
    width: 100%;
    transition: ease-in-out 0.5s;
    position: absolute;
    top: 6px;
    label {
      display: inline-block;
      margin-bottom: .5rem;
      width: 70%;
      input {
        width: 100% !important;
        margin: 0 20px;
        border: none;
        border-bottom: 1px solid black;
      }
    }
    button {
      margin-left: 20px;
    }
  }
}
</style>
