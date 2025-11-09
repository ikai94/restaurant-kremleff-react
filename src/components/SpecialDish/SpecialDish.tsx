const SpecialDish = () => {
    return (
        <section
            className="special-dish text-center"
            aria-labelledby="dish-label"
        >
            <div className="special-dish-banner">
                <img
                    src="images/special-dish-banner.jpg"
                    width="940"
                    height="900"
                    loading="lazy"
                    alt="special dish"
                    className="img-cover"
                />
            </div>

            <div className="special-dish-content bg-black-10">
                <div className="container">
                    <img
                        src="images/badge-1.png"
                        width="28"
                        height="41"
                        loading="lazy"
                        alt="badge"
                        className="abs-img"
                    />

                    <p className="section-subtitle label-2">
                        Специальное блюдо
                    </p>

                    <h2 className="headline-1 section-title">
                        Салат фирменный «Kremleff»
                    </h2>

                    <p className="section-text">
                        Нежнейшее сочетание форели, красной икры с помидором и
                        яйцом
                    </p>

                    <div className="wrapper">
                        <del className="del body-3">750₽</del>
                        <span className="span body-1">590₽</span>
                    </div>

                    <a className="btn btn-primary disabled" data-menu-toggler>
                        <span className="text text-1">Посмотреть меню</span>
                        <span className="text text-2" aria-hidden="true">
                            Посмотреть меню
                        </span>
                    </a>
                </div>
            </div>

            <img
                src="images/shape-4.png"
                width="179"
                height="359"
                loading="lazy"
                alt=""
                className="shape shape-1"
            />

            <img
                src="images/shape-9.png"
                width="351"
                height="462"
                loading="lazy"
                alt=""
                className="shape shape-2"
            />
        </section>
    );
};

export default SpecialDish;
