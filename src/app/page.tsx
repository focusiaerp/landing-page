import AnnouncementBanner from "@/components/AnnouncementBanner";
import AutomationSection from "@/components/AutomationSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScrollingBanner from "@/components/ScrollingBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnnouncementBanner />
      <HeroSection />
      <ScrollingBanner />
      <AutomationSection />
    </div>
  );
}
