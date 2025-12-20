import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import PropertyOverview from "@/components/ui/PropertyOverview";
import Location from "@/components/ui/Location";
import InvestmentHighlights from "@/components/ui/InvestmentHighlights";
import IdealUses from "@/components/ui/IdealUses";
import Disclosure from "@/components/ui/Disclosure";
import Gallery from "@/components/ui/Gallery";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PropertyOverview />
      <Location />
      <InvestmentHighlights />
      <IdealUses />
      <Disclosure />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
