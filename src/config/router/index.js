import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigate from "../../components/Navigation/Navigate";
import Home from "../../pages/Home";
import Search from "../../pages/Search";
import Profile from "../../pages/Profile";
import Setting from "../../pages/Setting";
import Explore from "../../pages/Explore";
import Chat from "../../pages/Chat";
import Post from "../../pages/Post";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="explore" element={<Explore />} />
            <Route path="chat" element={<Chat />} />
            <Route path="post" element={<Post />} />
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
