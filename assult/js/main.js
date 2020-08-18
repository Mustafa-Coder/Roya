$(function(){ // start jquery 

    // variables:
    let gr = $("#graphic"), // graphic 
        vi = $("#video"), // video 
        wv = $("#webv"), // w develop  
        wd = $("#webd"), // w design 
        // modals: 
        gmode = $("#mgraphic"),
        mwv = $("#mwv"),
        mwd = $("#mwd"),
        navmobilebtn = $("#menubtn"),
        navmobile = $("#menu"),
        close = $("#close");
    // hide card service: 
    // graphic:
    gr.on("click",function(){
        // hidden card 
        $(this).fadeOut(200);
        vi.fadeOut(200);
        wv.fadeOut(200);
        wd.fadeOut(200);
        // show information about graphic: 
        gmode.css({"display":"block"}); 
    });
    // web develop 
    wv.on("click",function(){
        // hidden card 
        $(this).fadeOut(200);
        vi.fadeOut(200);
        wv.fadeOut(200);
        wd.fadeOut(200);
        gr.fadeOut(200);
        // show information about graphic: 
        mwv.css({"display":"block"}); 
    });
    // web design 
    wd.on("click",function(){
        // hidden card 
        $(this).fadeOut(200);
        vi.fadeOut(200);
        wv.fadeOut(200);
        wd.fadeOut(200);
        gr.fadeOut(200);
        // show information about graphic: 
        mwd.css({"display":"block"}); 
    });
    // modals: 
    // mgraphic 
    gmode.on("click",function(){
        // hidden card 
        $(this).fadeOut(200);
        gr.show(600);
        vi.show(600);
        wv.show(600);
        wd.show(600);
        // show information about graphic: 
        gmode.css({"display":"none"});
    });
    // web develop  
    mwv.on("click",function(){
        // hidden card 
        $(this).fadeOut(200);
        gr.show(600);
        vi.show(600);
        wv.show(600);
        wd.show(600);
        // show information about graphic: 
        mwv.css({"display":"none"});
    });
     // web design  
     mwd.on("click",function(){
        // hidden card 
        $(this).fadeOut(200);
        gr.show(600);
        vi.show(600);
        wv.show(600);
        wd.show(600);
        // show information about graphic: 
        mwd.css({"display":"none"});
    });


    // nav mobile on and off:
    navmobilebtn.on("click",function(){
        navmobile.css({"display":"block"});
    });
    // close nav: 
    close.on("click",function(){
        navmobile.css({"display":"none"});
    });
}); // . end jquery