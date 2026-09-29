import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import "./index.css";

function currentPage() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/privacy") return <PrivacyPolicy />;
  return <Home />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>{currentPage()}</StrictMode>,
);
