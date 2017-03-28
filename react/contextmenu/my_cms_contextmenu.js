var React = require('react');
var reactRedux = require('react-redux')
require("./my_cms_contextmenu.scss");
var Redux=require("redux");
var actions=require("../../cms/my_cms/redux/actions.js");
import { Link } from 'react-router';
var connect=reactRedux.connect,provider =reactRedux.Provider;

class contextmenu extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){

    }
    menuClick(){

        this.props.menuClick('none',0,0);
    }
    render(){

        var style={display: this.props.menuDisplayInfo.display,left:this.props.menuDisplayInfo.left,top:this.props.menuDisplayInfo.top},menuClick=this.menuClick;
        return (
            <div className="contextmenu" style={style}>
               <ul>
                  <li onClick={menuClick.bind(this)}>查看</li>
                  <li  onClick={menuClick.bind(this)}>删除</li>
               </ul>
            </div>
        )
    }
}

const mapStateToProps =function (state) {
    console.log(state.contextmenuCounter);
    return {
      menuDisplayInfo:state.contextmenuCounter.disPlayInfo
    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
          menuClick:function(display,left,top){
              dispatch({type:'showMenu',display:display,left:left,top:top});
          }
    }
}

var contextmen=connect(
    mapStateToProps,
    mapDispatchToProps
)(contextmenu);
//export default navcon;
module.exports =contextmen;