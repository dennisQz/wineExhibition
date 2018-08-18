(function(w){
  var vp = document.createElement("meta");
  vp.setAttribute("name", "viewport");
  vp.setAttribute("content", "width=" + (/ip(?=od|ad|hone)/i.test(navigator.userAgent) ? w : w+",target-densitydpi=" + (750 / (navigator.appVersion.indexOf("GT-I9100G") > -1 ? 375 : screen.width) * devicePixelRatio * 160)) + ",user-scalable=no");
  document.getElementsByTagName("head")[0].appendChild(vp);
})(750);

function is_weixn(){
  var ua = navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i)=="micromessenger") {
    return true;
  } else {
    return false;
  }
}
function getquest(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)
  {
    return unescape(r[2]);
  }
  return null;
};
//function setCookie(name,value)
//{
//  var Days = 30;
//  var exp = new Date();
//  exp.setTime(exp.getTime() + Days*24*60*60*1000);
//  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
//}
//
//function getCookie(name)
//{
//  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
//  if(arr=document.cookie.match(reg))
//      return unescape(arr[2]);
//  else
//      return null;
//}
//function delCookie(name)
//{
//  var exp = new Date();
//  exp.setTime(exp.getTime() - 1);
//  var cval=getCookie(name);
//  if(cval!=null)
//      document.cookie= name + "="+cval+";expires="+exp.toGMTString();
//}
function getCookie(objName) {
  var arrStr = document.cookie.split("; ");
  for ( var i = 0; i < arrStr.length; i++) {
    var temp = arrStr[i].split("=");
    if (temp[0] == objName)
      return unescape(temp[1]);
  }
}

function addCookie(objName, objValue, objHours) {
  var str = objName + "=" + escape(objValue);
  if (objHours > 0) {
    var date = new Date();
    var ms = objHours * 3600 * 1000;
    date.setTime(date.getTime() + ms);
    str += "; expires=" + date.toGMTString();
  }
  document.cookie = str;
}
function randoms(min,max){//1-10:1,11
  return Math.floor(min+Math.random()*(max-min));
}
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}
function checkMobile(s) {
  var regu = /^[1][3-8][0-9]{9}$/;
  var re = new RegExp(regu);
  if (re.test(s)) {
    return true;
  } else {
    return false;
  }
}
function trim(str){
  str = str.replace(/^(\s|\u00A0)+/,'');
  for(var i=str.length-1; i>=0; i--){
    if(/\S/.test(str.charAt(i))){
      str = str.substring(0, i+1);
      break;
    }
  }
  return str;
}
function isChinese(s)
{
  var ret=true;
  for(var i=0;i<s.length;i++)
    ret=ret && (s.charCodeAt(i)>=10000);
  return ret;
}
function str8(strs)
{
  var para =strs;
  para.length;
  var len = 0;
  for (var i = 0; i < para.length; i++) {
    var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
    if(reg.test(para)){
      len += 2;
    } else {
      len += 1;
    }
  }
  var str = strs;
  if(len>8){
    strs= cutstr(str,8);
  }
  return strs;
}
function cutstr(str,len)
{
  var str_length = 0;
  var str_len = 0;
  str_cut = new String();
  str_len = str.length;
  for(var i = 0;i<str_len;i++)
  {
    a = str.charAt(i);
    str_length++;
    if(escape(a).length > 4)
    {
      //中文字符的长度经编码之后大于4
      str_length++;
    }
    str_cut = str_cut.concat(a);
    if(str_length>=len)
    {
      return str_cut;
    }
  }
  //如果给定字符串小于指定长度，则返回源字符串；
  if(str_length<len){
    return  str;
  }
}