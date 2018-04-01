# BC-Search-With-Features
BigCommerce Search With Features - this is necessary because of the peculiarity of the AJAX search used by BigCommerce 2 particular issues present themselves with JS features on the expose of products in the search results grid:

1. It is difficult to choose a proper location for the features as most of the Search files are loaded twice, which causes the features to fire twice and appear duplicate in the DOM, causing all sorts of UI/UX issues.
2. The search is built on and works via AJAX.  This causes a problem when the search results pagination is used to move between pages of results.  The problem specifically is that each page of search results is freshly populated into the DOM by the AJAX function, and to these new product items in the search results grid, my JS features are not being applied as new DOM elements are left out of the flow.

####SOLUTION:
- The solution presented here is simple and two stage:
1.  Wrap all the functionality of each feature into its own named function, and call all these functions at the end of each Search-AJAX call.
2.  Wrap all the feature calls that are at the end of the Search-AJAX function into a function with a global flag that is set to true after the features are called once.


## Installation

> These are the latest instructions and are up to date.  I will update them as the widget is improved.

1. Simply copy the contents of the ** Panels/SearchJavaScript.html file ** included in this repo into the same file in your BigCommerce install.

<!-- ![BigCommerce Product Accessory Options Choice Upsell Installation Example](https://raw.githubusercontent.com/iamandrebulatov/BC-Product-Accessory-Options-Choice-Upsell/master/BC-Product-Accessory-Options-Choice-Upsell.png "BigCommerce Product Accessory Options Choice Upsell Installation Example") -->



## Using

To get this to work, you just need to require the module once per run-time, like so.

    1. Just install and it'll do the work for you!  



##Resources

- [How to apply !important using .css()?](http://stackoverflow.com/questions/2655925/how-to-apply-important-using-css)
- [jQuery selector value escaping](http://stackoverflow.com/questions/739695/jquery-selector-value-escaping)
- [CSS3 :nth-of-type() Selector](http://www.w3schools.com/cssref/sel_nth-of-type.asp)
- [Get ul width with floating li's using jQuery/JavaScript](http://stackoverflow.com/questions/13066054/get-ul-width-with-floating-lis-using-jquery-javascript)


## Other BigCommerce modules that I've made

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
* [BigCommerce Product Accessory Options Choice Upsell](https://github.com/iamandrebulatov/BC-Product-Accessory-Options-Choice-Upsell)
* [BigCommerce Navigation Dynamic List Item Visual Cues](https://github.com/iamandrebulatov/BC-Nav-Dynamic-List-Item-Visual-Cues)



## Support

> ⚐ Please help me spend more time developing and maintaining awesome modules like this by donating!

The absolute best thing to do is to sign up with [ChangeTip](//changetip.com) or [GratiPay](//gratipay.com) if you haven't already and donate just $1 a week. That is roughly a cup of coffee per month. Also, please do donate to many other amazing open source projects!

[![ChangeTip donate button](http://andrebulatov.com/wp-content/uploads/tipme_button.png)](//www.changetip.com/tipme/andre.bulatov/ "Donate once-off to this project using ChangeTip")
[![GratiPay donate button](http://andrebulatov.com/wp-content/uploads/gratipay-button.png)](//www.gratipay.com/andrebulatov/ "Donate once-off to this project using GratiPay")


## License

The MIT License (MIT)

Copyright (c) 2015 Andre Bulatov

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
