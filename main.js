// @ts-nocheck
 $(document).ready(function () {
    let title = $("h1");
    title.css("color", "red");

    let helloWorld = $("[title=helloWorld]");
    helloWorld.css("font-size","10px");

    let p = $("#example");

    p.css({"background-color": "black", "color": "white"});

    let s = $(".segundo");
    s.css({"font-weight": "bold"});

    let button = $("#clickMe");
    let hide = $("#hide");
    let show = $("#show");
    let animate = $("#animate");

    button.dblclick(() => {
        $(s).attr("hidden", !$(s).attr("hidden"));
        if($(s).attr("hidden")) $(button).text("Show"); 
        else  $(button).text("Hide")
    });

    hide.click(() => {
        $(s).fadeOut();
    });
    show.click(() => {
        $(s).fadeIn();
    });

    // $(p).mouseenter(function () { 
    //    $(s).slideUp(); 
    // });

    // $(p).mouseleave(function () { 
    //     $(s).slideDown(); 
    //  });

    $(animate).click(function (e) { 
        $(p).animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
          }, 3000, function() {
            // Animation complete.
          });
        
    });

     
    // $(button).mouseover(function () { 
    //     alert("Adios");
    // });

 });