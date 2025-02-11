import "./App.css";
import { Navbar, Home, Menu, Introduction, Footer, About } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Introduction />
            </>
          }
        />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
