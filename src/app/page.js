import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Shop from "./components/Shop/Shop";
import SoundByte from "./components/SoundByte/SoundByte";

export default function Home() {
  return (
    <div className="bg-red-900">
      <Header />
      <Hero />
      <SoundByte />
      <Events />
      <Shop />
      <Footer />
    </div>
  );
}
