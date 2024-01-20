import Header from "./components/shared/Header"
import Home from "./components/Home"
import About from "./components/About"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {

  return (
    <>
    <Router>
      <section className="bg-emerald-100 h-screen w-screen">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </section>
    </Router>
    </>
  )
}

export default App
