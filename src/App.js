import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import SearchMovie from "./views/movie/search/Search";
import MovieDetail from "./views/movie/detail/Detail";
// import MoviesByPeople from "./views/moviesByPeople/search/Search";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <hr />
        <main>
          <Routes>
            <Route path="/" element={<SearchMovie />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            {/* <Route path="movie/lukeskywalker" element={<MoviesByPeople />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
