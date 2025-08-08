import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ConsultationForm from "./pages/ConsultationForm"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Destination from "./pages/Destination";
import Continent from "./pages/Continent";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Destination />} />
        <Route path="/book-free-consult" element={<ConsultationForm />} />
        <Route path="/back-to-home" element={<HomePage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/continent/:name" element={<Continent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
