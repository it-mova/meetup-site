var HowToFindView = React.createClass({
    componentDidMount() {
        function initialize() {
            var mapCanvas = document.getElementById('map');
            var latLng = new google.maps.LatLng(53.891295, 27.537461);
            var mapOptions = {
                center: latLng,
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(mapCanvas, mapOptions);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: 'Hello World!'
            });
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    },
    render: () =>
        <section id="howtofind">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Як дабрацца</h2>

                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6 text-center">
                        <div id="map"></div>
                    </div>
                    <div className="col-md-6">
                        <div className="how-to-find-description">
                            <h4 className="service-heading">6 лютага а 12:00</h4>

                            <span className="text-muted">
                                Бізнэс клуб IMAGURU, г. Мінск, вул. Фабрыцыуса 4, заля Nordic.<br/>
                                <b>Калі ласка, <a href='#register'>зарэгіструйцеся!</a></b>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
});