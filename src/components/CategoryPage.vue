<template>
  <div>
    <h2>Category List</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.name }}</td>
          <td>{{ category.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
import AuthServices from '@/services/AuthServices.vue';


export default {
  name: 'CategoryPage',
  data() {
    return {
      categories:[]
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
  async  fetchCategories(){
      this.categories=await AuthServices.fetchCategories();
    }
  }
};
</script>
  
<style scoped>
h2 {
  color: #42b983;
  text-align: center;
  margin-bottom: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
}

.table th, .table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

.table thead tr {
  background-color: #f2f2f2;
  color: #333;
  text-align: left;
}

.table tbody tr:nth-of-type(even) {
  background-color: #f9f9f9;
}

.table tbody tr:hover {
  background-color: #f1f1f1;
}

@media (max-width: 600px) {
  .table thead {
    display: none;
  }

  .table, .table tbody, .table tr, .table td {
    display: block;
    width: 100%;
  }

  .table tr {
    margin-bottom: 15px;
  }

  .table td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-weight: bold;
    text-align: left;
  }
}
</style>
