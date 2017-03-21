var React=require("react");
require("./input.scss");
var Input=React.createClass({
    blur:function(evt){

        var tip="",valid=this.props.option.field.valid,val=evt.target.value;
        console.log(this.props.option);
        if(valid)
        if(valid.require){
            if(valid.require.value){

                val.length>0?"":(tip=valid.require.tip);
            }
        }
        this.props.option.inputBlur({type:"onblur",data:{name:this.props.option.field.name,tip:tip}})
    },
    render:function(){
        var type="text";//this.props.option.type;

        return (
            <div className="input">
               <label  >{this.props.option.field.name}:</label> <input type={type} onBlur={this.blur.bind(this)}/>
                 <div className="tip">{this.props.option.field.tip}</div>
            </div>

        )
    }

})

module.exports=Input;