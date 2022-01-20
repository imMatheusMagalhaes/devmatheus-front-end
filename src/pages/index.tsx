import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./404/404";
import Home from "./home/home";
import Post from "./post/post";
import Write from "./write/write";

const Routers: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/write" element={<Write />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default Routers;
