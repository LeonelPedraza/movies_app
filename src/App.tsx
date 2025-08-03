import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import { Template } from "./components/template"
import { Movies } from "./pages/movies/movies"
import { MovieDetails } from "./pages/movies/details"

function App() {

  return (
    <Router>
      <Template>
        <Routes>
          <Route index path="/" element={
            <Home />
          } />
          <Route index path="/movies" element={
            <Movies />
          } />
          <Route index path="/movie/:original_title" element={
            <MovieDetails />
          } />
        </Routes>
      </Template>
    </Router>
  )
}

export default App
