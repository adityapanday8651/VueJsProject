<template>
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="navbar-brand">MyApp</router-link>
        <ul class="navbar-menu">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/category">Category</router-link></li>
          <li><router-link to="/product">Product</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li>
            <button @click="logout" class="navbar-button">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'NavbarPage',
    setup() {
      const router = useRouter();
  
      const logout = async () => {
        try {
          //await AuthServices.logout(); // Assuming you have a logout method in AuthServices
          localStorage.removeItem('token');
          router.push('/');
        } catch (error) {
          console.error('Logout failed', error);
        }
      };  
      return {
        logout
      };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    padding: 1rem;
    color: white;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-brand {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
  }
  
  .navbar-menu {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .navbar-menu li {
    display: inline;
  }
  
  .navbar-menu a {
    color: white;
    text-decoration: none;
  }
  
  .navbar-menu a:hover {
    text-decoration: underline;
  }
  
  .navbar-button {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .navbar-button:hover {
    background-color: #0056b3;
  }
  </style>
  