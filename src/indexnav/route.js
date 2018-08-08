import React from 'react';
import {hashHistory, Link} from 'react-router';
import Denglu from "./denglu";
import Zhuce from "./zhuce";
import {Router,Route,hashHistory} from 'react-router';


export default class Route extends React.Component{
    render(){
        return (
            <div>

                <Router history={hashHistory}>
                    <Route path="/" component={Denglu} />
                    <Route path="/denglu" component={Denglu}/>
                    <Route path='/zhuce' component={Zhuce}/>
                </Router>
            </div>
        )
    }
}
