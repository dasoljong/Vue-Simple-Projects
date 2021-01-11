<template>
  <div class="addressBook">
    <h1>Books Info::List</h1>
    <button class="btn btn-info" @click="getCustomerInfo()">New Entry</button>
    <div class="mainContentContainer">
      <table class="tableContainer">
        <thead class="tableHead">
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>YEAR</th>
            <th>Cover Color</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" v-bind:key="book">
            <td><a href=""></a>{{ book.id }}</td>
            <td>{{ book.name }}</td>
            <td>{{ book.year }}</td>
            <td>{{ book.color }}</td>
            <td>{{ book }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "address-book",
  data() {
    return {
      books: [],
      isActive: false,
    };
  },
  methods: {
    getCustomerInfo: function () {
      axios
        .get("https://reqres.in/api/unknown")
        .then((res) => {
          // handle success
          console.log(res);
          this.books = res.data.data;
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
};
</script>

<style lang="scss">
.addressBook {
  margin-top: 200px;
  h1 {
    width: 100%;
    border-bottom: 1px solid darkgrey;
    padding-bottom: 20px;
    margin-bottom: unset;
  }
  .btn {
    margin: 20px 0;
  }
  .tableContainer {
    width: 100%;
    .tableHead {
      width: 100%;
      background-color: black;
      tr th {
        padding: 10px 20px;
        color: aliceblue;
      }
    }
  }
}
.addressBook .tableContainer tr th {
  padding: 10px 20px;
  color: aliceblue;
}

tbody tr td:last-child {
  display: none;
}
</style>
