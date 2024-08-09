import { Features } from './components/features/Features';
import { FeaturesBigOne } from './components/featuresBigOne/FeaturesBigOne';
import { FeaturesMap } from './components/featuresMap/FeaturesMap';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Sponsor } from './components/sponsor/Sponsor';
import { sixFeatures } from './data/sixFeatures';



function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <FeaturesMap list={sixFeatures}/>
                <Sponsor />
                <Features />
                <FeaturesBigOne data={sixFeatures} />
                <Sponsor />
            </main>
            <Footer />
        </>
    );
}

export default App;
