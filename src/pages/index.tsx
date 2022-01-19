import { FC } from "react";
import Home from "./home";
import Post from "./post";
import Write from "./write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Routers: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/write" element={<Write />} />
        <Route path="*" />
      </Routes>
    </Router>
  );
};
export default Routers;
