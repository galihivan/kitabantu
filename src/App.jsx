import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import TrustedBy from "./components/TrustedBy";
import Footer from "./components/footer/footer";
import Testimoni from "./components/testimoni/Testimoni";


function App() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <Testimoni />
      <Footer />
    </div>
  );
}

export default App;
