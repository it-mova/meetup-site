var TimerView = React.createClass({
    getInitialState: function(){
        return { timeLeft: this.getTimeLeft() };
    },
    componentDidMount() {
        this.timer = setInterval(this.tick, 50);
    },
    componentWillMount() {
        clearInterval(this.tick);
    },
    tick() {
        this.setState({timeLeft: this.getTimeLeft()});
    },
    getTimeLeft() {
        return new Date('2015-11-21T12:00:00').getTime() - new Date().getTime();
    },
    render() {
        var format = time => `${time < 10 ? '0' : ''}${time}`;
        var timeLeft = Math.round(this.state.timeLeft / 1000);
        var seconds = timeLeft % 60;
        var minutes = (timeLeft - seconds) / 60 % 60;
        var hours = (timeLeft - seconds - minutes * 60) / (60 * 60) % 24;
        var days = Math.floor(timeLeft / (60 * 60 * 24));
        return (
            <div className="intro-heading">
                <div>
                    <div>{days}</div>
                    <p>Дзён</p>
                </div>
                <div>
                    <div>{format(hours)}</div>
                    <p>Гадзін</p>
                </div>
                <div>
                    <div>{format(minutes)}</div>
                    <p>Хвілін</p>
                </div>
                <div>
                    <div>{format(seconds)}</div>
                    <p>Секунд</p>
                </div>
            </div>
        )
    }
});

var HeaderView = React.createClass({
    render: () =>
        <header>
            <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in">Да сустрэчы засталося</div>
                    <TimerView/>
                    <a href="#howtofind" className="page-scroll btn btn-xl">Далей</a>
                </div>
            </div>
        </header>
});
