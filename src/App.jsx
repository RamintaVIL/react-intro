import { Features } from './components/features/Features';
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
                <Sponsor />
            </main>
            <Footer />
        </>
    );
}

export default App;
