import DoctorArticle from "@/components/DoctorArticlesPage";
import DoctorTeam from "@/components/DoctorsCard";
import FeatureCards from "@/components/FacalityCard";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import Navigationbar from "@/components/NavigationBar";


export default function Home() {
  return (
    <div>
      <div>
        <Navigationbar />
        <Hero />
        <FeatureCards />
        <DoctorTeam />
        <DoctorArticle />
        <Footer />

      </div>
    </div>
  );
}
