# BC-Order-Status-Text
BC Order Status Text

This module, BigCommerce Account Page Order Status Text, allows a BigCommerce store owner to customize the text for order statuses.  So now, instead of having confusing messages like Awaiting Fulfillment or Awaiting Shipment (which lead customers into confusion that results in unnecessary customer service phone calls) a store owner can now customize the text to something less confusing or alarming.


================================================================================================  


## Installation

1. Add **OrderStatusText.html Panel file** to your folder in WebDAV/dav/template/Panels  
  1. To access your WebDAV panel, BigCommerce gives you instructions in your Admin Panel.  
  2. Click "Design" in the top right corner of your store admin panel.  
  3. Then click "WebDAV" in the "Current Theme" section and follow the instructions
2. Add %%Panel.OrderStatusText%% to Panels/AccountOrderStatus.html
  + Example:
```HTML
<div class="Block Moveable Panel AccountOrderStatus" id="AccountOrderStatus">
    <h2>%%LNG_OrderStatus%%</h2>
    <div class="BlockContent">
        <div style="display:%%GLOBAL_HideOrderStatusList%%">
            <p class="InfoMessage">
                %%LNG_AccountOrderStatusIntro%%
            </p>

            <ul class="AccountOrderStatusList">
                %%SNIPPET_AccountOrderStatus%%
 ​<!-- Put panel as it is here, right after AccountOrderStatus tag -->
                %%Panel.OrderStatusText%%
 <!-- Put panel as it is here, right after AccountOrderStatus tag -->
           </ul>
        </div>

        <p class="InfoMessage" style="display:%%GLOBAL_HideNoOrderStatusMessage%%">
            %%LNG_AccountOrderStatusNone%%
        </p>
    </div>
</div>
</html>
```
![BigCommerce BigCommerce Account Page Order Status Text Installation Example](https://raw.githubusercontent.com/iamandrebulatov/BC-Order-Status-Text/master/BC%20Order%20Status%20Text%20Installation%20-%20Screen%20Shot%202015-02-27%20at%205.02.27%20PM.png "BigCommerce BigCommerce Account Page Order Status Text Installation Example")


                            


================================================================================================

## Using

    Just install, add videos to folder, add option to product, and it'll do the work for you!

================================================================================================

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

================================================================================================

## TODO

1.


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
