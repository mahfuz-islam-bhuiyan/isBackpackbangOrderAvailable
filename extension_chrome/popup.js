document.addEventListener('DOMContentLoaded', function() {

    httpGetAsync("https://api.backpackbang.com/api/v1/throttle/allow-checkout", function(responseText) {

        var response = JSON.parse(responseText);
        document.getElementById('status').textContent = response && response.allow == true ?
            "Open for Order! Go place your order right away" :
            "Arghh! Better give it another try on " + getDateTime(response.nextThrottleResetAt);

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

function getDateTime(strTime) {
    var now = new Date(strTime);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        var day = '0' + day;
    }
    if (hour.toString().length == 1) {
        var hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        var minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        var second = '0' + second;
    }
    return day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;
}
