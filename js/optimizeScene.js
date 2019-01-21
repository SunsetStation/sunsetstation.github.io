var kkeys = [],
    optimize = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {

    kkeys.push(e.keyCode);

    if (kkeys.toString().indexOf(optimize) >= 0) {

        $(document).unbind('keydown', arguments.callee);

        // finalize optimizations
        $('<video autoplay="autoplay">' + '<source src="assets/gnome.webm" type="video/webm">' + '</video>').appendTo('.sunset');
        $('.sunny').attr('id', 'colorMeElmo');
        $('.line').hide();

    }

});
