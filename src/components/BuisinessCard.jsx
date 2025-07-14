import About from './About';
import Interests from './Interests';
import Footer from './Footer';
import Info from './Info';

export default function BusinessCard() {
    return (
        <div className="buisiness-card">
            <Info />
            <div className="buisiness-card-content">
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    );
}