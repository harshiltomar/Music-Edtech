import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.0.2]">
      <HeroSection />
      <FeaturedCourses />
      <MusicSchoolTestimonialCard />
    </main>
  );
}
