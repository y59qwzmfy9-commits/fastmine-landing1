import { createRoot } from "react-dom/client";
import App from "./app/App.production.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
