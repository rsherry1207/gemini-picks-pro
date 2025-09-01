import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <CTA />
    </div>
  );
};

export default Index;