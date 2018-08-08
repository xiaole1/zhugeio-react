import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import {Route,Router,hashHistory} from 'react-router';

import Quanmian from './quanmian';
import Lingxian from './lingxian';
import Shenru from './shenru';
import Kaifang from './kaifang';

import Nav from './nav';
import IndexNav from '../indexnav/indexnav';
import banner from './chanpinbanner.png';

var imgstyle={width:"100%",margin:"0 auto",padding:"0 atuo",height:215};



class Content extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div><img src={banner}/></div>
        )
    }
}
ReactDom.render(
    <div>
        <IndexNav />
        <Content />
        <Router history={hashHistory}>
            <Route path="/" component={Nav} >
                <Route path="/Quanmian" component={Quanmian} />
                <Route path="/Lingxian" component={Lingxian} />
                <Route path="/Shenru" component={Shenru} />
                <Route path="/Kaifang" component={Kaifang} />
            </Route>
        </Router>
    </div>,
    document.getElementById("eg")
);