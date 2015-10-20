var TopicDescriptionView = React.createClass({
  render() {
    return (
      <div className="portfolio-modal modal fade" id={this.props.topic.ref} tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl">
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>{this.props.topic.topic}</h2>
                  <p className="item-intro text-muted">{this.props.topic.shortDescription}</p>
                  <img className="img-responsive img-centered" src={this.props.topic.image} alt=""/>
                  <div>
                    <div dangerouslySetInnerHTML={{__html: this.props.topic.longDescription}}></div>
                  </div>
                  <button type="button" className="btn btn-primary" data-dismiss="modal">
                    <i className="fa fa-times"></i>
                    <span> Вярнуцца</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});