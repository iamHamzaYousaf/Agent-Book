const ConnectAgent = (props) => {
    return (
        <div className="row newsletter pt-80 white">
            <div className="col-lg-6 p-0">
                <div className="custom-container">
                    <h3 className="mb-3 sectiontitle">
                        Connect with an expert local agent{" "}
                    </h3>
                    <p className="mb-32 mt-2 subscribe-txt">
                        Our agents are here to help you. Let’s make your home search or
                        sale easier.
                    </p>
                </div>
            </div>
            <div className="col-lg-6 p-0">
                <form className="myform" onsubmit="event.preventDefault();">
                    <div className="newsletter-form new-home-newsletter-form">
                        <input type="text" placeholder="Search by name or location" />
                        <button class="btn" type="submit">
                            <img src="images/search-icon.png"></img>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConnectAgent;
