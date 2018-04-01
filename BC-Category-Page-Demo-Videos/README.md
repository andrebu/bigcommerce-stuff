# BigCommerce-Category-Page-Demo-Videos

BigCommerce Category Page Demo Videos that are dynamically pulled from /WebDAV/contents/Videos/ and become trigger-able with a button


------------------------------------------------------------------------------------



## Installation

> These are the latest instructions and are up to date.  I will update them as the widget is improved.

1. Upload **CategoryPageVideos.html Panel file** to your folder in WebDAV/dav/template/Panels  
  1. To access your WebDAV panel, BigCommerce gives you instructions in your Admin Panel.  
  2. Click "Design" in the top right corner of your store admin panel.  
  3. Then click "WebDAV" in the "Current Theme" section and follow the instructions
2. Add **%%Panel.CategoryPageVideos%%** reference to bottom of Panels/category.html
  + Example:
```HTML
        </div>

        %%Panel.CategoryPageColorSwatch%%                            
        %%Panel.CategoryPageOutOfStockRibbon%%
<!-- ADD Panel reference here -->
        %%Panel.CategoryPageVideos%%                            
<!-- ADD Panel reference here -->
        
    </body>
</html>
```
![BigCommerce Category Page Demo Videos Installation Example](https://raw.githubusercontent.com/iamandrebulatov/BC-Category-Page-Demo-Videos/master/CategoryPageVideos-Screen%20Shot%202015-01-19%20at%208.08.50%20PM%201.png "BigCommerce Product Page Demo Videos Installation Example")
3. Create Videos Upload Folder
  + Create a folder for uploading the product demo videos in WebDAV /dav/Contents/Videos/
  + When you upload videos, add an .mp4 version, as well as an .ogv version for playback on all browsers
  + Name the videos by the product ID.  The product ID can be found by ... ?  
		<!-- The ProductID is the number value of 'data-product="###"' -->  

~~4. Add "HasDemoVideo" Option (checkbox, value field) to Product Option Set~~


                            


------------------------------------------------------------------------------------


## Using

	 Create Videos Upload Folder
	  + Create a folder for uploading the product demo videos in WebDAV /dav/Contents/Videos/
	  + When you upload videos, add an .mp4 version, as well as an .ogv version for playback on all browsers
	  + Name the videos by the product ID.  The product ID can be found by ... ?  
			<!-- The ProductID is the number value of 'data-product="###"' -->  


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

## Resources

- [Css-tricks.com: Hiding Native HTML5 Video Controls in Full-Screen Mode](https://css-tricks.com/custom-controls-in-html5-video-full-screen/)
- [How to autoplay HTML5 mp4 video on Android?](http://stackoverflow.com/questions/9075520/how-to-autoplay-html5-mp4-video-on-android)
- [Making HTML5 Video work on Android phones](http://www.broken-links.com/2010/07/08/making-html5-video-work-on-android-phones/)
- [jQuery function after .append](http://stackoverflow.com/questions/6068955/jquery-function-after-append)
- [Check if array is empty or null](http://stackoverflow.com/questions/7198197/check-if-array-is-empty-or-null)
- [How to remove an element from an array](http://www.simonewebdesign.it/how-to-remove-element-from-array/)
- [a better way to convert JS object to array](http://stackoverflow.com/questions/6857468/a-better-way-to-convert-js-object-to-array)
- []()
- []()


------------------------------------------------------------------------------------


### TODO

1. ~~Fix behavior - when out of stock and with video, neither appears.~~
2. ~~Not showing up on brands.~~
3. ~~When with video, shows “HasVideo” on receipt/invoice.~~
4. ~~Integrate the "videoDemo" div into JS and out of BC panel~~


------------------------------------------------------------------------------------


## Support

> ⚐ Please help me spend more time developing and maintaining awesome modules like this by donating!

The absolute best thing to do is to sign up with [ChangeTip](//changetip.com) or [GratiPay](//gratipay.com) if you haven't already and donate just $1 a week. That is roughly a cup of coffee per month. Also, please do donate to many other amazing open source projects!

[![ChangeTip donate button](http://andrebulatov.com/wp-content/uploads/tipme_button.png)](//www.changetip.com/tipme/andre.bulatov/ "Donate once-off to this project using ChangeTip")
[![GratiPay donate button](http://andrebulatov.com/wp-content/uploads/gratipay-button.png)](//www.gratipay.com/andrebulatov/ "Donate once-off to this project using GratiPay")


------------------------------------------------------------------------------------


## License

The MIT License (MIT)

Copyright (c) 2014-2015 Andre Bulatov

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
