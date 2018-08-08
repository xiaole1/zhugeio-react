<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
$str='[
        {"con":"全面数采集","sig":"0","path":"Quanmian","child":[
            {"con":"EasyOps解决方案","path":"c_component1"},
            {"con":"版本比较及购买","path":"c_component2"}]},
        {"con":"领先用户模型","sig":"1","path":"Lingxian",},
        {"con":"深入分析场景","sig":"0","path":"Shenru"},
        {"con":"开放技术平台","sig":"0","path":"Kaifang"}
    ]';
echo $str;
?>