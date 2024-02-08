import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import { Template } from "./components/template"
import { Movies } from "./pages/movies/movies"

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
      </Routes>
    </Router>
  )
}

export default App
