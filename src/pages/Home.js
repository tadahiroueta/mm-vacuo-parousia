import About from "../components/About";
import LandingBanner from "../components/LandingBanner";
import SynergyRoulette from "../components/SynergyRoulette";
import SuppliersPreview from '../components/SuppliersPreview';
import Contact from "../components/Contact";


export default function Home() {
    return (
        <main className="home">
            <LandingBanner />
            <SynergyRoulette />
            <About />
            <SuppliersPreview />
            <Contact />
        </main>
    );
}