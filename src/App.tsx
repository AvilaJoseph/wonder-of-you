import { Route, Routes } from "react-router-dom"; // Remove BrowserRouter import
import Sidebar from "./layouts/Sidebar";
import './style.css'
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Sidebar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App