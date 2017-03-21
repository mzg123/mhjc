import React from "react";
import {Link} from 'react-router';
//var Link=reactRouter.Link;
export default class navtest  extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="con"> <Link to="/roller">轮播图</Link><Link to="/home">主页</Link>
                  <Link to="/m">测试</Link>
            {this.props.children}
            </div>
        );
    }
}