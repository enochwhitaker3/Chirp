import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/single/Navbar";
import { UserAccountProvider } from "./context/UserAccountContext";
import { ThemeProvider } from "./hooks/useTheme";
import Bottombar from "./components/single/Bottombar";
import AccountPage from "./components/Pages/AccountPage";
import PostPage from "./components/Pages/PostPage";
import ViewChirpPage from "./components/Pages/ViewChirpPage";
import SearchPage from "./components/Pages/SearchPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserAccountProvider>
          <div
            className={`min-h-screen flex-grow flex flex-col z-50 w-full dark:bg-black bg-white`}
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post" element={<PostPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/user/:userName" element={<AccountPage />} />
              <Route path="/post/:id" element={<ViewChirpPage />} />
            </Routes>
            <Bottombar />
          </div>
        </UserAccountProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
