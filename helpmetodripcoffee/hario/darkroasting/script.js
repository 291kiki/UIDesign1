setTimeout(function() {
    var text1 = document.getElementById("text1");
    text1.style.opacity = "1";
    setTimeout(function() {
        text1.style.opacity = "0";
        setTimeout(function() {
            var text2 = document.getElementById("text2");
            text2.style.opacity = "1";
            setTimeout(function() {
                text2.style.opacity = "0";
                setTimeout(function() {
                    var text3 = document.getElementById("text3");
                    text3.style.opacity = "1";
                    setTimeout(function() {
                        text3.style.opacity = "0";
                    }, 15000);
                }, 1000);
            }, 15000);
        }, 1000);
    }, 15000);
}, 0);
