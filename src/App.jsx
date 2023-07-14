import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes.jsx";
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
