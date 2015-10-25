'use strict';
var RegisterView = React.createClass({
    render() {
        return (

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
                                            <input type="text" ref="username" className="form-control"
                                                   placeholder="Імя *"
                                                   id="name"/>

                                            <p className="help-block text-danger"></p>
                                        </div>

                                        <div className="form-group">
                                            <input type="text" ref="email" className="form-control"
                                                   placeholder="Эмэйл *"
                                                   id="email"/>

                                            <p className="help-block text-danger"></p>
                                        </div>

                                        <div className="form-group">
                                            <input type="tel" className="form-control" ref="phone"
                                                   placeholder="Тэлефон *" id="phone"/>

                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" ref="captcha"
                                                   placeholder="Код бяспекі *" id="captcha"/>

                                            <div className="captcha-spacer"/>

                                            <img id="captcha-image" src="/captcha.jpg"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button type="submit" className="btn btn-xl" onClick={this.register}>
                                            Зарэгістравацца!
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
});