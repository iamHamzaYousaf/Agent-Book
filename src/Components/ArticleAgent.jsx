
import Pagination from "./Pagination";

const ArticleAgent = (props) => {
    return (
        <div className="news-article">
            <div className="custom-container">
                <div className="head-title">
                    <h2>Latest Articles by Agents</h2>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-4">
                        <div className="article-top">
                            <span>
                                <img src="images/icon-19.png" className="img-fluid" />
                                <span>MARCH   21, 2022</span>
                            </span>
                            <span>
                                <img src="images/book-icon.png" className="img-fluid" />
                                <span>5 MIN READ</span>
                            </span>
                        </div>
                        <div className="article-block">
                            <img
                                src="images/article-img1.png"
                                alt="article"
                                className="img-fluid"
                            />
                            <div className="article-details">
                                <h3>How To Get Multiple Offers On Your Home</h3>
                                <div className="article-bottom">
                                    <span>
                                        <img src="images/pro-1.png" className="img-fluid" />
                                        <a href="#">JOAN HOLLIE</a>
                                    </span>
                                    <span>
                                        <img src="images/v-icon.png" className="img-fluid" />
                                        <span>SELLING</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="article-top">
                            <span>
                                <img src="images/icon-19.png" className="img-fluid" />
                                <span>MARCH   21, 2022</span>
                            </span>
                            <span>
                                <img src="images/book-icon.png" className="img-fluid" />
                                <span>5 MIN READ</span>
                            </span>
                        </div>
                        <div className="article-block">
                            <img
                                src="images/article-img2.png"
                                alt="article"
                                className="img-fluid"
                            />
                            <div className="article-details">
                                <h3>10 Home Buying Tips For First-Time Home Buyers</h3>
                                <div className="article-bottom">
                                    <span>
                                        <img src="images/pro-2.png" className="img-fluid" />
                                        <a href="#">HORTONS</a>
                                    </span>
                                    <span>
                                        <img src="images/v-icon.png" className="img-fluid" />
                                        <span>BUYING</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="article-top">
                            <span>
                                <img src="images/icon-19.png" className="img-fluid" />
                                <span>MARCH   21, 2022</span>
                            </span>
                            <span>
                                <img src="images/book-icon.png" className="img-fluid" />
                                <span>5 MIN READ</span>
                            </span>
                        </div>
                        <div className="article-block">
                            <img
                                src="images/article-img3.png"
                                alt="article"
                                className="img-fluid"
                            />
                            <div className="article-details">
                                <h3>15 Simple And Relaxing Decor Ideas To Transform Your Home </h3>
                                <div className="article-bottom">
                                    <span>
                                        <img src="images/pro-3.png" className="img-fluid" />
                                        <a href="#">JOAN HOLLIE</a>
                                    </span>
                                    <span>
                                        <img src="images/v-icon.png" className="img-fluid" />
                                        <span>BUYING</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
    );
};

export default ArticleAgent;
