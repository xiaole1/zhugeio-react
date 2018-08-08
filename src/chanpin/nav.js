import React from 'react';
import './nav.css';
import {Link} from 'react-router';
import './erjicaidan';
import $ from 'jquery';
var navbg={backgroundColor:"#2a3551"};


export default class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state={
            services:[],
            view:"type_a"
        }
    }

    componentDidMount(){
        const xhr=new XMLHttpRequest()
        xhr.open("POST","http://localhost/web40/nav.php",true)
        xhr.send()
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4){//0未连接 1发送请求 2数据接收 3 交互中 4 完成
                if(xhr.status==200){
                    let gotS=xhr.responseText;
                    let gotServices = eval("("+gotS+")");
                    // console.log(gotServices)
                    this.setState({
                        services: gotServices
                    })
                }
            }
        }

    }
    render(){
        const serviceShows=this.state.services.map((service,index)=>{
            // console.log(service);
            if(service.sig=="0"){
                return <li key={index}><Link to={service.path}>{service.con}</Link></li>
            }else{
                return<li className="yiji" key={index}><Link to=''>{service.con}</Link>
                    <ul id="erji">
                        {
                            service.child.map((item,inde)=>{
                            return <li key={inde}><Link to={item.path}>{item.con}</Link></li>
                            })
                        }
                    </ul>
                </li>
            }
        })
        return(
            <div>
                <div style={navbg}>
                    <ul className="nav_ul">
                        {serviceShows}
                    </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
}
