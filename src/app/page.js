import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Cars from "./components/Cars";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Why from "./components/Why";

export default function Home() {
  return (
   <>
     <main className=" max-w-[1920]  bg-[#000000] mx-auto relative overflow-hidden font-vazir">
      <Header/>
      <Hero/>
      <Cars/>
      <About/>
      <Why/>
      <Testimonial/>
      <Cta/>
      <Footer/>
      <BackToTop/>
      <div className=" h-[40px]"></div>
     </main>

   </>
  
  );
}
