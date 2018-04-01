# BC-Shipping-Addons
BC Shipping Addons

https://store-mixi7d.mybigcommerce.com/cart.php?action=remove&item=55ce8c6feeb1d
https://store-mixi7d.mybigcommerce.com/cart.php?action=remove&item=55ce8da3ba863

## Installation

1.  Add 'ShippingAddonsJS.html' to WebDav --> '/dav/template/Panels/ShippingAddonsJS.html'
2.  Add HTML in 'Snippets-ExpressCheckoutChooseShipper.html' to Snippets/ExpressCheckoutChooseShipper.html, in between: 
```HTML
<form method="post" action="#" onsubmit="ExpressCheckout.ChooseShippingProvider(); return false;">
    <p><span class="Required">*</span>%%LNG_ExpressCheckoutSelectShippingProvider%%</p>
    %%GLOBAL_ShippingQuotes%%
```
and 
```HTML
    <input type="submit" value="%%LNG_Continue%%" class="btn Small" />
    %%GLOBAL_DeliveryDisclaimer%%
</form>

```
3.  Add the line:
```HTML
                                <div class="clear ExpressCheckoutBlock %%GLOBAL_CollapsedStepClassShippingProvider%%" id="CheckoutStepShippingProvider" style="%%GLOBAL_ExpressCheckoutHideShippingProviders%%">
                                    <div class="ExpressCheckoutTitle">
                                        <a class="ChangeLink alt fa fa-check-square-o" href="#" onClick="return ExpressCheckout.ChangeStep('ShippingProvider');" title="Modify"></a>
                            <span class="StepNumber">%%GLOBAL_ExpressCheckoutStepShippingProvider%%</span>
                                         <h4>%%LNG_ExpressCheckoutStepShippingMethod%%</h4>
                                        <span class="ExpressCheckoutCompletedContent"></span>
                                    </div>
<!-- ADD REFERENCE HERE --> 
<!-- ADD REFERENCE HERE --> 
<!-- ADD REFERENCE HERE --> 
                                    %%Panel.ShippingAddonsJS%%
<!-- ADD REFERENCE HERE --> 
<!-- ADD REFERENCE HERE --> 
<!-- ADD REFERENCE HERE --> 
                                    <div class="ExpressCheckoutContent">
                                    </div>
                                </div>
```


------------------------------------------------------------------------------------


## Using

1. Just install and it'll do the work for you!  


------------------------------------------------------------------------------------


##To Do

1. 

------------------------------------------------------------------------------------


##Resources
- [Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [HTML checkbox onclick called in Javascript](http://stackoverflow.com/questions/3197702/html-checkbox-onclick-called-in-javascript)
- [jQuery checkbox change and click event](http://stackoverflow.com/questions/7031226/jquery-checkbox-change-and-click-event)
- [Global variables for cart item quantity and $ value.](http://forum.bigcommerce.com/f5/global-variables-for-cart-item-quantity-and-value--8466/)
- [Integer division in JavaScript](http://stackoverflow.com/questions/4228356/integer-division-in-javascript)
- [MC's list of HTML/javascript codes that help you customize/mod your store](http://forum.bigcommerce.com/f4/mc-s-list-of-html-javascript-codes-that-help-you-customize-mod-your-store-23220/)
- [jQuery cookie value is %5Bobject%20Object%5D](http://stackoverflow.com/questions/16355717/jquery-cookie-value-is-5bobject20object5d)
- [jQuery Cookie path](http://stackoverflow.com/questions/9326620/jquery-cookie-path)
- []()
- []()
- []()




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
