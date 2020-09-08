import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Movies from "./views/movies/Movies";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Movies />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
