import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigate";
import Home from "../../pages/Home";
import Search from "../../pages/Search";
import Profile from "../../pages/Profile";
import Setting from "../../pages/Setting";
import Explore from "../../pages/Explore";
import Chat from "../../pages/Chat";
import Post from "../../pages/Post";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import ViewerProfile from "../../pages/ViewerProfile";

const Router = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!token ? (
            <Route
              path="/"
              element={<Navigate to="/login" replace="true"></Navigate>}
            />
          ) : (
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="search" element={<Search />} />
              <Route path="explore" element={<Explore />} />
              <Route path="chat" element={<Chat />} />
              <Route path="post" element={<Post />} />
              <Route path=":userNick" element={<Profile />} />
              <Route path="setting" element={<Setting />} />
              <Route path=":nick/:id" element={<ViewerProfile />} />
            </Route>
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
