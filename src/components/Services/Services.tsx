interface ServiceItem {
    id: number;
    imgSrc: string;
    imgAlt: string;
    title: string;
    subtitle: string;
    dataAttr?: string;
    disabled?: boolean;
}

const services: ServiceItem[] = [
    {
        id: 1,
        imgSrc: 'images/service-1.jpg',
        imgAlt: 'Breakfast',
        title: 'Ресторанное меню',
        subtitle: 'Посмотреть меню',
        dataAttr: 'data-menu-toggler',
    },
    {
        id: 2,
        imgSrc: 'images/service-2.jpg',
        imgAlt: 'Appetizers',
        title: 'Банкетное меню',
        subtitle: 'Посмотреть меню',
        dataAttr: 'data-menu-banq',
        disabled: true,
    },
    {
        id: 3,
        imgSrc: 'images/service-3.jpg',
        imgAlt: 'Drinks',
        title: 'Барная карта',
        subtitle: 'Посмотреть меню',
        dataAttr: 'data-menu-barToggle',
        disabled: true,
    },
];

const Services: React.FC = () => {
    return (
        <section
            className="section service bg-black-10 text-center"
            aria-label="service"
        >
            <div className="container">
                <p className="section-subtitle label-2" id="menu">
                    творческий & современный
                </p>

                <h2 className="headline-1 section-title">
                    Мы предлагаем высший уровень
                </h2>

                <p className="section-text">
                    Элегантный и аристократичный интерьер подарит ощущение уюта
                    и комфорта, а музыкальное оформление станет завершающим
                    штрихом для прекрасного отдыха
                </p>

                <ul className="grid-list">
                    {services.map(
                        ({
                            id,
                            imgSrc,
                            imgAlt,
                            title,
                            subtitle,
                            dataAttr,
                            disabled,
                        }) => (
                            <li key={id}>
                                <div className="service-card">
                                    <a
                                        className={`has-before hover:shine ${disabled ? 'disabled' : ''}`}
                                    >
                                        <figure
                                            className="card-banner img-holder"
                                            style={
                                                {
                                                    '--width': '285',
                                                    '--height': '336',
                                                } as React.CSSProperties
                                            }
                                        >
                                            <img
                                                src={imgSrc}
                                                width="285"
                                                height="336"
                                                loading="lazy"
                                                alt={imgAlt}
                                                className="img-cover"
                                            />
                                        </figure>
                                    </a>

                                    <div
                                        className="card-content"
                                        {...(dataAttr
                                            ? { [dataAttr]: true }
                                            : {})}
                                    >
                                        <h3 className="title-4 card-title">
                                            <a
                                                className={
                                                    disabled ? 'disabled' : ''
                                                }
                                            >
                                                {title}
                                            </a>
                                        </h3>

                                        <a
                                            className={`btn-text hover-underline label-2 ${
                                                disabled ? 'disabled' : ''
                                            }`}
                                        >
                                            {subtitle}
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ),
                    )}
                </ul>

                <img
                    src="images/shape-1.png"
                    width="246"
                    height="412"
                    loading="lazy"
                    alt="shape"
                    className="shape shape-1 move-anim"
                />
                <img
                    src="images/shape-2.png"
                    width="343"
                    height="345"
                    loading="lazy"
                    alt="shape"
                    className="shape shape-2 move-anim"
                />
            </div>
        </section>
    );
};

export default Services;
