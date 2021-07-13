import React from "react";
import "./Contacts.scss";
import "./style.css"
import "./bootstrap.min.css"


const Contacts = () => {
    return (
        <div className="container mt-4">
            <div className="row align-items-stretch no-gutters contact-wrap">
                <div className="col-md-8">
                    <div className="form h-100">
                        <h3 className="contacts-header">Надішліть нам повідомлення</h3>
                        <form className="mb-5" method="post" id="contactForm" name="contactForm"
                              noValidate="novalidate">
                            <div className="row">
                                <div className="col-md-6 form-group mb-5">
                                    <label htmlFor="" className="col-form-label text">Ім'я</label>
                                    <input type="text" className="form-control" name="name" id="name"
                                           placeholder="Ваше ім'я"/>
                                </div>
                                <div className="col-md-6 form-group mb-5">
                                    <label htmlFor="" className="col-form-label text">Е-мейл</label>
                                    <input type="text" className="form-control" name="email" id="email"
                                           placeholder="Ваш Е-мейл"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group mb-5">
                                    <label htmlFor="message" className="col-form-label text">Повідомлення</label>
                                    <textarea className="form-control " name="message" id="message" cols="30" rows="4"
                                              placeholder="Write your message"> </textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <input type="submit" value="Відправити"
                                           className="btn btn-primary rounded-0 py-2 px-4 btn-customisation"/>
                                        <span className="submitting">apsyct@gmail.com</span>
                                </div>
                            </div>
                        </form>
                        <div id="form-message-warning mt-4"> </div>
                        <div id="form-message-success">
                            Повідомлення відправлено. Дякуємо.
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-info h-100 con">
                        <h3 className="contacts-header">Контакти</h3>
                        <p className="mb-5 text-style">Ви також можете надіслати нам лист, скориставшись
                            формою зворотньго зв’язку</p>
                        <ul className="list-unstyled">
                            <li className="d-flex text">
                                <span className="wrap-icon icon-room mr-3"> </span>
                                <span className="text">вул. Чистяківська, 7/75, Київ, 06062, Україна</span>
                            </li>
                            <li className="d-flex">
                                <span className="wrap-icon icon-phone mr-3"> </span>
                                <span className="text">+38 097 750 22 57</span>
                            </li>
                            <li className="d-flex">
                                <span className="wrap-icon icon-envelope mr-3"> </span>
                                <span className="text">apsyct@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    };

export default Contacts;
