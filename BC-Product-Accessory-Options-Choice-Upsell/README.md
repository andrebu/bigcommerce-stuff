# BC-Product-Accessory-Options-Choice-Upsell
BigCommerce Product Accessory Options Choice Upsell


------------------------------------------------------------------------------------


## Installation

> These are the latest instructions and are up to date.  I will update them as the widget is improved.

1. Upload **ProductAccessoryOptionsUpsellChoice.html Panel file** to your folder in WebDAV/dav/template/Panels  
  1. To access your WebDAV panel, BigCommerce gives you instructions in your Admin Panel.  
  2. Click "Design" in the top right corner of your store admin panel.  
  3. Then click "WebDAV" in the "Current Theme" section and follow the instructions
2. Add %%Panel.ProductAccessoryOptionsUpsellChoice%% to bottom of Snippets/ProductAddToCart.html
  + Example:
```HTML
%%GLOBAL_ProductMinMaxQtyJavascript%%
//]]></script>

%%GLOBAL_EventDateJavascript%%

<!-- ADD Panel reference here -->
%%Panel.ProductAccessoryOptionsUpsellChoice%%
<!-- ADD Panel reference here -->

​    </body>
</html>​
```  
![BigCommerce Product Accessory Options Choice Upsell Installation Example](https://raw.githubusercontent.com/iamandrebulatov/BC-Product-Accessory-Options-Choice-Upsell/master/BC-Product-Accessory-Options-Choice-Upsell.png "BigCommerce Product Accessory Options Choice Upsell Installation Example")


------------------------------------------------------------------------------------


## Using

To get this to work, you just need to require the module once per run-time, like so.

    1. Just install and it'll do the work for you!  


------------------------------------------------------------------------------------


##To Do

1. ~~Fix mobile responsiveness issue on 13' screens (overhaul BC template CSS)~~
2. Translate the other options (size and color) to flex, and move the border to the list item


------------------------------------------------------------------------------------


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
* [BigCommerce Contact Form](https://github.com/iamandrebulatov/BC-Contact-Form)
* [BigCommerce Hot Item Product Counter](https://github.com/iamandrebulatov/BC-Hot-Item-Product-Counter)
* [BigCommerce Shipping Time Dynamic Feature](https://github.com/iamandrebulatov/BC-Product-Shipping-Time-Dynamic)
* [BigCommerce Category Page Sold Out Products Reorder](https://github.com/iamandrebulatov/BC-Category-Push-Sold-Out-Products-to-Bottom)
* [BigCommerce Wholesale Price and Item Hide and Other Features](https://github.com/iamandrebulatov/BC-Wholesale-Price-and-Item-Hide)
* [BigCommerce Sharing Savings Discount](https://github.com/iamandrebulatov/BC-Sharing-Savings-Discount)
* [BigCommerce Tooltips](https://github.com/iamandrebulatov/BC-Tooltips)
* [BigCommerce Order Shipment Tracking APIs ofr USPS, UPS and FedEx](https://github.com/iamandrebulatov/BC-Order-Shipping-Tracking)
* [BigCommerce Pagination and Infinite Scroll](https://github.com/iamandrebulatov/BC-Category-Pagination)
* [BigCommerce Brand Page Product Type Sections](https://github.com/iamandrebulatov/BC-Brand-Product-Type-Sections)
* [BigCommerce Misc Projects](https://github.com/iamandrebulatov/BigCommerce-Projects) 
  * Site Navigation AJAXification
  * List of SEO enhancements and improvements
  * Product Images Swipeable
  * Contact Form Overhaul and AJAXification
  * Cart Item Removal AJAXification


------------------------------------------------------------------------------------


##Resources

- [How to apply !important using .css()?](http://stackoverflow.com/questions/2655925/how-to-apply-important-using-css)
- [jQuery selector value escaping](http://stackoverflow.com/questions/739695/jquery-selector-value-escaping)
- [CSS3 :nth-of-type() Selector](http://www.w3schools.com/cssref/sel_nth-of-type.asp)
- [Get ul width with floating li's using jQuery/JavaScript](http://stackoverflow.com/questions/13066054/get-ul-width-with-floating-lis-using-jquery-javascript)
- [How to Populate jQuery Object with Data from Link Inside HTML List?](http://stackoverflow.com/questions/4511255/how-to-populate-jquery-object-with-data-from-link-inside-html-list)
- [jQuery Types():Object()](http://api.jquery.com/Types/#Object)
- [A Space between Inline-Block List Items [duplicate]](ttp://stackoverflow.com/questions/5256533/a-space-between-inline-block-list-items)
- [when window is resized --- Change div width live with jQuery](http://stackoverflow.com/questions/8153281/change-div-width-live-with-jquery)
- [jQuery .width()](http://api.jquery.com/width/)
- [jQuery - widest item on page](http://stackoverflow.com/questions/1233343/jquery-widest-item-on-page)
- [flex and CSS calc() -- Responsive, Fluid-Width, Variable-Item Navigation with CSS](http://www.sitepoint.com/responsive-fluid-width-variable-item-navigation-css/)
- [How can one create an overlay in css?](http://stackoverflow.com/questions/9724035/how-can-one-create-an-overlay-in-css)
- [JavaScript moving element in the DOM](http://stackoverflow.com/questions/1363650/javascript-moving-element-in-the-dom)
- [pointer-events - CSS | MDN - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
- [Flexbox in Safari: Grow and shrink](http://stackoverflow.com/questions/16130399/flexbox-in-safari-grow-and-shrink)
- [How do I test if a variable does not equal either of two values?](http://stackoverflow.com/questions/6115801/how-do-i-test-if-a-variable-does-not-equal-either-of-two-values)
- [DOM Spec: 4.3. Mutation observers](https://dom.spec.whatwg.org/#mutation-observers)
- [Is there a jQuery DOM change listener?](http://stackoverflow.com/questions/2844565/is-there-a-jquery-dom-change-listener)
- []()
- []()


------------------------------------------------------------------------------------


## Support

> ⚐ Please help me spend more time developing and maintaining awesome modules like this by donating!

The absolute best thing to do is to sign up with [ChangeTip](//changetip.com) or [GratiPay](//gratipay.com) if you haven't already and donate just $1 a week. That is roughly a cup of coffee per month. Also, please do donate to many other amazing open source projects!

[![ChangeTip donate button](http://andrebulatov.com/wp-content/uploads/tipme_button.png)](//www.changetip.com/tipme/andre.bulatov/ "Donate once-off to this project using ChangeTip")
[![GratiPay donate button](http://andrebulatov.com/wp-content/uploads/gratipay-button.png)](//www.gratipay.com/andrebulatov/ "Donate once-off to this project using GratiPay")


------------------------------------------------------------------------------------


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
