import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto">
                    <a href="#">S K N H</a>
                </h1>
                {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

                <nav
                    id="navbar"
                    className={` navbar order-last order-lg-0 ${
                        isOpen ? "navbar-mobile" : ""
                    } `}>
                    <ul>
                        <li onClick={() => setIsOpen(false)}>
                            <a
                                className="nav-link scrollto active"
                                href="#hero">
                                Home
                            </a>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <a className="nav-link scrollto" href="#about">
                                About
                            </a>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <a className="nav-link scrollto" href="#services">
                                Services
                            </a>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <a
                                className="nav-link scrollto"
                                href="#departments">
                                Departments
                            </a>
                        </li>
                        <li onClick={() => setIsOpen(false)}>
                            <a className="nav-link scrollto" href="#doctors">
                                Doctors
                            </a>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                                <span>Drop Down</span>{" "}
                                <i className="bi bi-chevron-down"></i>
                            </a>
                            <ul>
                                <li>
                                    <a href="#">Drop Down 1</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">
                                        <span>Deep Drop Down</span>{" "}
                                        <i className="bi bi-chevron-right"></i>
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Deep Drop Down 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 3</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 4</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 5</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Drop Down 2</a>
                                </li>
                                <li>
                                    <a href="#">Drop Down 3</a>
                                </li>
                                <li>
                                    <a href="#">Drop Down 4</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="nav-link scrollto" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i
                        className={`fa ${
                            isOpen ? "fa-times" : "fa-bars"
                        }  mobile-nav-toggle`}
                        onClick={() => setIsOpen((isOpen) => !isOpen)}></i>
                </nav>

                <a href="#appointment" className="appointment-btn scrollto">
                    <span className="d-none d-md-inline">Make an</span>{" "}
                    Appointment
                </a>
            </div>
        </header>
    );
}

export default Navbar
