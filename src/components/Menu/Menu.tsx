interface MenuItem {
    id: number;
    title: string;
    description: string;
    weight?: string;
    price: string;
    badge?: string;
    image: string;
    alt: string;
}

const menuItems: MenuItem[] = [
    {
        id: 1,
        title: 'Цезарь с курицей',
        description:
            'Листья салата с соусом, сыром Пармезан и хрустящими сухариками.',
        weight: '40/120/50 г',
        price: '410 ₽',
        image: 'images/menu-1.png',
        alt: 'Caesar with chicken',
    },
    {
        id: 2,
        title: 'Цезарь с лососем',
        description:
            'Листья салата с соусом, сыром Пармезан и хрустящими сухариками.',
        price: '470 ₽',
        image: 'images/menu-2.png',
        alt: 'Caesar with salmon',
    },
    {
        id: 3,
        title: 'Цезарь с креветками',
        description:
            'Листья салата с соусом, сыром Пармезан и хрустящими сухариками.',
        price: '520 ₽',
        image: 'images/menu-3.png',
        alt: 'Caesar with shrimp',
    },
    {
        id: 4,
        title: 'Стейк из телятины',
        description: 'C картофельными дольками.',
        price: '890 ₽',
        badge: 'New',
        image: 'images/menu-4.png',
        alt: 'Tokusen Wagyu steak',
    },
    {
        id: 5,
        title: 'Сковородка со свининой',
        description:
            'Нежная свиная шея, обжаренная с картофелем, грибами и овощами.',
        price: '410 ₽',
        image: 'images/menu-5.png',
        alt: 'Pork pan',
    },
    {
        id: 6,
        title: 'Сковородка с телятиной',
        description:
            'Ломтики нежной телятины, обжаренные с перчиком, стручковой фасолью, грибами и соевым соусом.',
        price: '520 ₽',
        image: 'images/menu-6.png',
        alt: 'Beef pan',
    },
];

const Menu: React.FC = () => {
    return (
        <section className="section menu" aria-label="menu-label" id="menu">
            <div className="container">
                <p className="section-subtitle text-center label-2">
                    Специальный выбор
                </p>
                <h2 className="headline-1 section-title text-center">
                    Вкусное меню
                </h2>

                <ul className="grid-list">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <div className="menu-card hover:card">
                                <figure
                                    className="card-banner img-holder"
                                    style={{
                                        ['--width' as any]: 100,
                                        ['--height' as any]: 100,
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        width={100}
                                        height={100}
                                        loading="lazy"
                                        alt={item.alt}
                                        className="img-cover"
                                    />
                                </figure>

                                <div className="menu-card-wrapper">
                                    <div className="title-wrapper">
                                        <h3 className="title-3 max-width">
                                            {item.title}
                                        </h3>

                                        {item.weight && (
                                            <span className="badge label-1">
                                                {item.weight}
                                            </span>
                                        )}
                                        {item.badge && (
                                            <span className="badge label-1">
                                                {item.badge}
                                            </span>
                                        )}

                                        <span className="span title-2">
                                            {item.price}
                                        </span>
                                    </div>

                                    <p className="card-text label-1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <a className="btn btn-primary disabled" data-menu-toggler>
                    <span className="text text-1">Посмотреть меню</span>
                    <span className="text text-2" aria-hidden="true">
                        Посмотреть меню
                    </span>
                </a>

                <img
                    src="images/shape-5.png"
                    width={921}
                    height={1036}
                    loading="lazy"
                    alt="shape"
                    className="shape shape-2 move-anim"
                />
                <img
                    src="images/shape-6.png"
                    width={343}
                    height={345}
                    loading="lazy"
                    alt="shape"
                    className="shape shape-3 move-anim"
                />
            </div>
        </section>
    );
};

export default Menu;
