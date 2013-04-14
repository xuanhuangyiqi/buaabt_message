function show(text)
{
    var n = window.webkitNotifications.createNotification('favicon.png', '未来花园', '未读消息'+text);
    n.show();
}
var xhr;
if (window.webkitNotifications)
{
    setInterval(function(){
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange=state_change;
        xhr.open("GET", "http://buaabt.cn/", true);
        xhr.send(null);
    }, 60000);
}
function state_change()
{
    if (xhr.readyState == 4)
    {
        if (xhr.status == 200)
        {
            var r = xhr.responseText;
            var div=document.createElement("div");
            div.innerHTML=r;
            var message=div.getElementsByClassName("crly")[1];
            var noti_text =  message.childNodes[5].innerText;
            if (noti_text != '您有0条新通知') show(noti_text);
            var message=div.getElementsByClassName("crly")[0];
            var noti_text =  message.childNodes[5].innerText;
            if (noti_text != '您有0条新消息') show(noti_text);
        }
        else alert("Problem retrieving data:" + xhr.statusText + xhr.status);
    }
}
