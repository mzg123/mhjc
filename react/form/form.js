var React = require('react');
require("./form.scss");
var reactRedux = require('react-redux')
var Redux=require("redux");
var Input=require("../input/input.js");
//var actions=require("../redux/actions.js");
var reactRouter=require('react-router');
//
var connect=reactRedux.connect,provider =reactRedux.Provider,Link=reactRouter.Link;


var Form = React.createClass({

    render: function () {

        return (
           <form>
             <Input option={{field:this.props.formData.fields[0],inputBlur:this.props.inputBlur}} />
             <Input option={{field:this.props.formData.fields[1],inputBlur:this.props.inputBlur}} />
           {this.props.formData.isValid?<div>error</div>:<div>right</div>}
           </form>
        );
    }
});


const mapStateToProps =function (state) {
    return {
        formData:state.formCounter.formData
    }
}

const mapDispatchToProps = function(dispatch ,ownProps) {
    return {
        onItemClick: function(id){

        }
        ,inputBlur:function(obj){
            dispatch(obj);
        }
    }
}

var Form=connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);
module.exports =Form;

