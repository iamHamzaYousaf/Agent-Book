const ChatAgent = (props) => {
    return (
        <div className="our-company chat-agent-container">
            <div className="custom-container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="company-content">
                            <h4>CHAT WITH AN AGENT</h4>
                            <h3>Real Time Conversation </h3>
                            <p>
                                You should choose an agent you are comfortable working
                                with and who you feel has your best interests at heart.
                                you should be able to get your best agent by considering
                                the following simple steps:
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
                                        Search for an agent by name or location{" "}

                                    </li>
                                    <li>
                                        Filter the results base on your interestss{" "}

                                    </li>
                                    <li>
                                        Select and contact your best match agent{" "}

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
                    <div className="col-lg-6">
                        <div className="our-company-img">
                            <img
                                src="images/real-time-logo.png"
                                alt="our-company"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatAgent;
