import Carousel from "@/components/carousel";
import FAQs from "@/components/Faqs";
import HowItWorks from "@/components/how-its-work";

import { Hero, Problem, Solution, Pricing } from "@/components/sections/Home";
import Features from "@/components/sections/Home/Features";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Carousel /> */}
      <HowItWorks />
      <Problem />
      <Solution />
      <Testimonials />
      <Pricing />
      <FAQs />
    </>
  );
}
