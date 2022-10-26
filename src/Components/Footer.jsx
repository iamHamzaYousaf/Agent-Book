const Footer = (props) => {
    return (
        <footer>
            <div className="custom-container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-logo">
                            <img src="images/header-agent-logo.png" alt="logo" className="img-fluid" />
                        </div>
                        <div className="footer-txt">
                            <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>
                        </div>

                        <ul className="social-media-icon">
                            <li>
                                <img src="/images/insta-icon.png" />
                            </li>
                            <li>
                                <img src="/images/ball-icon.png" />
                            </li>
                            <li>
                                <img src="/images/twitter-icon.png" />
                            </li>
                            <li>
                                <img src="/images/youtube-icon.png" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-info">
                        <h3>Company</h3>
                        <ul>
                            <li>
                                <a href="aboutus.html">About</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact{' '}<span>We’re hiring</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-info">
                        <h3>Agentbook</h3>
                        <ul>
                            <li>
                                <a href="platform.html">Search for agent</a>
                            </li>
                            <li>
                                <a href="#">Search for sale</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-info">
                        <h3>Resources</h3>
                        <ul>
                            <li>
                                <a href="#">Articles</a>
                            </li>
                            <li>
                                <a href="#">Guides</a>
                            </li>
                            <li>
                                <a href="#">Real Estate News</a>
                            </li>
                            <li>
                                <a href="#">Property Alerts</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-bottom-bg">
                            <div className="footer-bottom">
                                <div className="left-sect">
                                    2022 Agentbook All Rights Reserved
                                </div>
                                <div className="right-sect">
                                    <span>Terms & Conditions</span>&nbsp;&nbsp;{" "}
                                    <span>Privacy Policy</span>&nbsp;&nbsp;{" "}
                                    <span>Cookie Policy</span>&nbsp;&nbsp;{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
