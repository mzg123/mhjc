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
        this.props.menuClick({display:'none',left:0,top:0,isFile:this.props.menuDisplayInfo.isFile,path:this.props.menuDisplayInfo.path});
    }
    render(){

        var style={display: this.props.menuDisplayInfo.display,left:this.props.menuDisplayInfo.left,top:this.props.menuDisplayInfo.top},menuClick=this.menuClick;
        return (
            <div className="contextmenu" style={style}>
               <ul>
                  <li onClick={menuClick.bind(this)}>查看</li>
               </ul>
            </div>
        )
    }
}

const mapStateToProps =function (state) {
    return {
      menuDisplayInfo:state.contextmenuCounter.rightMenu
    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
          menuClick:function(opt){
              dispatch({type:'showMenu',display:opt.display,left:opt.left,top:opt.top});
              if(opt.isFile==1||opt.isFile=="1"){
                  dispatch(actions.dbFile(opt.path));
              }else{
                  dispatch({type:"showFolder",path:opt.path});
              }
          }
    }
}

var contextmen=connect(
    mapStateToProps,
    mapDispatchToProps
)(contextmenu);
//export default navcon;
module.exports =contextmen;