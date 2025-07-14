import About from './About';
import Interests from './Interests';
import Footer from './Footer';
import Info from './Info';

export default function BusinessCard() {
    return (
        <section className="buisiness-card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </section>
    );
}