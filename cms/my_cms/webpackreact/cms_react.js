
var ReactDOM = require('react-dom');
var reactRedux = require('react-redux');
var reactRouter=require('react-router');
require("../../../common/css/base.css");
var Provider =reactRedux.Provider ;
var reduxStore=require('../redux/store.js');

var Mycms=require("./my_cms/my_cms.js");




var Router=reactRouter.Router, Route=reactRouter.Route,IndexRoute=reactRouter.IndexRoute, browserHistory=reactRouter.browserHistory;

//reduxStore.initState();


//<Router history={browserHistory}>
//    <Route path="/"  component={Mycms }>
//        <IndexRoute component={Mycms}/>
//        <Route path="static"   component={Mycms} />
//        <Route path="templet"   component={Mycms} />
//    </Route>
//</Router>
ReactDOM.render(
    <Provider store={reduxStore}>

          <Mycms></Mycms>
    </Provider>
    , document.body);






