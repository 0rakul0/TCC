var btnAddUrln = document.getElementById("btnAddUrln");
btnAddUrln.addEventListener("click", creatLinkFfuf);

var titleCurrent = "";
var urlCurrent = "";

window.onload = function(){
    chrome.tabs.query({active: true, lastFocusWindow: true}, tabs =>{
        titleCurrent = tabs[0].title;
        urlCurrent = tabs[0].url;
    }) 
}

function creatLinkFfuf(){
    var dicio = {
        title: titleCurrent,
        url: urlCurrent
    }
    var newJson = JSON.stringify(dicio);
}