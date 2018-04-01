                        $(document).ready(function() {
            
                            $.ajax({
                              url: "http://andredevelopment.mybigcommerce.com/brands/" 
            
                            }).done(function ( data ) {
                                var html = $(data);
                                var items = $('.SubBrandListGrid li', html);
            
                                items.each(function() {
                                    var link = $('a', this);
                                    if(link){
                                    var txt = $(link).text();   
                                    var brname = '%%GLOBAL_BrandName%%'
                                    var replaced1 = txt.trim();                             
                                    var replaced2 = String(brname.replace(/ /g, ' '));     
                                        if( replaced1 === replaced2 ){
                                            var img = $('img', this).attr('src');
                                            $('#brand-logo').attr('src', img);
                                        }        
                                    }                                
                                });                             
                            });
                        });





                        $(document).ready(function() {
            
                            $.ajax({
                              url: "http://andredevelopment.mybigcommerce.com/brands/" 
            
                            }).done(function ( data ) {
                                var html = $(data);
                                var items = $('.SubBrandListGrid li', html);
            
                                items.each(function() {
                                    var link = $('a', this);
                                    if(link){
                                    var txt = $(link).text();   
                                    var brname = '%%GLOBAL_BrandName%%'
                                    var replaced1 = txt.trim();                             
                                    var replaced2 = String(brname.replace(/ /g, ' '));     
                                        if( replaced1 === replaced2 ){
                                            var img = $('img', this).attr('src');
                                            $('#brand-logo').attr('src', img);
                                        }        
                                    }                                
                                });                             
                            });
                        });







                        $(document).ready(function() {
            
                            $.ajax({
                              url: "http://andredevelopment.mybigcommerce.com/brands/" 
            
                            }).done(function ( data ) {
                                var html = $(data);
                                var items = $('.SubBrandListGrid li', html);
            
                                items.each(function() {
                                    var link = $('a', this);
                                    if(link){
                                    var txt = $(link).text();   
                                    var brname = '%%GLOBAL_TrailBrandName%%'
                                    var replaced1 = txt.trim();                             
                                    var replaced2 = String(brname.replace(/ /g, ' '));     
                                        if( replaced1 === replaced2 ){
                                            var img = $('img', this).attr('src');
                                            $('#brand-logo').attr('src', img);
                                        }        
                                    }                                
                                });                             
                            });
                        });


