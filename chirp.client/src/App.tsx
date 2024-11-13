import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/single/Navbar";
import PostPage from "./components/PostPage";
import { UserAccountProvider } from "./context/UserAccountContext";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserAccountProvider>
        <div className="min-h-screen flex-grow flex flex-col z-50 w-full dark:bg-black bg-white ">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post" element={<PostPage />} />
          </Routes>
        </div>
      </UserAccountProvider>
    </QueryClientProvider>
  );
}

export default App;
