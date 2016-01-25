var menuItemsData = [
    {
        key: "howtofind",
        name: "Як дабрацца?"
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

var topics = [
    {
        speaker: "Вадзім Зенька",
        topic: "EcmaScript 2015. Частка 2.",
        image: "img/topics/es6.png",
        ref: "ecmaScriptModal2",
        shortDescription: "Новыя магчымасці JavaScript.",
        longDescription: '<div>Пасля таго, як <b>node.js</b> пачала падтрымліваць асноўныя магчымасці <b>ES6</b>, а кампілятары кшталту <b>Babel</b> падтрымліваюць больш за 70% функцыаналу - актуальнасць <b>EcmaScript 2015</b> высокая як ніколі!<br/>Вы пачуеце аб тым якія з гэтых магчымасцяў вы можаце выкарыстаць ужо сёння і пабачыце шмат тлумачальных прыкладаў па тэме!</div>'
    },
    {
        speaker: "Віталь Чараповіч",
        topic: "Flash To Html5",
        image: "img/topics/bannermaking.png",
        ref: "flashToHtml5Modal",
        shortDescription: "Баннермэйкінг у постфлэшавым свеце",
        longDescription: '<div>HTML5 замест флэша ў вытворчасці банераў: сакрэты рэкламнай інтэрнэт-індустрыі пасля самай масштабнай перабудовы, сучасныя тэхналогіі стварэння банераў, іх асаблівасці і абмежаванні.</div>'
    },
    {
        speaker: "Міхась Бутылін",
        topic: "Flowtype",
        image: "img/topics/flowtype.png",
        ref: "flowtypeModal",
        shortDescription: "Тыпізаваны JavaScript",
        longDescription: '<div>З ростам папулярнасці <b>JavaScript</b>, праэкты становяцца ўсё больш маштабнымі і складанымі. Статычная тыпізацыя ад <b>facebook</b> дапаможа ўтрымаць ваш код чыстым і карэктным.</div>'
    },
    {
        speaker: "Філіп Данэйка",
        topic: "Webpack",
        image: "img/topics/webpack.png",
        ref: "webpackModal",
        shortDescription: "Аўтаматызаваня сборка праэктаў",
        longDescription: '<div><b>webpack</b> - сборка праэктаў</div>'
    }
];

var ApplicationView = React.createClass({
    render() {
        var topicModals = topics.map(topic =>
            <TopicDescriptionView key={topic.ref} topic={topic}/>
          );
        return (
          <div id="applicationView" style={{height: "100%", width: "100%"}}>
              <MenuPanelView items={menuItemsData}/>
              <HeaderView/>
              <HowToFindView/>
              <TopicsView topics={topics}/>
              <RegisterView/>
              <FooterView/>
              {topicModals}
          </div>
        );
    }
});

ReactDOM.render(
    <ApplicationView />
    , document.getElementById('nav-container')
);
cbpAnimatedHeader();
activateScrolling();


