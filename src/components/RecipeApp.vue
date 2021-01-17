<template>
  <div class="recipeContainer">
    <header>
      <div class="headerContainer">
        <i class="fas fa-bars"></i>
        <div class="title">allrecipes</div>
        <i class="fas fa-search" @click="openSearchBar"></i>
      </div>
      <div class="searchContainer">
        <input class="searchText" type="text" v-model="search_text" />
        <button class="searchBtn" @click="getMealsBySearch">search</button>
      </div>
    </header>
    <div class="favContainer">
      <ul>
        <li v-for="food in foods" v-bind:key="food">
          <img :src="food.strCategoryThumb" :alt="food.strCategory" />
          <div>{{ food.strCategory }}</div>
        </li>
      </ul>
    </div>
    <div class="searchFoodsContainer">
      <ul>
        <li v-for="meal in meals" v-bind:key="meal">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" />
          <div>{{ meal.strMeal }}</div>
        </li>
      </ul>
    </div>
    <div class="personalizeContainer">
      <p>
        <span class="title">Personalize</span><br /><span
          >your recommandations</span
        >
      </p>
      <button @click="getRandomRecipe">START PERSONALIZING</button>
    </div>
    <div class="meals">
      <div class="mealHeader">
        <h4>Random Recipe</h4>
        <img :src="this.randomMealImg" alt="#" />
      </div>
      <div class="mealBody">
        <h6>{{ this.randomMealTitle }}</h6>
        <button>
          <i class="far fa-heart fav-btn"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "recipe-app",
  data() {
    return {
      search_text: "",
      foods: [],
      meals: [],
      randomMealImg: "",
      randomMealTitle: "",
    };
  },
  methods: {
    openSearchBar: function () {
      const headerContainer = document.querySelector(".headerContainer");
      const searchContainer = document.querySelector(".searchContainer");

      headerContainer.classList.add("active");
      searchContainer.classList.add("active");
    },
    getMealsBySearch: function () {
      const headerContainer = document.querySelector(".headerContainer");
      const searchContainer = document.querySelector(".searchContainer");
      const favContainer = document.querySelector(".favContainer");
      const searchFoodsContainer = document.querySelector(
        ".searchFoodsContainer"
      );

      if (this.search_text.length === 0) {
        headerContainer.classList.remove("active");
        searchContainer.classList.remove("active");
      } else {
        axios
          .get(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
              `${this.search_text}`
          )
          .then((res) => {
            // handle success
            this.meals = res.data.meals;
            headerContainer.classList.remove("active");
            searchContainer.classList.remove("active");
            favContainer.classList.add("active");
            searchFoodsContainer.classList.add("active");
          })
          .catch((err) => {
            // handle error
            console.log(err);
          })
          .then(() => {
            // always executed
          });
      }
    },
    getHeaderFood: function () {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => {
          // handle success
          this.foods = res.data.categories;
        })
        .catch((err) => {
          // handle error
          console.log(err);
        })
        .then(() => {
          // always executed
        });
    },
    getRandomRecipe: function () {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => {
          // handle success
          this.randomMealTitle = res.data.meals[0].strMeal;
          this.randomMealImg = res.data.meals[0].strMealThumb;
        })
        .catch((err) => {
          // handle error
          console.log(err);
        })
        .then(() => {
          // always executed
        });
    },
  },
  created() {
    this.getHeaderFood();
    this.getRandomRecipe();
  },
};
</script>

<style lang="scss">
#app {
  padding: unset;
}
.recipeContainer {
  width: 100%;
  overflow: hidden;

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
      input {
        width: 70%;
        margin: 0 10px;
        border: none;
        border-bottom: 1px solid black;
      }
      .searchBtn {
        width: 20%;
        padding: 0 10px;
        border-radius: 5px;
        background-color: white;
        border: 1px solid black;
      }
    }
    .searchContainer.active {
      display: block;
    }
  }
  .favContainer {
    display: block;
    background-color: #dfe8ef66;
    ul {
      display: flex;
      overflow: auto;
      padding: 0 20px;
      li {
        list-style: none;
        text-align: center;
        padding: 10px 5px;
        margin: 0 auto;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 1px solid #ffffff;
        }
        div {
          font-size: 12px;
          padding-top: 7px;
          font-weight: 600;
        }
      }
    }
  }
  .favContainer.active {
    display: none;
  }
  .searchFoodsContainer {
    display: none;
    background-color: #fceced;
    max-height: 131px;
    overflow: hidden;
    ul {
      display: flex;
      overflow: auto;
      padding: 0 20px;
      li {
        list-style: none;
        text-align: center;
        padding: 10px 5px;
        margin: 0 auto;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 1px solid #ffffff;
        }
        div {
          font-size: 12px;
          padding-top: 7px;
          font-weight: 600;
        }
      }
    }
  }
  .searchFoodsContainer.active {
    display: block;
  }
  .personalizeContainer {
    margin: 20px;
    padding: 10px;
    color: #ffffff;
    border-radius: 5px;
    background: rgb(238, 174, 202);
    background: radial-gradient(
      circle,
      rgba(238, 174, 202, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    .title {
      font-weight: 600;
    }
    button {
      display: block;
      margin: 0 auto;
      padding: 0 10px;
      color: #ffffff;
      border-radius: 20px;
      border: 1px solid #ffffff;
      background-color: transparent;
    }
  }
  .meals {
    margin: 20px;
    border: 1px solid #a2a0a0;
    border-radius: 5px;
    .mealHeader {
      h4 {
        text-align: center;
        padding: 5px;
        margin: 20px 0 0 0;
        font-size: 15px;
        position: absolute;
        background: white;
        color: gray;
      }
      img {
        width: 100%;
      }
    }
    .mealBody {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      h6 {
      }
      button {
        background: none;
        border: none;
        .fav-btn {
          border: none;
          background-color: transparent;
          color: rgb(197, 188, 188);
          cursor: pointer;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
