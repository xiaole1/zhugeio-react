import React from 'react';
import './indexnav.css';
import {Link} from 'react-router';
import $ from 'jquery';
import Denglu from './denglu';
import Zhuce from './zhuce';

import logo from './img/logo.png';
var biaodan1={backgroundColor:"#0ea1eb",border:"none",color:"#fff"}

var indexnavbg={backgroundColor:"#fff",height:79,width:"100%",position: "fixed",top: 0,zIndex:10};

export default class IndexNav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={indexnavbg}>
                <ul className="indexnav_ul">
                    <li><a href='#'><img src={logo}/></a></li>
                    <li>
                        <a href='chanpin.html' >产品</a>
                        <ul>
                            <li><a href="#">全面数据采集</a></li>
                            <li><a href="#">领先用户模型</a></li>
                            <li><a href="#">深入分析场景</a></li>
                            <li><a href="#">开放技术平台</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='#'>解决方案</a>
                        <ul>
                            <li><a href="#">教育培训</a></li>
                            <li><a href="#">零售电商</a></li>
                            <li><a href="#">金融服务</a></li>
                            <li><a href="#">新媒体服务</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='/#'>客户案例</a>
                        <ul>
                            <li><a href="#">教育培训</a></li>
                            <li><a href="#">零售电商</a></li>
                            <li><a href="#">金融服务</a></li>
                            <li><a href="#">新媒体服务</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>价格</a></li>
                    <li><a href='#'>学院</a></li>
                    <li><a href='#'>预约演示</a></li>
                    <li><a href='#'>关于我们</a></li>

                </ul>

                <ul className="biaodan">
                    <li><a href="./denglu.html">登陆</a></li>
                    <li><a href="./zhuce.html" style={biaodan1}>免费注册</a></li>
                </ul>

            </div>
        )
    }
}
