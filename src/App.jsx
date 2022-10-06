import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import BlogDetail from "./pages/BlogDetail";

export default function App(){

  return (
    <Routes>
      <Route path={"/"} element={< Home />} />
      <Route path={"/blog"} element={< Blog />} />
      <Route path={"/blog/:id/:slug"} element={< BlogDetail />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  )
}