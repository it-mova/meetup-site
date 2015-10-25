var TopicItemsView = React.createClass({
    render () {
        var viewItems = this.props.topics.map(topic =>
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
                    <h4>{topic.topic}</h4>

                    <p className="text-muted">{topic.speaker}</p>
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
    render() {
      return (
        <section id="topics" className="portfolio bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Даклады</h2>

                        <h3 className="section-subheading text-muted">Вы пачуеце пра наступныя тэхналогіі.</h3>
                    </div>
                </div>
                <TopicItemsView topics={this.props.topics}/>
            </div>
        </section>
      )
    }
});