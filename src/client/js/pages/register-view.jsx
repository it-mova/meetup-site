var RegisterView = React.createClass({
    render: () =>
        <section id="register">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Зарэгістравацца</h2>

                        <h3 className="section-subheading text-muted">Калі ласка запоўніце ўсе палі.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Імя *"
                                               id="name" required
                                               data-validation-required-message="Калі ласка, увядзіце імя."/>

                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Эмэйл *"
                                               id="email" required
                                               data-validation-required-message="Калі ласка, увядзіце эмэйл."/>

                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <div className="form-group">
                                        <input type="tel" className="form-control"
                                               placeholder="Тэлефон *" id="phone" required
                                               data-validation-required-message="Калі ласка, увядзіце тэлефон."/>

                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                                            <textarea className="form-control" placeholder="Паведамленне *"
                                                                      id="message" required
                                                                      data-validation-required-message="Калі ласка ўвядзіце паведамленне."></textarea>

                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                    <button type="submit" className="btn btn-xl">Зарэгістравацца!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
});