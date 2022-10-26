import Pagination from "./Pagination";

const TopRatedAgent = (props) => {
    return (
        <div className="our-services">
            <div className="custom-container">
                <div className="our-services-header">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Toronto’s Top Rated Agents</h2>
                            <p>Clients loved working with these agents</p>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mt-6">
                        <div className="our-services-block">
                            <div className="trade-ciircle">
                                <img
                                    src="images/agent_1.png"
                                    alt="Real-estate-crowdfunding1"
                                />
                            </div>
                            <div className="services-block">
                                <div className="services-block-top-header">
                                    <h2>Tim Hortons</h2>
                                    <span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span>{" "} 5.0</span>
                                    </span>
                                </div>
                                <p>
                                    Tim is a real estate agent at Kaleidico Realty, with
                                    over 8 years of experience. Lynn prides himself in
                                    satisfying his clients with the <span>...More</span>
                                </p>
                                <hr />
                                <div className="services-block-btn">
                                    <button type="button" class="btn btn-primary btn-color">
                                        Contact Agent
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-6">
                        <div className="our-services-block">
                            <div className="trade-ciircle">
                                <img
                                    src="images/agent_2.png"
                                    alt="Real-estate-crowdfunding1"
                                />
                            </div>
                            <div className="services-block">
                                <div className="services-block-top-header">
                                    <h2>Joan Wrigley</h2>
                                    <span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span>{" "} 5.0</span>
                                    </span>
                                </div>
                                <p>
                                    Tim is a real estate agent at Kaleidico Realty, with
                                    over 8 years of experience. Lynn prides himself in
                                    satisfying his clients with the <span>...More</span>
                                </p>
                                <hr />
                                <div className="services-block-btn">
                                    <button type="button" class="btn btn-primary btn-color">
                                        Contact Agent
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-6">
                        <div className="our-services-block">
                            <div className="trade-ciircle">
                                <img
                                    src="images/agent_3.png"
                                    alt="Real-estate-crowdfunding1"
                                />
                            </div>
                            <div className="services-block">
                                <div className="services-block-top-header">
                                    <h2>Lydia Hollie</h2>
                                    <span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span>{" "} 5.0</span>
                                    </span>
                                </div>
                                <p>
                                    Tim is a real estate agent at Kaleidico Realty, with
                                    over 8 years of experience. Lynn prides himself in
                                    satisfying his clients with the <span>...More</span>
                                </p>
                                <hr />
                                <div className="services-block-btn">
                                    <button type="button" class="btn btn-primary btn-color">
                                        Contact Agent
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 mt-6">
                        <div className="our-services-block">
                            <div className="trade-ciircle">
                                <img
                                    src="images/agent_4.png"
                                    alt="Real-estate-crowdfunding1"
                                />
                            </div>
                            <div className="services-block">
                                <div className="services-block-top-header">
                                    <h2>Dave Lordsky</h2>
                                    <span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span>{" "} 5.0</span>
                                    </span>
                                </div>
                                <p>
                                    Tim is a real estate agent at Kaleidico Realty, with
                                    over 8 years of experience. Lynn prides himself in
                                    satisfying his clients with the <span>...More</span>
                                </p>
                                <hr />
                                <div className="services-block-btn">
                                    <button type="button" class="btn btn-primary btn-color">
                                        Contact Agent
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Pagination />
            </div>
        </div>
    );
};

export default TopRatedAgent;
