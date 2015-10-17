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

var ApplicationView = React.createClass({
    render: () =>
        <div id="applicationView" style={{height: "100%", width: "100%"}}>
            <MenuPanelView items={menuItemsData}/>
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