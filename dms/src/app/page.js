import DoctorTeam from "@/components/DoctorsCard";
import FeatureCards from "@/components/FacalityCard";
import Hero from "@/components/HeroSection";
import Navigationbar from "@/components/NavigationBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-indigo-50">
        <Navigationbar />
        <Hero />
        <FeatureCards />
        <DoctorTeam />

      </div>
    </div>
  );
}
