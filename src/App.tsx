import { Header } from './components';
import About from './components/About/About';
import Event from './components/Event/Event';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/Header/BackToTopButton';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Menu from './components/Menu/Menu';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';
import SpecialDish from './components/SpecialDish/SpecialDish';
import TopBar from './components/TopBar/TopBar';

function App() {
    return (
        <>
            <TopBar />
            <Header />
            <HeroSlider />
            <Services />
            <About />
            <SpecialDish />
            <Menu />
            <Reviews />

            <Features />
            <Event />
            <Footer />
            <BackToTopButton />
        </>
    );
}

export default App;
