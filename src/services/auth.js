// Check if the user is authenticated
export function isAuthenticated() {
    return !!localStorage.getItem('token'); // Adjust this based on how you store authentication info
  }

  