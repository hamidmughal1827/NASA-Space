
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TheStory from './components/TheStory';
import Findings from './components/Findings';
import Team from './components/Team';
import TeamImages from './components/TeamImages';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import InteractiveMap from './components/InteractiveMap';

const App: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="bg-white">
            <main>
                <Hero />
                <TheStory />
                <InteractiveMap />
                <Findings />
                <Team />
                <TeamImages />
            </main>
            <Footer />
            <ScrollToTopButton isVisible={isVisible} />
        </div>
    );
};

export default App;
