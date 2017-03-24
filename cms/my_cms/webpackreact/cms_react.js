
var ReactDOM = require('react-dom');
var reactRedux = require('react-redux');
var reactRouter=require('react-router');
require("../../../common/css/base.css");
var Provider =reactRedux.Provider ;
var reduxStore=require('../redux/store.js');
var Tree=require("../../../react/tree_react/my_cms_tree.js");
var Mycms=require("./my_cms/my_cms.js");




var Router=reactRouter.Router, Route=reactRouter.Route,IndexRoute=reactRouter.IndexRoute, browserHistory=reactRouter.browserHistory;

reduxStore.initState();



ReactDOM.render(
    <Provider store={reduxStore}>
        <Mycms></Mycms>
    </Provider>
    , document.body);






