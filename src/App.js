import React from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import CommentsScreen from './pages/CommentsScreen';
import ProfileScreen from './pages/ProfileScreen';
import NotFound from 'pages/NotFoundScreen';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/common/Header";
import { ProfileProvider } from 'components/common/ProfileContext';
import CommentForm from './pages/CommentFormScreen';

function App() {
  return (
    <div className="App">
      <ProfileProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/comments" element={<CommentsScreen />} />
          <Route path="/comments/new" element={<CommentForm />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ProfileProvider>
    </div>
  );
}

export default App;
