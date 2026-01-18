import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import HomeScreen from "./pages/HomeScreen";
import CommentsScreen from "./pages/CommentsScreen";
import ProfileScreen from "./pages/ProfileScreen";
import CommentForm from "./pages/CommentFormScreen";
import NotFound from "pages/NotFoundScreen";
import { Routes, Route } from "react-router-dom";
import { store } from "store/store";
import { Provider } from "react-redux";
import { useLocalStorage } from "./components/hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
    const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`App theme-${theme}`}>
      <Provider store={store} >
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/comments" element={<CommentsScreen />} />
          <Route path="/comments/new" element={<CommentForm />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
