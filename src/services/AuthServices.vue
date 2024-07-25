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
  }
};

export default AuthServices;

</script>