function Header() {
    return (
        <>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1 style={{ maxWidth: "800px" }}>
                        Welcome to SWARNAKAMAL NURSING HOME
                    </h1>
                    <h2>We are team of talented docters</h2>
                    <a href="#about" className="btn-get-started scrollto">
                        Get Started
                    </a>
                </div>
            </section>

            {/* <!-- ======= Why Us Section ======= --> */}
            <section id="why-us" className="why-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-stretch">
                            <div className="content">
                                <h3>Why Choose SWARNAKAMAL NURSING HOME?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Duis aute irure dolor in reprehenderit
                                    Asperiores dolores sed et. Tenetur quia eos.
                                    Autem tempore quibusdam vel necessitatibus
                                    optio ad corporis.
                                </p>
                                <div className="text-center">
                                    <a href="#" className="more-btn">
                                        Learn More{" "}
                                        <i className="bx bx-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 d-flex align-items-stretch">
                            <div className="icon-boxes d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-receipt"></i>
                                            <h4>Quality Control System</h4>
                                            <p>
                                                Consequuntur sunt aut quasi enim
                                                aliquam quae harum pariatur
                                                laboris nisi ut aliquip
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-cube-alt"></i>
                                            <h4>Highly Professional Staff</h4>
                                            <p>
                                                Excepteur sint occaecat
                                                cupidatat non proident, sunt in
                                                culpa qui officia deserunt
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <div className="icon-box mt-4 mt-xl-0">
                                            <i className="bx bx-images"></i>
                                            <h4>Get Online Report</h4>
                                            <p>
                                                Aut suscipit aut cum nemo
                                                deleniti aut omnis. Doloribus ut
                                                maiores omnis facere
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header
