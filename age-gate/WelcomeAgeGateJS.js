    if(document.cookie.indexOf("VISITED_BEFORE")==-1){
        document.cookie = "VISITED_BEFORE = 1";
        if(document.cookie.indexOf("VISITED_BEFORE")!=-1)
            window.location.replace("%%GLOBAL_ShopPath%%/age-verification/");
    }
