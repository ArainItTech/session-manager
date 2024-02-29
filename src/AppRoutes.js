import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";

const AppRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register />
  }
];

export default AppRoutes;
