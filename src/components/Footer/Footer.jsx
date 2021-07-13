import React from "react";
import "./Footer.scss";
import "../../components/App/App.css";
// import trauma from "../../assets/img/trauma.png";
// import family from "../../assets/img/family.png";
// import child from "../../assets/img/child.png";


const Footer = () => {
    return (
        <div className="footer">
            <footer className="text-center text-lg-start text-muted">
                {/*!-- Section: Links  -->*/}
                <section className="mt-5">
                    <div className="container text-center text-md-start mt-5">
                        {/*!-- Grid row -->*/}
                        <div className="row mt-3">
                            {/*!-- Grid column -->*/}
                            <div className="text-left col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
                                {/*!-- Content -->*/}
                                <p>
                                    <a href="#!" className="text-style text-uppercase">Головна</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-style text-uppercase">Про асоціацію</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-style text-uppercase">Календар</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-style text-uppercase">Новини</a>
                                </p>
                            </div>
                            {/*!-- Grid column -->*/}

                            {/*!-- Grid column -->*/}
                            <div className="text-left col-md-2 col-lg-2 col-xl-2 mb-4 mt-5 mr-5">
                                {/*!-- Links -->*/}
                                <p>
                                    <a href="#!" className="text-style text-uppercase">Партнери</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-style text-uppercase">Сертифікація</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-style text-uppercase">Освіта</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-style text-uppercase">Контакти</a>
                                </p>
                            </div>
                            {/*!-- Grid column -->*/}

                            {/*!-- Grid column -->*/}
                            <div className="col-md-3 col-lg-2 col-xl-2 ml-5 mb-4 mt-5">
                                {/*!-- Links -->*/}
                                <h6 className="footer-header mb-4">
                                    Членство
                                </h6>
                                <p>
                                    <a href="#!" className="text-style">База членів</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-style">Приєднатися</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-style">Членські внески</a>
                                </p>
                            </div>
                            {/*!-- Grid column -->*/}

                            {/*!-- Grid column -->*/}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
                                {/*!-- Links -->*/}
                                <h6 className="footer-header mb-4">
                                    Контакти
                                </h6>
                                <p className="text-style"><i className="fas fa-home me-3"></i>вул. Чистяківська, 7/75, Київ, 06062, Україна</p>
                                <p className="text-style"><i className="fas fa-envelope me-3"></i>apsyct@gmail.com</p>
                                <p className="text-style"><i className="fas fa-phone me-3"></i>+38 097 750 22 57</p>
                            </div>
                            {/*!-- Grid column -->*/}
                        </div>
                        {/*!-- Grid row -->*/}
                    </div>
                </section>
                {/*!-- Section: Links  -->*/}

                {/*!-- Copyright -->*/}
                <div className="text-center p-4">
                    Асоціація психологічного консультування та травматерапії, 2020
                    {/*<a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>*/}
                </div>
                {/*!-- Copyright -->*/}
            </footer>
        </div>
    )
};

export default Footer;
