import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./404/404";
import Home from "./home/home";
import User from "./user/user";
import Post from "./post/post";

const Routers: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
