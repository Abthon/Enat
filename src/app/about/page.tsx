import AboutHero from "@/components/about/AboutHero";
import TimelineSection from "@/components/about/TimelineSection";
import Footer from "@/components/ui/Footer";
import MemberSection from "@/components/about/MemberSection";


export default function AboutPage() {
  return (
    <>
      {/*<StickyNavigation />*/}
      <main>
        <AboutHero />
        <TimelineSection />
		<MemberSection />
		<Footer />
      </main>
    </>
  );
}