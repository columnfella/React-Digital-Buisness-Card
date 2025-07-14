import About from './About';
import Interests from './Interests';
import Footer from './Footer';
import Info from './Info';

export default function BusinessCard() {
    return (
        <div className="business-card">
            <Info />
            <div className="business-card-content">
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    );
}