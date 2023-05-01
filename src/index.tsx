import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./contexts/cart";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailPage from "./pages/detail";
import ListPage from "./pages/list";
import { DetailProvider } from "./contexts/detail";
import './index.css';

const router = createBrowserRouter([
  {
    path: "detail",
    children:[
      {
        path:":id",
        element: <DetailPage />,
      }
    ],
  },
  {
    path: "list",
    element: <ListPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DetailProvider>
    <CartProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </CartProvider>
  </DetailProvider>
);
