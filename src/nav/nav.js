import React from 'react';
import './css/nav.css';
import $ from 'jquery';
var navbg={backgroundColor:"#2a3551"};

export default class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={navbg}>
                <ul className="nav_ul">
                    <li><a href='#edu' className="nav_edu">教育培训</a></li>
                    <li><a href='#retial' className="nav_retial">零售电商</a></li>
                    <li><a href='#financial' className="nav_financial">金融服务</a></li>
                    <li><a href='#content' className="nav_content">新媒体内容</a></li>
                    <li><a href='#sass' className="nav_sass">企业服务</a></li>
                    <li><a href='#car' className="nav_car">汽车服务</a></li>
                    <li><a href='#o2o' className="nav_o2o">O2O服务</a></li>
                    <li><a href='#tool' className="nav_tool">互联网社交</a></li>
                </ul>
            </div>
        )
    }
}
