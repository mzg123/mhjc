var ReactDOM = require('react-dom');
var reactRedux = require('react-redux');
var reactRouter=require('react-router');
require("../../../common/css/base.css");
var Provider =reactRedux.Provider ;
var reduxStore=require('../redux/store.js');
var Tree=require("../../../react/tree_react/yg_cms_tree.js");
var Nav=require("../../../react/nav/nav.js");




var Router=reactRouter.Router, Route=reactRouter.Route,IndexRoute=reactRouter.IndexRoute, browserHistory=reactRouter.browserHistory;

reduxStore.initState();


ReactDOM.render(
<Provider store={reduxStore}>
<Nav></Nav>
</Provider>
    , document.getElementById("nav"));

ReactDOM.render(
    <Provider store={reduxStore}>
<Tree></Tree>
    </Provider>
    , document.getElementById("left"));








