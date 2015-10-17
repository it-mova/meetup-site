var TopicsView = React.createClass({
    render: () =>
        <section id="topics" className="portfolio bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Portfolio</h2>

                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img src="img/portfolio/roundicons.png" className="img-responsive" alt=""/>
                        </a>

                        <div className="portfolio-caption">
                            <h4>Round Icons</h4>

                            <p className="text-muted">Graphic Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
});