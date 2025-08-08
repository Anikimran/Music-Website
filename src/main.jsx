import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { DataProvider } from "./Components/context/Data";

import { RouterProvider } from "react-router-dom";
import Router from "./Components/Router";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={Router} />
    </DataProvider>
  </StrictMode>
);
