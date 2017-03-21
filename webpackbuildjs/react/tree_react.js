var ReactDOM = require('react-dom');
var reactRedux = require('react-redux');
var reactRouter=require('react-router');
require("../../common/css/base.css");
var Provider =reactRedux.Provider ;
var reduxStore=require('../../react/redux/store.js');
var Tree=require("../../react/tree_react/tree.js");
var Roller=require("../../react/roller/roller.js");
var Test=require("../../react/tree_react/Test.js");
var Tabs=require("../../react/tabs/tab.js");
var Form=require("../../react/form/form.js");
var TabComtent=require("../../react/tabs/tabComtent.js");
var Modal=require("../../react/modal/modal.js");
var ModalTest=require("../../react/modal/modalTest.js");
import navtest from "../../react/nav/navtest.js";
import nav from "../../react/nav/nav.js";

//var  App=require("../block/tree_react/reactredux.js");
var Router=reactRouter.Router, Route=reactRouter.Route,IndexRoute=reactRouter.IndexRoute, browserHistory=reactRouter.browserHistory;

reduxStore.initState();



//ReactDOM.render(
//    <Router history={browserHistory}>
//        <Route path="/"  component={nav}/>
//    </Router>
//    , document.getElementById("nav"));

function d(){console.log(3);}
ReactDOM.render(

    <Provider store={reduxStore}>
        <Router history={browserHistory}>

            <Route path="/"  component={nav }>
                <IndexRoute component={Tree}/>
                <Route path="roller"   component={Roller} />
                <Route path="test"  onLeave={d} component={Test}/>
                <Route path="tabs" outerClick={d}  onLeave={d} component={Tabs}/>
                <Route path="tabcomtent" outerClick={d}  onLeave={d} component={TabComtent}/>
                <Route path="modal"   onLeave={d} component={Modal}/>
                //<Route path="modals"    onLeave={d} component={ModalTest}/>
                <Route path="form"   component={Form}/>
                <Route path="tree"  onLeave={d} onEnter={d} component={Tree} />
            </Route>


        </Router>

    </Provider>
    , document.getElementById("con"));








