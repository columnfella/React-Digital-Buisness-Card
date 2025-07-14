import image from '../assets/image.jpg';

export default function Info() {
    return (
        <div className="info">
            <img className="image" src={image}/>
            <div className="info-text">
                <span className="info-name">Name</span>
                <span className="info-position">Position</span>
                <span className="info-website">Website</span>
            </div>
            <div className="info-buttons">
                <button className="info-email-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="black" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>Email</span>
                </button>
                <button className="info-linkedin-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zm7.5 0h5v-9.4c0-2.24 2.96-2.42 2.96 0V24h5V13.23c0-5.89-6.72-5.67-7.99-2.78V7H7.5v17z"/>
                    </svg>
                    <span>Linkedin</span>
                </button>
            </div>
        </div>
    );
}