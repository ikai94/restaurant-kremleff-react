const About = () => {
    return (
        <section
            className="section about text-center"
            aria-labelledby="about-label"
            id="about"
        >
            <div className="container">
                <div className="about-content">
                    <p className="label-2 section-subtitle" id="about-label">
                        Наша история
                    </p>

                    <h2 className="headline-1 section-title">
                        Каждый вкус рассказывает историю
                    </h2>

                    <p className="section-text">
                        Рады приветствовать Вас в уютном ресторане "Kremleff"!
                        Только у нас синергия традиционно русского душевного
                        гостеприимства и русских блюд в авторском исполнении. Мы
                        искренне желаем стать для Вас тем уютным домом, в
                        который хочется возвращаться вновь и вновь, и где
                        хочется отметить самые важные события Вашей жизни,
                        разделяя улыбки с близкими и родными людьми.
                    </p>

                    <div className="contact-label">
                        Забронируйте позвонив нам
                    </div>

                    <a
                        href="tel:+79002626900"
                        className="body-1 contact-number hover-underline"
                    >
                        +7 (900) 26-26-900
                    </a>
                </div>

                <figure className="about-banner">
                    <img
                        src="images/about-banner.jpg"
                        width="570"
                        height="570"
                        loading="lazy"
                        alt="about banner"
                        className="w-100"
                        data-parallax-item
                        data-parallax-speed="1"
                    />

                    <div
                        className="abs-img abs-img-1 has-before"
                        data-parallax-item
                        data-parallax-speed="1.75"
                    >
                        <img
                            src="images/about-abs-image.jpg"
                            width="285"
                            height="285"
                            loading="lazy"
                            alt=""
                            className="w-100"
                        />
                    </div>

                    <div className="abs-img abs-img-2 has-before">
                        <img
                            src="images/krem-logo.png"
                            width="134"
                            height="134"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                </figure>

                <img
                    src="images/shape-3.png"
                    width="197"
                    height="194"
                    loading="lazy"
                    alt=""
                    className="shape"
                />
            </div>
        </section>
    );
};

export default About;
