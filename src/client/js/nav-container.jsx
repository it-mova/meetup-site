var menuItemsData = [
    {
        key: "howtofind",
        name: "Як патрапіць?"
    },
    {
        key: "topics",
        name: "Даклады"
    },
    {
        key: "register",
        name: "Зарэгістравацца"
    }
];

var Menu = React.createClass({
    render: function () {
        var menuItems = this.props.items.map(item => {
            return (
                <li key={item.key}>
                    <a className="page-scroll" href={`#${item.key}`}>{item.name}</a>
                </li>
            );
        });
        return (
            <ul className="nav navbar-nav navbar-right">
                <li className="hidden">
                    <a href="#page-top"></a>
                </li>
                {menuItems}
            </ul>
        )
    }
});

var NavContainer = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand page-scroll" href="#page-top">JavaScript Minsk</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <Menu items={this.props.items}/>
                    </div>
                </div>
            </nav>
        )
    }

});

var HeaderView = React.createClass({
    render: () =>
        <header>
            <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in">Welcome To Our Studio!</div>
                    <div className="intro-heading">It's Nice To Meet You</div>
                    <a href="#services" className="page-scroll btn btn-xl">Tell Me More</a>
                </div>
            </div>
        </header>
});

var HowToFindView = React.createClass({
    render: () =>
        <section id="howtofind">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Services</h2>

                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                        <h4 className="service-heading">E-Commerce</h4>

                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                            maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
                        <h4 className="service-heading">Responsive Design</h4>

                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                            maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                        <h4 className="service-heading">Web Security</h4>

                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                            maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
});

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

var RegisterView = React.createClass({
    render: () =>
        <section id="register">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Contact Us</h2>

                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form name="sentMessage" id="contactForm" novalidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name *"
                                               id="name" required
                                               data-validation-required-message="Please enter your name."/>

                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Your Email *"
                                               id="email" required
                                               data-validation-required-message="Please enter your email address."/>

                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="form-group">
                                        <input type="tel" className="form-control"
                                               placeholder="Your Phone *" id="phone" required
                                               data-validation-required-message="Please enter your phone number."/>

                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                                            <textarea className="form-control" placeholder="Your Message *"
                                                                      id="message" required
                                                                      data-validation-required-message="Please enter a message."></textarea>

                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button type="submit" className="btn btn-xl">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
});

var FooterView = React.createClass({
    render:() =>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <span className="copyright">Copyright &copy; Your Website 2014</span>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li><a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li><a href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline quicklinks">
                            <li><a href="#">Privacy Policy</a>
                            </li>
                            <li><a href="#">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
})

var ApplicationView = React.createClass({
    render: () =>
        <div id="applicationView" style={{height: "100%", width: "100%"}}>
            <NavContainer items={menuItemsData}/>
            <HeaderView/>
            <HowToFindView/>
            <TopicsView/>
            <RegisterView/>
            <FooterView/>
        </div>
});

ReactDOM.render(
    <ApplicationView />
    , document.getElementById('nav-container')
);