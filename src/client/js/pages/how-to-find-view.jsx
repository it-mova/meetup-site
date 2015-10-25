var HowToFindView = React.createClass({
    componentDidMount() {
        function initialize() {
            var mapCanvas = document.getElementById('map');
            var latLng = new google.maps.LatLng(53.9283718, 27.6066042);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(mapCanvas, mapOptions)
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
                        <h2 className="section-heading">Як патрапіць</h2>

                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-6 text-center">
                        <div id="map"></div>
                    </div>
                    <div className="col-md-6">
                        <div className="how-to-find-description">
                            <h4 className="service-heading">11 лістапада ў 11:00</h4>

                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                                maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
});