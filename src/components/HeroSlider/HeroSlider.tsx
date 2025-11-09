import React, { useEffect, useState, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';

interface Slide {
    id: number;
    bg: string;
    subtitle: string;
    title: string;
    text: string;
    buttonText: string;
    buttonLink: string;
}

const slides: Slide[] = [
    {
        id: 1,
        bg: 'images/hero-slider-1.jpg',
        subtitle: 'Добро пожаловать',
        title: 'Ресторан Kremleff',
        text: 'Высокая кухня и уютная атмосфера в центре города',
        buttonText: 'Забронировать',
        buttonLink: '#contacts',    
    },
    {
        id: 2,
        bg: 'images/hero-slider-2.jpg',
        subtitle: 'Лучшие блюда',
        title: 'Авторская кухня',
        text: 'Попробуйте наши фирменные блюда от шеф-повара',
        buttonText: 'Меню',
        buttonLink: '#menu',
    },
    {
        id: 3,
        bg: 'images/hero-slider-3.jpg',
        subtitle: 'Незабываемые вечера',
        title: 'Уютная атмосфера',
        text: 'Проведите вечер в комфортной обстановке',
        buttonText: 'О нас',
        buttonLink: '#about',
    },
];

const AUTO_SLIDE_INTERVAL = 7000;

const HeroSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<any | null>(null);

    const slideNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const slidePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, []);

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(slideNext, AUTO_SLIDE_INTERVAL);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    return (
        <section className="hero" data-hero-slider>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slider-item ${
                        index === currentIndex ? 'active' : ''
                    }`}
                    data-hero-slider-item
                >
                    <div className="slider-bg">
                        <img src={slide.bg} alt={slide.title} loading="lazy" />
                    </div>

                    <p className="section-subtitle slider-reveal">
                        {slide.subtitle}
                    </p>
                    <h1 className="hero-title slider-reveal">{slide.title}</h1>
                    <p className="hero-text slider-reveal">{slide.text}</p>

                    <a
                        href={slide.buttonLink}
                        className="btn btn-primary slider-reveal"
                    >
                        {slide.buttonText}
                    </a>
                </div>
            ))}

            <button
                className="slider-btn prev"
                data-prev-btn
                onClick={slidePrev}
                onMouseOver={stopAutoSlide}
                onMouseOut={startAutoSlide}
            >
                <IonIcon icon={chevronBackOutline} />
            </button>

            <button
                className="slider-btn next"
                data-next-btn
                onClick={slideNext}
                onMouseOver={stopAutoSlide}
                onMouseOut={startAutoSlide}
            >
                <IonIcon icon={chevronForwardOutline} />
            </button>

            <a href="#menu" className="hero-btn has-before">
                <img
                    src="images/hero-icon.png"
                    width="48"
                    height="48"
                    alt="hero icon"
                />
                <span className="span">Меню</span>
            </a>
        </section>
    );
};

export default HeroSlider;
