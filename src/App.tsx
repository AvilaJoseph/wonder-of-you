import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      </Routes>
    </>
  )
}

export default App