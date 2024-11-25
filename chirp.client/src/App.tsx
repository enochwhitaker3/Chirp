import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Pages/HomePage";
import Navbar from "./components/single/Navbar";
import { UserAccountContext } from "./context/UserAccountContext";
import { ThemeProvider } from "./hooks/useTheme";
import Bottombar from "./components/single/Bottombar";
import AccountPage from "./components/Pages/AccountPage";
import PostPage from "./components/Pages/PostPage";
import ViewChirpPage from "./components/Pages/ViewChirpPage";
import SearchPage from "./components/Pages/SearchPage";
import { Toaster } from "react-hot-toast";
import SignInPage from "./components/Pages/SignInPage";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import { UserAccountContextInterface } from "./@types/UserAccount";
import { useContext } from "react";
import EditAccountPage from "./components/Pages/EditAccountPage";

function App() {
  const { user } = useContext(
    UserAccountContext
  ) as UserAccountContextInterface;

  const location = useLocation();

  const hideNavbarPaths = ["/signup"];
  return (
    <ThemeProvider>
      <div
        className={`min-h-screen flex-grow flex flex-col z-50 w-full dark:bg-black bg-white`}
      >
        {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/signup" element={<SignInPage />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/post"
            element={
              <ProtectedRoute isAuthenticated={!!user}>
                <PostPage />
              </ProtectedRoute>
            }
          />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/user/:userName" element={<AccountPage />} />
          <Route path="/edituser/:userName" element={<EditAccountPage />} />
          <Route path="/post/:id" element={<ViewChirpPage />} />
        </Routes>
        {!hideNavbarPaths.includes(location.pathname) && <Bottombar />}
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
