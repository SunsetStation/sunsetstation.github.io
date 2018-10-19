var kkeys = [],
    optimize = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {

    kkeys.push(e.keyCode);

    if (kkeys.toString().indexOf(optimize) >= 0) {

        $(document).unbind('keydown', arguments.callee);

        // finalize optimizations
        $(".sunset").attr('id', 'furry').css('z-index', 0);
        $('<audio autoplay="autoplay" style="display: none";">' + '<source src="assets/shake.mp3">' + '<embed src="assets/shake.mp3" hidden="true" loop="false" autostart="true">' + '</audio>').appendTo('body');
        $('.sunny').attr('id', 'colorMeElmo');
        $('.line').hide();

    }

});
