import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NotreCuisine from "@/components/NotreCuisine";
import MenuDuJour from "@/components/MenuDuJour";
import Equipe from "@/components/Equipe";
import Traiteur from "@/components/Traiteur";
import InfosPratiques from "@/components/InfosPratiques";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <NotreCuisine />
        <MenuDuJour />
        <Equipe />
        <Traiteur />
        <InfosPratiques />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
