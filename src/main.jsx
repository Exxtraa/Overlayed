// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const clerkFrontendApi = "pk_test_cmVzb2x2ZWQtbGlvbi01NC5jbGVyay5hY2NvdW50cy5kZXYk"; // Replace with actual key

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
