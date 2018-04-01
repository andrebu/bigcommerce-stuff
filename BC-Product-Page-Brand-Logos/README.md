BigCommerce-Product-Page-Brand-Logos
====================================

BigCommerce Product Page Brand Logos which appear to the right, in the Product details section.  These logos will be dynamically pulled from the brand's respective brand page.

```HTML
                   <script type="text/javascript">    
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
                    </script>
```


=========================================================================================================
=========================================================================================================
=========================================================================================================



10.   Dynamic brand Logos
```HTML
                    <script type="text/javascript">    
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
                    </script>
```


```HTML 
<h1><img src="/templates/__custom/images/BrandDefault.gif" border="0" id="brand-logo">  
    %%GLOBAL_TrailBrandName%%                         
	                    <script type="text/javascript">    
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
                    </script>
</h1>
```


## Installation

    Will provide later.

## Using

To get this to work, you just need to require the module once per run-time, like so.

    Just install and it'l do the work for you!


## Other BigCommerce modules

* [BigCommerce Product Page Demo Videos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Demo-Videos)
* [BigCommerce Product Page Brand Descriptions](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Descriptions)
* [BigCommerce Product Page Brand Logos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Logos)
* [BigCommerce Category Page Color Swatch](https://github.com/iamandrebulatov/BigCommerce-Color-Swatch-On-Category)
* [BigCommerce Category Page 2nd Alternate Thumbnail](https://github.com/iamandrebulatov/BigCommerce-Category-Pages-2nd-Alternate-Thumbnail)
* [BigCommerce Category Page Videos](https://github.com/iamandrebulatov/BigCommerce-Category-Page-Demo-Videos)
* [BigCommerce Category Page Out of Stock Ribbons](https://github.com/iamandrebulatov/BigCommerce-Out-of-Stock-Category-Items)


## Support

> ⚐ Please help me spend more time developing and maintaining awesome modules like this by donating!

The absolute best thing to do is to sign up with [ChangeTip](//changetip.com) or [GratiPay](//gratipay.com) if you haven't already and donate just $1 a week. That is roughly a cup of coffee per month. Also, please do donate to many other amazing open source projects!

[![ChangeTip donate button](http://andrebulatov.com/wp-content/uploads/tipme_button.png)](//www.changetip.com/tipme/andre.bulatov/ "Donate once-off to this project using ChangeTip")
[![GratiPay donate button](http://andrebulatov.com/wp-content/uploads/gratipay-button.png)](//www.gratipay.com/andrebulatov/ "Donate once-off to this project using GratiPay")


## License

The MIT License (MIT)

Copyright (c) 2014 Andre Bulatov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

