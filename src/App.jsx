import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LogoSection from "./components/LogoSection";
import FeaturesSection from "./components/Features";
import Testimonials from "./components/Testimonials";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App bg-black-">
      <Navbar />
      <Hero />
      {/* <LogoSection /> */}
      <FeaturesSection />
      <Testimonials />
      <Dashboard />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
