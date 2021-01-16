<template>
  <div class="recipeContainer">
    <header>
      <input type="text" />
      <button id="search">search</button>
    </header>
    <div class="favContainer">
      <h3>Favorite Meals</h3>
      <ul>
        <li>
          <img
            src="https://www.themealdb.com/images/ingredients/Lime.png
"
            alt="lime"
          /><span>lime</span>
        </li>
        <li>
          <img
            src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview
"
            alt="pasta"
          /><span>pasta</span>
        </li>
        <li>
          <img
            src="https:\/\/www.themealdb.com\/images\/category\/miscellaneous.png"
            alt="tacos"
          /><span>tacos</span>
        </li>
      </ul>
    </div>
    <div class="meals"></div>
  </div>
</template>

<script>
export default {
  name: "recipe-app",
  data() {
    return {};
  },
  methods: {},
};
</script>
