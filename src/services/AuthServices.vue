<script>
import axios from 'axios';

const AuthServices = {
  async login(username, password) {
    console.log("User Name and password:", username, password);
    try {
      const response = await axios.post('https://localhost:7095/api/Auth/login', {
        username,
        password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      return response.data;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  },

  async fetchCategories() {
    try {
      const response = await axios.get('https://localhost:7095/api/Category/GetAllCategoriesAsync');
      console.log("fetchCategories Response", response);
      return response.data.data.categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
};

export default AuthServices;

</script>