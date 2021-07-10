document.addEventListener("DOMContentLoaded", function () {
    //URL capturada de maneira global
    var titleCurrent = "";
    var urlCurrent = "";

    document.querySelector('#btnAddUrl').addEventListener('click', function () {

      chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs =>{
          titleCurrent = tabs[0].title;
          urlCurrent = tabs[0].url;
      })

        splitRrlCurrent = urlCurrent.split('/')[2] 

        const scriptFFUF = "FFUF -c -w common.txt -u http://" + splitRrlCurrent +"/FUZZ"
        const scriptFFUFs = "FFUF -c -w common.txt -u https://" + splitRrlCurrent +"/FUZZ"

        document.getElementById("link").innerHTML = 
        '<p> porta 80 </p>'+
        '<div class="resultado">'+
            '<span id="nome">'+titleCurrent +'</span>'+
            '</div> <hr> <div>'+   
            '<span id="link">'+ scriptFFUF +' </span>'+
        '</div>'+
        '<br><p> porta 443 </p>'+
        '<div class="resultado">'+
            '<span id="nome">'+titleCurrent +'</span>'+
            '</div> <hr> <div>'+   
            '<span id="link">'+ scriptFFUFs +' </span>'+
        '</div>'

      })
})