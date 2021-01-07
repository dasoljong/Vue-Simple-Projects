<template>
  <div class="addressBook">
    <h1>Address Book::List</h1>
    <a href="" class="btn btn-info">New Entry</a>
    <div class="mainContentContainer">
      <table class="tableContainer">
        <thead class="tableHead">
        <tr>
          <th>#No</th>
          <th>Name</th>
          <th>CellPhone</th>
          <th>Birth Date</th>
          <th>Company</th>
          <th>Memo</th>
        </tr>
        </thead>
        <tbody>
        <td><a href="">{{}}</a></td>
        <td>{{}}</td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'address-book',
}
</script>


<style>
.addressBook {
  margin-top: 200px;
}
.addressBook h1 {
  width: 100%;
  border-bottom: 1px solid darkgrey;
  padding-bottom: 20px;
  margin-bottom: unset;
}
.addressBook .btn {
  margin: 20px 0;
}

.addressBook .tableContainer {
  width: 100%;
}
.addressBook .tableHead {
  width: 100%;
  background-color: black;
}
.addressBook .tableContainer tr th {
  padding: 10px 20px;
  color: aliceblue;
}
</style>