import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import { Template } from "./components/template"

function App() {

  return (
    <Router>
      <Routes>
        <Route index path="/" element={
          <Template>
            <Home/>
          </Template>
        } />
      </Routes>
    </Router>
  )
}

export default App
