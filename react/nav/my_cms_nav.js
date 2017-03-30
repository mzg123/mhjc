var React = require('react');
var reactRedux = require('react-redux')
require("./my_cms_nav.css");
var Redux=require("redux");
var actions=require("../../cms/my_cms/redux/actions.js");
var assist=require("../redux/assist.js");



import { Link } from 'react-router';
var connect=reactRedux.connect,provider =reactRedux.Provider;

 class nav extends React.Component{
    constructor(){
        super();
    }

     createNav(data,props){
          var self=this;
         //{self.createNav(item.child,props)}
         return data.map(function(item,index){
             let c="position_a menu "+item.MenuEc;
             if(item.child){

                 return (
                  <li data-name={item.tag} props={props} onMouseLeave={self.mouseLeave.bind(self)} onMouseEnter={self.mouseEnter.bind(self)}>
                         <a  onClick={self.onClick.bind(self,item.href)}>{item.tag}</a>

                         <ul data-name={item.tag} className={c}>
                         {
                             item.child.map(function(itemc,indexc){
                                 return ( <li  data-name={item.tag}><Link to={itemc.href}>{itemc.tag}</Link></li>);
                             })
                             }
                         </ul>
                     </li>
                 )
             }else{

                return(
                    <li >
                        <a  onClick={self.onClick.bind(self,item.href)}>{item.tag}</a>
                    </li>
                )


             }
         })
     }
     onClick(pathType,evt){

         this.props.clickItem(pathType);
     }
     mouseEnter(evt){

         this.props.changeMenu("enter",$(evt.target).parent().attr("data-name"));
     }
     mouseLeave(evt){
         this.props.changeMenu("leave",$(evt.target).parent().attr("data-name"));
     }
    render(){
        let navData=this.props.navData;
        let r=this.createNav(navData.data,this.props.changeMenu);
        return (
            <div className="con">
                    <div id="nav" className="nav">
                        <ul >
                         { r }
                        </ul>
                    </div>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps =function (state) {
    return {
      navData:state.navCounter.navData,
       currentMenuEc:state.navCounter.navData.currentMenuEc

    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        changeMenu: function(ty,tag){
             dispatch({type:ty,tag:tag});
        }
        ,clickItem:function(pathType,path){
            dispatch(actions.getFileInfo(pathType));

            dispatch({type:"showFolder",path:path});
        }

    }
}

var navcon=connect(
    mapStateToProps,
    mapDispatchToProps
)(nav);
//export default navcon;
module.exports =navcon;