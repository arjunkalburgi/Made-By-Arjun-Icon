function madeByArjun() {
    $("#made-by-arjun").attr("src", "https://rawgit.com/askalburgi/Made-By-Arjun-Icon/master/Logo.svg"); 

    $("#made-by-arjun").hover(function () {
        // animate "Made by Arjun" msg
    })
}

// ref: https://stackoverflow.com/a/6813409
if (typeof jQuery == 'undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
    jqTag.type = 'text/javascript';
    jqTag.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
    jqTag.onload = madeByArjun;
    headTag.appendChild(jqTag);
} else {
    madeByArjun();
}