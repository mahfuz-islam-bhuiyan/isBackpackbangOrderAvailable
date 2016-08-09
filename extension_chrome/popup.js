document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');

    httpGetAsync("https://api.backpackbang.com/api/v1/throttle/allow-checkout", function(responseText) {

        var response = JSON.parse(responseText);        
        document.getElementById('status').textContent = response && response.allow == true ?
            "Open for Order! Go place your order right away" : "Arghh! Try sometimes later maybe.";

    });

}, false);

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}
