import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import GuestLayout from '../layouts/GuestLayout';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Pricing from '../pages/Pricing';
import Contact from '../pages/Contact';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';

// Layout pour les utilisateurs non authentifiés (Guest)
const GuestLayoutWrapper = () => (
  <GuestLayout>
    <Outlet /> {/* Les routes enfants seront rendues ici */}
  </GuestLayout>
);

// Layout pour les utilisateurs authentifiés (Auth)
const AuthLayoutWrapper = () => (
  <AuthLayout>
    <Outlet /> {/* Les routes enfants seront rendues ici */}
  </AuthLayout>
);

// Configuration des routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestLayoutWrapper />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/app',
    element: <AuthLayoutWrapper />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
]);

// Composant principal pour fournir le routeur
const Router = () => <RouterProvider router={router} />;

export default Router;