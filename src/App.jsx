import "./App.css";
import { Navbar, Home, Menu, Introduction, Footer, About } from "./components";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
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
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
