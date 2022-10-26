const Pagination = (props) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <nav aria-label="page-navigation">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link dot" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link dot" href="#">
                                .....
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                6
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                7
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link dot" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;
