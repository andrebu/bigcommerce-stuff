# BigCommerce-Color-Swatch-On-Category

BigCommerce Color Swatch Options and Size Options On Category Pges


================================================================================================


## Installation

> These are the latest instructions and are up to date.  I will update them as the widget is improved.

1. Upload **CategoryPageColorSwatch.html Panel file** to your folder in WebDAV/dav/template/Panels  
  1. To access your WebDAV panel, BigCommerce gives you instructions in your Admin Panel.  
  2. Click "Design" in the top right corner of your store admin panel.  
  3. Then click "WebDAV" in the "Current Theme" section and follow the instructions
2. Add %%Panel.CategoryPageColorSwatch%% to bottom of Panels/category.html
  + Example:
```HTML
            %%Panel.Footer%%
        </div>

        %%Panel.CategoryPageVideos%%                            
<!-- ADD Panel reference here -->
        %%Panel.CategoryPageColorSwatch%%                            
<!-- ADD Panel reference here -->
        %%Panel.CategoryPageOutOfStockRibbon%%
        
    </body>
</html>​
```  
![BigCommerce Category Page Color Swatch Installation Example](https://raw.githubusercontent.com/iamandrebulatov/BC-Category-Page-Color-Swatch/master/CategoryPageColorSwatch-Screen%20Shot%202015-03-09%20at%208.13.05%20PM.png "BigCommerce Product Page Color Swatch Installation Example")


================================================================================================


## Using

To get this to work, you just need to require the module once per run-time, like so.

    1. Just install and it'll do the work for you!  
    2. Color options must contain the term "Colors:" in the Option title
    3. Size options must contain the term "Sizes:" in the Option title


================================================================================================


## Some BigCommerce modules I've made

* [BigCommerce Carousel Slider Slide Show Custom](https://github.com/iamandrebulatov/BC-Carousel-Slider-Slide-Show-Custom)
* [BigCommerce Product Page Demo Videos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Demo-Videos)
* [BigCommerce Product Page Brand Descriptions](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Descriptions)
* [BigCommerce Product Page Brand Logos](https://github.com/iamandrebulatov/BigCommerce-Product-Page-Brand-Logos)
* [BigCommerce Product Page Dynamic Product Type Descriptions](https://github.com/iamandrebulatov/BC-Product-Page-Dynamic-Product-Type-Descriptions)
* [BigCommerce Product Page Image Zoom](https://github.com/iamandrebulatov/BC-Product-Page-Image-Zoom)
* [BigCommerce Category Page Color Swatch](https://github.com/iamandrebulatov/BigCommerce-Color-Swatch-On-Category)
* [BigCommerce Category Page 2nd Alternate Thumbnail](https://github.com/iamandrebulatov/BigCommerce-Category-Pages-2nd-Alternate-Thumbnail)
* [BigCommerce Category Page Videos](https://github.com/iamandrebulatov/BigCommerce-Category-Page-Demo-Videos)
* [BigCommerce Category Page Out of Stock Ribbons](https://github.com/iamandrebulatov/BigCommerce-Out-of-Stock-Category-Items)
* [BigCommerce Category Page Staff Picks Selector](https://github.com/iamandrebulatov/BC-Staff-Picks-Selector)
* [BigCommerce Preview On MouseOver](https://github.com/iamandrebulatov/BC-Preview-On-MouseOver)
* [BigCommerce Shipping Options Description](https://github.com/iamandrebulatov/BC-Shipping-Options-Descriptions)
* [BigCommerce Welcoming Age Gate](https://github.com/iamandrebulatov/BC-Welcoming-Age-Gate)
* [BigCommerce 360 Product View](https://github.com/iamandrebulatov/BC-360-Product-View)
* [BigCommerce ThumbScroll](https://github.com/iamandrebulatov/BC-ThumbScroll)


================================================================================================



## To Do

1. Remove the AJAX function which takes place upon seeing ".Options" and bring the color swatch to the front, instead of just creating it from scratch.


================================================================================================


## Resources

- [Storing collection of HTML elements in variable for later use](http://stackoverflow.com/questions/10748323/storing-collection-of-html-elements-in-variable-for-later-use)
- [JQuery - Storing ajax response into global variable](http://stackoverflow.com/questions/905298/jquery-storing-ajax-response-into-global-variable)
- [Storing collection of HTML elements in variable for later use](http://stackoverflow.com/questions/10748323/storing-collection-of-html-elements-in-variable-for-later-use)
- [jQuery - Check if the tag's content is equal to sometext then do something](http://stackoverflow.com/questions/8604033/jquery-check-if-the-tags-content-is-equal-to-sometext-then-do-something)
- [edit (append?) a string stored in a jquery variable](http://stackoverflow.com/questions/24393053/edit-append-a-string-stored-in-a-jquery-variable)
- [how to append an element between two elements](http://stackoverflow.com/questions/8553052/how-to-append-an-element-between-two-elements)
```javascript
$('#lst3').before('<li id="lst21"> list item three</li>');
//Or you can use afterdoc or insertAfterdoc:
$('#lst2').after('a');
$('a').insertAfter('#lst2');
```
- [jquery: check if string exist in element, return boolean](http://stackoverflow.com/questions/4553199/jquery-check-if-string-exist-in-element-return-boolean)
- [jQuery: Selecting and manipulating html elements outside the DOM](http://stackoverflow.com/questions/11813691/jquery-selecting-and-manipulating-html-elements-outside-the-dom)
```javascript
var codeToProcess = "<div>" +
                    "    <div id='myDiv1'>a</div>" +
                    "    <div id='myDiv2'>b</div>" +
                    "    <div id='myDiv3'>c</div>" +
                    "</div>";

var $toProcess = $( codeToProcess );
$toProcess.find( "div" ).addClass( "processed" );

// getting by id before insertion
alert( $toProcess.find( "#myDiv1" ).html() );
alert( $( "#myDiv1" ).html() ); // this will return null, since the divs
                                // were not yet added to the document

$toProcess.appendTo( "#container" );
// or $( "#container" ).html( $toProcess );

// getting by id after insertion
alert( $( "#myDiv2" ).html() );
```

- [How to tell if an element exists](http://jqueryfordesigners.com/index.html%3Fp=24.html)
- [Creating folded ribbons edges with CSS](http://mark-story.com/posts/view/creating-folded-ribbons-edges-with-css) - this post from [Mark Story](http://mark-story.com/) really helped with the "foldover" corner on the color and size swatch boxes, giving the effect that the container is wrapped around or hangs over the edge of the category product image container.
- [How do I get the n-th level parent of an element in jQuery?](http://stackoverflow.com/questions/7093659/how-do-i-get-the-n-th-level-parent-of-an-element-in-jquery)
- [MDN: AJAX - Getting Started](https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started)
- [How to return the response from an Ajax call?](http://stackoverflow.com/questions/14220321/how-to-return-the-response-from-an-ajax-call)
- [How to select the second word with jQuery and Regex..?](http://stackoverflow.com/questions/4134123/how-to-select-the-second-word-with-jquery-and-regex)
- [jQuery :contains() selector uppercase and lower case issue](http://stackoverflow.com/questions/8746882/jquery-contains-selector-uppercase-and-lower-case-issue)
- [How can I calculate how much time a function takes in jQuery?](http://stackoverflow.com/questions/7314162/how-can-i-calculate-how-much-time-a-function-takes-in-jquery)


================================================================================================



## Support

> ⚐ Please help me spend more time developing and maintaining awesome modules like this by donating!

The absolute best thing to do is to sign up with [ChangeTip](//changetip.com) or [GratiPay](//gratipay.com) if you haven't already and donate just $1 a week. That is roughly a cup of coffee per month. Also, please do donate to many other amazing open source projects!

[![ChangeTip donate button](http://andrebulatov.com/wp-content/uploads/tipme_button.png)](//www.changetip.com/tipme/andre.bulatov/ "Donate once-off to this project using ChangeTip")
[![GratiPay donate button](http://andrebulatov.com/wp-content/uploads/gratipay-button.png)](//www.gratipay.com/andrebulatov/ "Donate once-off to this project using GratiPay")


================================================================================================


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
