import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import DashboardPage from './components/DashboardPage.vue';
import CategoryPage from './components/CategoryPage.vue';
import ProductPage from './components/ProductPage.vue';
import ProfilePage from './components/ProfilePage.vue';
import { isAuthenticated } from '@/services/auth';

const routes = [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: DashboardPage,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next(); // User is authenticated, proceed to the route
        } else {
          next('/'); // Redirect to login page if not authenticated
        }
      }
    },
    {
      path: '/category',
      name: 'CategoryPage',
      component: CategoryPage,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next(); // User is authenticated, proceed to the route
        } else {
          next('/'); // Redirect to login page if not authenticated
        }
      }
    },
    {
      path: '/product',
      name: 'ProductPage',
      component: ProductPage,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next(); // User is authenticated, proceed to the route
        } else {
          next('/'); // Redirect to login page if not authenticated
        }
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfilePage,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next(); // User is authenticated, proceed to the route
        } else {
          next('/'); // Redirect to login page if not authenticated
        }
      }
    }
  ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
