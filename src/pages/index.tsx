import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./404/404";
import Home from "./home/home";
import User from "./user/user";
import Post from "./post/post";
import TopBar from "../components/NavBar/TopBar";
import Write from "./write/write";

const Routers: FC = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/write/:id" element={<Write />} />
        <Route path="/post" element={<Post />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
