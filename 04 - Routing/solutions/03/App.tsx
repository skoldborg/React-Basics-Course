import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./pages/StartPage";
import MoviePage from "./pages/MoviePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<StartPage />} />
                <Route path="/movies" element={<MoviePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
