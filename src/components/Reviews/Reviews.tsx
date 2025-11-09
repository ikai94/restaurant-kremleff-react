import React from 'react';
import './Reviews.css';

interface Review {
    id: number;
    name: string;
    text: string;
    image: string;
    role?: string;
    rating: number;
}

const reviews: Review[] = [
    {
        id: 1,
        name: 'Анна Петрова',
        text: 'Прекрасное место! Атмосфера уютная, обслуживание на высшем уровне, а кухня — просто волшебство. Обязательно вернусь снова!',
        image: '/images/testimonial-1.jpg',
        role: 'Гостья',
        rating: 5,
    },
    {
        id: 2,
        name: 'Игорь Кузнецов',
        text: 'Здесь потрясающая музыка и вкуснейшие блюда. Караоке-система отличная — звук чистый, зал просторный, настроение супер!',
        image: '/images/testimonial-2.jpg',
        role: 'Постоянный клиент',
        rating: 5,
    },
    {
        id: 3,
        name: 'Мария Лебедева',
        text: 'Мы отмечали день рождения — всё прошло идеально! Персонал внимательный, еда подаётся быстро, всё вкусно и красиво.',
        image: '/images/testimonial-3.jpg',
        role: 'Организатор вечеринки',
        rating: 5,
    },
    {
        id: 4,
        name: 'Дмитрий Орлов',
        text: 'Караоке-зал с душой! Можно петь, танцевать и отдыхать без стеснения. Отличный выбор песен и замечательная публика.',
        image: '/images/testimonial-4.jpg',
        role: 'Посетитель',
        rating: 5,
    },
    {
        id: 5,
        name: 'Екатерина Смирнова',
        text: 'Очень атмосферное место с великолепным интерьером. Особенно понравились десерты и коктейли — идеально сбалансированные!',
        image: '/images/testimonial-5.jpg',
        role: 'Любитель гастрономии',
        rating: 5,
    },
    {
        id: 6,
        name: 'Сергей Николаев',
        text: 'Здесь можно отлично провести вечер с друзьями. Музыка, еда, обслуживание — всё на 5 звёзд! Спасибо за настроение!',
        image: '/images/testimonial-6.jpg',
        role: 'Клиент',
        rating: 5,
    },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className={`star ${index < rating ? 'filled' : ''}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

const Reviews: React.FC = () => {
    return (
        <section
            className="section reviews text-center"
            aria-label="reviews"
            id="reviews"
        >
            <div className="container">
                <p className="section-subtitle text-center label-2">
                    Отзывы гостей
                </p>
                <h2 className="headline-1 section-title text-center">
                    Что говорят о нас
                </h2>

                <ul className="grid-list reviews-grid">
                    {reviews.map((item, index) => (
                        <li
                            key={item.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="review-card hover:card text-center">
                                <div className="quote-icon">"</div>

                                <figure
                                    className="card-banner img-holder"
                                    style={
                                        {
                                            ['--width' as any]: 120,
                                            ['--height' as any]: 120,
                                        } as React.CSSProperties
                                    }
                                >
                                    <div className="avatar-border"></div>
                                    <img
                                        src={item.image}
                                        width={120}
                                        height={120}
                                        loading="lazy"
                                        alt={item.name}
                                        className="img-cover review-avatar"
                                    />
                                </figure>

                                <div className="review-card-wrapper">
                                    <StarRating rating={item.rating} />

                                    <h3 className="title-3 review-name">
                                        {item.name}
                                    </h3>

                                    {item.role && (
                                        <p className="badge label-1 review-role">
                                            {item.role}
                                        </p>
                                    )}

                                    <p className="card-text label-1 review-text">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <p className="reviews-text text-center">
                    Спасибо всем нашим гостям за{' '}
                    <span className="span">тёплые слова</span> и вдохновляющие
                    отзывы!
                </p>
            </div>
        </section>
    );
};

export default Reviews;
