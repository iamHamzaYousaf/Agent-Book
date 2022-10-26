const Header = (props) => {
    return (
        <header>
            <div className="row">
                <div
                    className="header-section header-bg"
                >
                    <div className="custom-container">
                        <div className="head-main-menu">
                            <div className="comp-logo">
                                <img src="images/header-agent-logo.png" alt="logo" />
                            </div>
                            <div className="main-menu" id="header-toggle">
                                <ul className="hover-menu">
                                    <li>
                                        <img src="/images/country-icon.png" />
                                    </li>
                                    <ul>
                                        <li className="hover-menu-tem-1">
                                            <img src="/images/menu-icon.png" />
                                        </li>
                                        <li className="hover-menu-tem-2">
                                            <img src="/images/profile.png" />
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className="header-txt">
                            <h2>Find The Perfect Real Estate Agent</h2>
                            <p>
                                Make your search and sale easier and faster by connecting
                                with one of our
                            </p>
                            <p>expert local agent in your neighborhood </p>
                            <div class="search-bar">
                                <div class="input-group">
                                    <i className="fa fa-search fa-2x search-icon" />
                                    <input type="text" class="form-control custum-box" />
                                    <div class="input-group-append">
                                        <button type="button" class="btn btn-primary btn-color">
                                            Search Agents
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
