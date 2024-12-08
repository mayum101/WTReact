import "./App.css";
import Home from ".src/Components/Home";
import About from ".src/Components/About";
import Work from ".src/Components/Work";
import Testimonial from ".src/Components/Testimonial";
import Contact from ".src/Components/Contact";
import Footer from ".src/Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;