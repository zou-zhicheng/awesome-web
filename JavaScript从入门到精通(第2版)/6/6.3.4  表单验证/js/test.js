var rank;
var ranknum;
var user_name;
var user_item; 
var user_email;
var email_validityState;

function load(){
    rank = document.myform.user_rank;
    ranknum = document.getElementById('ranknum');
    rank.addEventListener("change",changerank,false);

    user_name = document.getElementById('user_name');
    user_name.addEventListener("change",checkname,false);

    user_item = document.getElementById("user_item");
    user_item.addEventListener("change",checkitem,false);
}
function changerank(){
    ranknum.innerHTML = rank.value;
}
function checkname(){
    if (isname(user_name.value)==null) {
        user_name.setCustomValidity("请输入真实的中文名字！");
        user_name.validationMessage;
    }
    else{
        user_name.setCustomValidity("");
    }
}
function isname(str){
    var reg = /^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$/;
    return reg.exec(str);
}

function checkitem(){
    if(isitem(user_item.value)==null){
        user_item.setCustomValidity("请正确选择比赛项目！");
        user_item.validationMessage;
    }
    else{
        user_item.setCustomValidity("");
    }
}
function isitem(str){
    if (!(str=="篮球"||str=="桌球"||str=="羽毛球")) {
        return null;
    }
    else {
        return 0;
    }
}
window.addEventListener("load",load,false);