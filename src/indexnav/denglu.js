import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


var style={
    wai:{
        width:500,
        height:600,
        margin:"auto",
        position:"absolute",
        left:0,
        top:0,
        right:0,
        bottom:0,
        textAlign:"center"
    },
    inputs:{
        width:467,
        htight:67,
        lineHeight:2,
        margin:20,
        border:"1px solid #ccc",
        borderRadius:5,
        fontSize:23,
        paddingLeft:15
    },
    inputw:{
        borderRadius:1
    },
    denglu:{
        width:467,
        height:70,
        fontSize:25,
        letterSpacing:10,
        border:"none",
        borderRadius:5,
        backgroundColor:"#23b1f2",
        color:"#fff",
    }
}


export default class Denglu extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(){
        var userName = $("input[name='userName']").val();
        var pwd = $("input[name='pwd']").val();
        $.ajax({
            type:"POST",
            url:"http://localhost/web40/denglu.php",
            data:{name:userName,passwd:pwd},
            async:false,
            success:function(data){

                if(data=="01"){
                    alert("登陆失败，请联系网站管理员");
                }else{
                    p=eval("("+data+")");
                }
            }
        })
    }
    render(){
        return(
            <div style={style.wai}>
                <h1>登陆诸葛io</h1>
                    <input type="text"style={style.inputs} placeholder="手机号/登陆邮箱" id="userName" name="userName"/>
                    <input type="password" style={style.inputs}placeholder="密码" id="pwd" name="pwd"/>
                    <input type="submit" value="登陆" style={style.denglu} id="submit"onClick={this.handleClick.bind(this)} />
            <div id="test"></div>
            </div>
        )
    }
}
ReactDom.render(
    <div>
        <Denglu />
    </div>,
    document.getElementById("eg")
);