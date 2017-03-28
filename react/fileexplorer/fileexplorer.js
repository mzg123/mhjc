var React = require('react');
var reactRedux = require('react-redux')
require("./fileexplorer.scss");
var Redux=require("redux");
var actions=require("../../cms/my_cms/redux/actions.js");

var connect=reactRedux.connect,provider =reactRedux.Provider;

class fileexplorer extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){

    }
    getExtensions(ext){
        switch (ext){
            case "js":
            case "css":
            case "ftl":
            case "html":
            case "docx":
                return 'txt';
            case 'jpg':
            case 'ico':
                return 'pic';
            default :
                return 'folder';
        }
    }

    createSingleF(item,fn,props){

      function  itemClick(e){
          $(e.target).parent().parent().find(">li").removeClass('selected');
          $(e.target).parent().addClass('selected');
        }
        function itemDbClick(v,e){
             props.folderClick(v);
            $('#tree [data-path="'+v+'"]').parent().children("ul").toggle(100);
        }
        var c="thumbnail "+fn(item.value.split('.')[1]);
        return  (<li onDoubleClick={itemDbClick.bind(this,item.value)}  onClick={itemClick.bind(this)} key={item.text}>
            <div className={c}></div>
            <div className="name">{item.text}</div>
        </li>)
    }
    createFolder(folderInfo){
        var createSingleFv=this.createSingleF;
        var getExtensions=this.getExtensions;
        var props=this.props;
        if(folderInfo.child){
            return folderInfo.child.map(function(item,index){
                return  createSingleFv(item,getExtensions,props);
            });
        }else{
            return  createSingleFv(folderInfo);
        }
    }
    render(){
       var c=" fileexplorer "+(this.props.isShow?"":" display_n")
           ,selectFolder=this.props.selectFolder, list='';

        selectFolder.child&&(list=this.createFolder(selectFolder));
        return (
            <div id="fileexplorer" className={c} style={{width:'100%',height:'100%'}}>
                 <ul>
                 {list}
                 </ul>
            </div>
        )
    }
}

const mapStateToProps =function (state) {
    return {
        selectFolder:state.treeCounter.selectFolder
    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        saveFile:function(opt){
            dispatch(actions.saveFileContent(opt));
        }
        ,folderClick:function(path){
            dispatch({type:"showFolder",path:path});
        }
    }
}

var fileexplore=connect(
    mapStateToProps,
    mapDispatchToProps
)(fileexplorer);
//export default navcon;
module.exports =fileexplore;