import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import Nav from './nav/nav';
import IndexNav from './indexnav/indexnav';
import Jypx from './mokuai/mokuai';

var imgstyle={width:"100%",margin:"0 auto",padding:"0 atuo",height:215};
import Case_banner from './case_banner.png';


class Content extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div><img src={Case_banner} alt="" style={imgstyle}/></div>
        )
    }
}
ReactDom.render(
    <div>
        <IndexNav />
        <Content />
        <Nav />
        <Jypx />
    </div>,
    document.getElementById("eg")
);