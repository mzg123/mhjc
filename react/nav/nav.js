var React = require('react');
var reactRedux = require('react-redux')
require("./nav.css");
var Redux=require("redux");
var actions=require("../redux/actions.js");
var assist=require("../redux/assist.js");

var Modal=require("../../react/modal/modal.js");
var Modal2=require("../../react/modal/modal.js");

import { Link } from 'react-router';
var connect=reactRedux.connect,provider =reactRedux.Provider;

 class nav extends React.Component{
    constructor(){
        super();
    }
     getInitialState(){
         return {
             navData:{
                 type:"hor"
                 ,currentMenu:""
                 ,data:[
                     {
                       tag:"首页"
                       ,href:"/"

                     }
                     , {
                         tag:"财富管理"
                         ,MenuEc:"leave"
                         ,child:[
                             {
                                 tag:"p2p债券"
                                 ,href:"/m"
                             }
                             ,{
                                 tag:"p2p债券"
                                 ,href:"/m"
                             }
                         ]
                     }
                     , {
                         tag:"债权转让"
                         ,MenuEc:"leave"
                         ,child:[
                             {
                                 tag:"p2p债券"
                                 ,href:"/m"
                             }
                             ,{
                                 tag:"p2p债券"
                                 ,href:"/m"
                             }
                         ]
                     }
                     ,{
                         tag:"银谷课堂"
                         ,href:"/"

                     }
                 ]
             }
         }
     }
     createNav(data,props){
          var self=this;
         //{self.createNav(item.child,props)}
         return data.map(function(item,index){
             let c="position_a menu "+item.MenuEc;
             if(item.child){

                 return (
                  <li data-name={item.tag} props={props} onMouseLeave={self.mouseLeave.bind(self)} onMouseEnter={self.mouseEnter.bind(self)}>
                         <Link to={item.href}>{item.tag}</Link>
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
                    <li ><Link to={item.href}>{item.tag}</Link></li>
                )


             }
         })
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
       var modal1=this.props.modal1;
       var modal2=this.props.modal2;
        return (
            <div className="con">
                    <div id="nav" className="nav">
                        <ul >
                         { r }
                        </ul>
                    </div>
                {this.props.children}
                <Modal option={ modal1 }   />
                <Modal2 option={ modal2 }     />
            </div>
        )
    }
}

const mapStateToProps =function (state) {
    return {
      navData:state.navCounter.navData,
       currentMenuEc:state.navCounter.navData.currentMenuEc
        ,modal1:state.navCounter.navData.modal_1_option
        ,modalState1:state.navCounter.navData.modal_1_option.modalState
        ,modalState2:state.navCounter.navData.modal_2_option.modalState
        ,modal2:state.navCounter.navData.modal_2_option
    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        changeMenu: function(ty,tag){
             dispatch({type:ty,tag:tag});
        }


    }
}

var navcon=connect(
    mapStateToProps,
    mapDispatchToProps
)(nav);
//export default navcon;
module.exports =navcon;