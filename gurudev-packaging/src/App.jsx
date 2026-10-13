import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Capabilities from "./pages/Capabilities";
import Applications from "./pages/Applications";
import Process from "./pages/Process";
import Quality from "./pages/Quality";
import Gallery from "./pages/Gallery";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Plants from "./pages/Plants";
import Clients from "./pages/Clients";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/process" element={<Process />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;