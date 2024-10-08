import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, CategoryPage } from "./pages";
import { Navbar } from "./components";

export const AppRouter = () => {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/preguntas-y-respuestas-app" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </>
  );
};