const ChooseAgent = (props) => {
    return (
        <div className="our-company">
            <div className="custom-container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="our-company-img">
                            <img
                                src="images/right-side-agent.png"
                                alt="our-company"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="company-content">
                            <h4>CHOOSING YOUR AGENT </h4>
                            <h3>How to choose your agent </h3>
                            <p>
                                You should choose an agent you are comfortable working
                                with and who you feel has your best interests at heart. In
                                order to make a decision, try asking prospective agents
                                the following:
                            </p>
                            <ul className="order-bullet">
                                <ul className="order-bullet-icon">
                                    <li>
                                        <img
                                            src="images/list-icon.png"
                                            alt="our-company"
                                            className="img-fluid"
                                        />{" "}
                                    </li>
                                    <li>
                                        <img
                                            src="images/list-icon.png"
                                            alt="our-company"
                                            className="img-fluid"
                                        />{" "}
                                    </li>
                                    <li>
                                        <img
                                            src="images/list-icon.png"
                                            alt="our-company"
                                            className="img-fluid"
                                        />{" "}
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        How and where your property will be advertised{" "}
                                    </li>
                                    <li>
                                        Ask to see examples of their success in selling
                                        properties like yours{" "}
                                    </li>
                                    <li>
                                        How often you can expect feedback from the agent while
                                        your property is on the marke{" "}
                                    </li>
                                </ul>
                            </ul>
                            <div className="our-company-btn">
                                <button type="button" class="btn btn-primary btn-color">
                                    <img src="images/search-icon.png"></img><span>Find an agent</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseAgent;
