let topics = [
    {
        speaker: "Юльян Місюкевіч",
        topic: "isotope",
        image: "img/topics/isotope.png",
        ref: "isotopeModal"
    },
    {
        speaker: "Ігар Цімошка",
        topic: "slack",
        image: "img/topics/slack.png",
        ref: "slackModal"
    },
    {
        speaker: "Міхась Бутылін",
        topic: "EcmaScript 2015",
        image: "img/topics/es6.png",
        ref: "ecmaScriptModal"
    }
];

var TopicItemsView = React.createClass({
    render () {
        var viewItems = topics.map(topic =>
            <div key={topic.topic} className="col-md-4 col-sm-6 portfolio-item">
                <a href={`#${topic.ref}`} className="portfolio-link" data-toggle="modal">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <i className="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src={topic.image} className="img-responsive" alt=""/>
                </a>

                <div className="portfolio-caption">
                    <h4>{topic.speaker}</h4>

                    <p className="text-muted">{topic.topic}</p>
                </div>
            </div>
        );
        return (
            <div className="row">
                {viewItems}
            </div>
        )
    }
});

var TopicsView = React.createClass({
    render: () =>
        <section id="topics" className="portfolio bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Даклады</h2>

                        <h3 className="section-subheading text-muted">Вы пачуеце пра наступныя тэхналогіі.</h3>
                    </div>
                </div>
                <TopicItemsView/>
            </div>
        </section>
});