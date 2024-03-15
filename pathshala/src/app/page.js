import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Educators from "@/components/Educators";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <Categories />
      <Testimonials />
      <Educators />
      <Footer />
    </>
  );
}
