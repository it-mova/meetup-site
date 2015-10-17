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

var MenuPanelView = React.createClass({
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