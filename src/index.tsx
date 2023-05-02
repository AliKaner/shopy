import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./contexts/cart";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailPage from "./pages/detail";
import ListPage from "./pages/list";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "detail",
    children: [
      {
        path: ":id",
        element: <DetailPage />,
      },
    ],
  },
  {
    path: "/",
    element: <ListPage />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CartProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </QueryClientProvider>
  </CartProvider>
);
