# BC-Wholesale-Price-and-Item-Hide
BigCcommerce plugin to Hide selected Wholesale Prices and Items unless user is logged in as a wholesale account.


## Installation

1. Setup 2 Customer Groups: "Retail" and "Wholesale"
2. Use "Retail" group as default group for Guests
3. Add all existing Retail customers to retail group
4. Create a unique category that will only be visible to Wholesale group customers, such as "Wholesale Deals," "Trade Specials," or "Bulk/Bundle Bargains"
5. Allow Wholesale group to see all categories, but Allow Retail group to see all for the exception of the category we created in step 3.
6. Install the HideWholesalePrices.html Panel reference (**%%Panel.WholeSaleFunctions%%**) to bottom of **Panels/Footer.html** 
7. Finally, copy file **HideWholesalePrices.html** over to dav/template/Panels in your WedDAV account.
    1. To access your WebDAV panel, BigCommerce gives you instructions in your Admin Panel.  
    2. Click "Design" in the top right corner of your store admin panel.  
    3. Then click "WebDAV" in the "Current Theme" section and follow the instructions



------------------------------------------------------------------------------------


## Using

1. Just install and it'll do the work for you!  


------------------------------------------------------------------------------------


##To Do

1. Finish HTML

------------------------------------------------------------------------------------


##Resources
- [Restricting Wholesale Products to Wholesale Customers](https://support.bigcommerce.com/articles/Public/How-can-I-restrict-wholesale-products-to-wholesale-customers)
- [-In Progress- Hiding Bulk Pricing from "Retail" Customer Group](http://forum.bigcommerce.com/f4/hiding-bulk-pricing-from-retail-customer-group-23011/)
- [Hide Shipping Method From Customer Group](http://forum.bigcommerce.com/f33/hide-shipping-method-from-customer-group-12374/)
- [-In Progress- Display 2nd level categories in Footer Menu](https://forum.bigcommerce.com/f4/display-2nd-level-categories-in-footer-menu-14126/)
- [Hiding and Showing Based on Customer Group Part 1](http://bigcommercejournal.blogspot.com/2013/11/hiding-and-showing-based-on-customer.html)
- [Bigcommerce Tutorial – Hide Pricing Until Customer is Signed Into a Wholesale Account](http://www.protocolthree.com/bigcommerce-tutorial-hide-pricing-until-customer-is-signed-into-a-wholesale-account/)
- [jQuery multiple conditions within if statement](http://stackoverflow.com/questions/10722682/jquery-multiple-conditions-within-if-statement)
- [jotform - How can I receive SSL Submissions?](http://www.jotform.com/help/63-How-can-I-receive-SSL-Submissions)





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
* [BigCommerce Wholesale Features and Functions](https://github.com/iamandrebulatov/BC-Wholesale-Price-and-Item-Hide)


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
