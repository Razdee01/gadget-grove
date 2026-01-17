import Categories from "@/components/home/Categories";
import CTA from "@/components/home/CTA";
import FeaturedItems from "@/components/home/FeaturedItems";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section>
        <Hero></Hero>
        <Stats></Stats>
        <Categories /> 
         <FeaturedItems /> 
         <WhyChooseUs /> 
         <Testimonials />
        <CTA />
      </section>
    </div>
  );
}
