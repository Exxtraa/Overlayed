import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Pricing from "./components/Pricing.jsx";
import Home from "./components/Home.jsx"

const clerkFrontendApi = "pk_test_cmVzb2x2ZWQtbGlvbi01NC5jbGVyay5hY2NvdW50cy5kZXYk";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);