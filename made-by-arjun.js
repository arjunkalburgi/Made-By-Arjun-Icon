function madeByArjun() {

    $("#made-by-arjun").click(function () { 
        
     });

    // https://css-tricks.com/cascading-svg-fill-color/
    $.get('https://rawgit.com/askalburgi/Made-By-Arjun-Icon/master/dependencies/Logo.svg', function (doc) {
    
        var svg = doc.children[0]; 
        svg.setAttribute("fill", $("#made-by-arjun").css("color")); 
        
        $("#made-by-arjun").append(svg); 
        $("#made-by-arjun").click(function () {
            window.open("http://www.arjunkalburgi.com", '_blank', '', '');
        })
    });

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