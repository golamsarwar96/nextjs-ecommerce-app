import Banner from "@/components/homepage/Banner";
import NavBar from "@/components/homepage/NavBar";
import Feature from "@/components/homepage/Feature";
import HowItWorks from "@/components/homepage/HowItWorks";
import Testimonial from "@/components/homepage/Testimonial";
import Newsletter from "@/components/homepage/Newsletter";
import Footer from "@/components/homepage/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Feature />
      <Testimonial />
      <HowItWorks />
      <Newsletter />
      <Footer />
    </>
  );
}
