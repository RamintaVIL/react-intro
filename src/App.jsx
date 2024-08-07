import { Features } from './components/features/Features';
import { FeaturesBigOne } from './components/featuresBigOne/FeaturesBigOne';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Sponsor } from './components/sponsor/Sponsor';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Features />
                <FeaturesBigOne />
                <Sponsor />
            </main>
            <Footer />
        </>
    );
}

export default App;
