import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import { Template } from "./components/template"
import { Movies } from "./pages/movies/movies"
import { MovieDetails } from "./pages/movies/details"

function App() {

  return (
    <Router>
      <Routes>
        <Route index path="/" element={
          <Template>
            <Home />
          </Template>
        } />
        <Route index path="/movies" element={
          <Template>
            <Movies />
          </Template>
        } />
        <Route index path="/movie/:original_title" element={
          <Template>
            <MovieDetails />
          </Template>
        } />
      </Routes>
    </Router>
  )
}

export default App
