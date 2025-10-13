import { createBrowserRouter } from "react-router-dom";
import DummyLayout from "../layouts/DummyLayout";
import RootLayout from "../layouts/RootLayout";
import Carts from "../pages/DummyPages/Carts";
import Posts from "../pages/DummyPages/Posts";
import Products from "../pages/DummyPages/Products";
import Home from "../pages/RootPages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      // ...
      { path: "/", Component: Home },
    ],
  },
  {
    path: "/dummy",
    Component: DummyLayout,
    children: [
      // ...
      { path: "/dummy/products", Component: Products },
      { path: "/dummy/carts", Component: Carts },
      { path: "/dummy/posts", Component: Posts },
    ],
  },
]);

export default router;
