<template>
  <div>
    <h2>Category List</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.name }}</td>
          <td>{{ category.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script>
  export default {
    name: 'CategoryPage'
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  