import FAQs from "@/components/Faqs";
import HowItWorks from "@/components/how-its-work";
import { Hero, Problem, Solution } from "@/components/sections/Home";
import Features from "@/components/sections/Home/Features";
import GetStarted from "@/components/sections/Home/GetStarted";
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
      <FAQs />
      <GetStarted/>
      {/* <CTA/> */}
    </>
  );
}
