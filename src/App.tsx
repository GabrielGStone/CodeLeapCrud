import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import MainScreen from "./pages/MainScreen/MainScreen";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Signup />} path="/signup" />
        <Route element={<MainScreen />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
