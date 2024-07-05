import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";

import './App.css';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order/new",
        element: <CreateOrder />
      },
      {
        path: "/order/:orderId",
        element: <Order />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
