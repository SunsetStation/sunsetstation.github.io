$.getJSON("https://api.github.com/repos/SunsetStation/SunsetStation/pulls?state=closed", function(data) {

    function displayItems(items) {
        if(!items.length) { return; }
        $(items.shift()).appendTo(".pulls").fadeIn(300, displayItems.bind(null, items));
    }

    var items = [];
    var mergeStatus = '';
    $('.pulls .throbber-loader').remove();
    $.each(data.slice(0,5), function(key, val) {
        if (data[key]['merged_at'] == null) {
            mergeStatus = "assets/closed.svg";
        } else {
            mergeStatus = "assets/merged.svg";
        }
        items.push("<div class='pull-request'><a href='" + data[key]['user']['html_url'] + "'><img class='avatar' src='" + data[key]['user']['avatar_url'] + "'></img></a><a href='" + data[key]['html_url'] + "'><h5 class='title'>" + "<img class='mergestatus' src='" + mergeStatus + "'>" + data[key]['title'] + "</h5></a></div>");
    });

    displayItems(items);
});
