interface EventItem {
    image: string;
    date: string;
    subtitle: string;
    title: string;
    datetime: string;
}

const eventsData: EventItem[] = [
    {
        image: '/images/event-1.jpg',
        date: '23/02/2024',
        datetime: '2024-02-23',
        subtitle: 'Еда, Вкус',
        title: 'Приближается 23 февраля — важный праздник в России. Успей забронировать зал.',
    },
    {
        image: '/images/event-2.jpg',
        date: '08/03/2024',
        datetime: '2024-03-08',
        subtitle: 'Здоровая пища',
        title: 'Закажи мероприятие в международный женский день.',
    },
    {
        image: '/images/event-3.jpg',
        date: '01/05/2024',
        datetime: '2024-05-01',
        subtitle: 'Рецепт',
        title: '1 мая во многих странах мира отмечается международный праздник — День труда (Праздник Весны и Труда).',
    },
];

const Event = () => {
    return (
        <section
            id="event"
            className="section event bg-black-10"
            aria-label="event"
        >
            <div className="container">
                <p className="section-subtitle label-2 text-center">
                    Недавние обновления
                </p>

                <h2 className="section-title headline-1 text-center">
                    Предстоящие События
                </h2>

                <ul className="grid-list">
                    {eventsData.map((event, index) => (
                        <li key={index}>
                            <div className="event-card has-before hover:shine">
                                <div
                                    className="card-banner img-holder"
                                    style={
                                        {
                                            '--width': 350,
                                            '--height': 450,
                                        } as React.CSSProperties
                                    }
                                >
                                    <img
                                        src={event.image}
                                        width={350}
                                        height={450}
                                        loading="lazy"
                                        alt={event.title}
                                        className="img-cover"
                                    />

                                    <time
                                        className="publish-date label-2"
                                        dateTime={event.datetime}
                                    >
                                        {event.date}
                                    </time>
                                </div>

                                <div className="card-content">
                                    <p className="card-subtitle label-2 text-center">
                                        {event.subtitle}
                                    </p>

                                    <h3 className="card-title title-2 text-center">
                                        {event.title}
                                    </h3>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Event;
