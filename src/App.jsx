import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/owner/HomePage";
import AuthPage from "./pages/AuthPage";
import UserManagement from "./pages/UserManagement";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/user-management" element={<UserManagement />} />

      </Routes>
    </>
  )
}

export default App
