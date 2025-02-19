import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/herosection/HeroSection";
import TrustedBy from "@/components/TrustedBy";

import Testimoni from "@/components/testimoni/Testimoni";
import StepsSection from "@/components/stepsection/StepSection";

function Home() {
  return (
    <>
    <Navbar />
    <main>
      <HeroSection />
      <TrustedBy />
      <StepsSection />
      <Testimoni />
    </main>
 
    
    </>
      
  );
}

export default Home;
