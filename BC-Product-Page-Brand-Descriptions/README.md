## BigCommerce-Product-Page-Brand-Descriptions

BigCommerce Product Page Brand Descriptions that are based on the brand of the product and are dynamically pulled from a separate page and added to the product page

------------------------------------------------------------------------------------

## Installation

1. Add **ProductPageBrandDescriptions.html Panel file** to your folder in WebDAV/dav/template/Panels  
  1. To access your WebDAV panel, BigCommerce gives you instructions in your Admin Panel.  
  2. Click "Design" in the top right corner of your store admin panel.  
  3. Then click "WebDAV" in the "Current Theme" section and follow the instructions
2. Place %%Panel.ProductPageBrandDescriptions%% in Panels/ProductDescription.html, right after "%%GLOBAL_ProductDescriptionOptimizerNoScriptTag%%"
  + Example
```HTML
<div class="Block Moveable Panel ProductDescription" id="ProductDescription">
    <h3 class="subtitle">%%LNG_ProductDescription%%</h3>
    <div class="ProductDescriptionContainer prodAccordionContent">
        %%GLOBAL_ProductDescriptionOptimizerScriptTag%%
        %%GLOBAL_ProductDesc%%
        %%GLOBAL_ProductDescriptionOptimizerNoScriptTag%%

        %%Panel.ProductPageBrandDescription%%
        
    </div>
    <!--<hr style="%%GLOBAL_HideSectionSeparator%%" class="ProductSectionSeparator" />-->
</div>

<div itemscope itemtype="http://schema.org/Product" style="display: none;"> 
     <span itemprop="name">%%GLOBAL_ProductName%%</span> 
     <span itemprop="description">%%GLOBAL_ProductDesc%%</span> 
     <img itemprop="image" src="%%GLOBAL_InitialZoomImage%%"/> 

     <div itemprop="offers" itemscope itemtype="http://schema.org/Offer"> 
          <span itemprop="price">%%GLOBAL_ProductPrice%%</span> 
     </div> 
</div>  
```

![BigCommerce Product Page Brand Description Installation Example](https://raw.githubusercontent.com/iamandrebulatov/BC-Product-Page-Brand-Descriptions/master/BC%20Product%20Page%20Brand%20Description%20Installation%20-%20Screen%20Shot%202015-02-28%20at%208.22.30%20PM.png "BigCommerce Product Page Brand Description Installation Example")



3. Add all Brand descriptions to the /brand-descriptions/ page.  The format is as follows:
```HTML
<div id="DankStopTheBest">
    <div align="left">
    	<strong>DankStop aims to be the worlds best online headshop. </strong>
    </div>
</div>
<hr class="top-sep" />
<div id="AMG GLASS" class="brand-banner">
    <div class="brand-logo"><a href="http://dankstop.com/brands/AMG-GLASS.html"> <img class="brand-image" src="http://cdn6.bigcommerce.com/s-ss4br/product_images/w/amglogo_1412039908__85126.jpg" alt="AMG Glass" height="100" /></a>
    </div>
    <div class="brand-info">
    	<h3 class="brand-name">About <a href="http://dankstop.com/brands/AMG-GLASS.html">AMG Glass</a></h3>
        <p class="brand-description">AMG stands for American Made Glass, and they stay true to the name. Their glass water pipes, concentrate rigs, and bubblers are all made out of thick borosilicate glass right here in the USA. Want an AMG product customized? Contact us by phone or email for to order an AMG piece in a style or color you don't see here. <a href="http://dankstop.com/brands/AMG-GLASS.html">Learn more about AMG Glass...</a>
        </p>
    </div>
</div>
<p>
	<span class="divvvider">===============================================================</span>
</p>
<hr class="top-sep" />
<div id="420 Stands" class="brand-banner">
    <div class="brand-logo">
    	<a href="http://dankstop.com/brands/420-stands"> <img class="brand-image" src="http://cdn6.bigcommerce.com/s-ss4br/product_images/h/420standslogo_1412039891__12902.png" alt="420 Stands" height="100" /></a>
    </div>
    <div class="brand-info">
	    <h3 class="brand-name">About <a href="http://dankstop.com/brands/420-stands">420 Stands</a></h3>
        <p class="brand-description">These awsome little bowl/slide holders will prevent that awful feeling of dropping a freshly packed slide on the ground. We've all been there, and the guys at 420Stands decided to do something about it. Made in a basement in California using a 3d Printer, these guys put their blood sweat and tears into individually printing each stand. Rest your dabber on the stand between hits to keep it from getting lint anall kinds of junk stuck to it. All 420 Stands are handmade and are uniquely different with naturally occurring bubbles and imperfections. While we think this makes them even more awesome, beauty is in the eye of the beholder. If you receive a stand you are not 100% happy with for whatever reason just contact us and we will take care of it. Return your stand within thirty (30) days and we will gladly exchange it for another color, size, or model. <a href="http://dankstop.com/brands/420-stands">Learn more about 420 Stands...</a>
        </p>
    </div>
</div>
<p>
	<span class="divvvider">===============================================================</span>
</p>
<hr class="top-sep" />
```


------------------------------------------------------------------------------------

## Using


    Just install and it'll do the work for you!

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


## Support

> ⚐ Please help me spend more time developing and maintaining awesome modules like this by donating!

The absolute best thing to do is to sign up with [ChangeTip](//changetip.com) or [GratiPay](//gratipay.com) if you haven't already and donate just $1 a week. That is roughly a cup of coffee per month. Also, please do donate to many other amazing open source projects!

[![ChangeTip donate button](http://andrebulatov.com/wp-content/uploads/tipme_button.png)](//www.changetip.com/tipme/andre.bulatov/ "Donate once-off to this project using ChangeTip")
[![GratiPay donate button](http://andrebulatov.com/wp-content/uploads/gratipay-button.png)](//www.gratipay.com/andrebulatov/ "Donate once-off to this project using GratiPay")


------------------------------------------------------------------------------------


To Do
-----
1. ~~Dynamic Product type inside DankStop description description based on the type of the current product~~  
2. ~~Improve CSS~~   


------------------------------------------------------------------------------------


## Resources

- [JSON Online Editor: DS Data DB](http://www.jsoneditoronline.org/?id=c508267bbd98a3545cd1c7f8c4a83b36)
- [Get selected element's outer HTML](http://stackoverflow.com/questions/2419749/get-selected-elements-outer-html)  
- [Change certain paragraph text in jQuery?](http://stackoverflow.com/questions/10256795/change-certain-paragraph-text-in-jquery)  
- [jQuery create CSS rule / class @ runtime](http://stackoverflow.com/questions/1212500/jquery-create-css-rule-class-runtime/2076345#2076345)  
- [Best way to add new css rules with jquery?](http://stackoverflow.com/questions/14136042/best-way-to-add-new-css-rules-with-jquery)  
- [CSS3 :nth-child() Selector](http://www.w3schools.com/cssref/sel_nth-child.asp)  
- [How do you check for an empty string in JavaScript?](http://stackoverflow.com/questions/154059/how-do-you-check-for-an-empty-string-in-javascript)  
- [JQuery not working after AJAX Pagination](http://stackoverflow.com/questions/4831408/jquery-not-working-after-ajax-pagination?rq=1)  
- [What is the best way to test for an empty string with jquery-out-of-the-box?](http://stackoverflow.com/questions/1812245/what-is-the-best-way-to-test-for-an-empty-string-with-jquery-out-of-the-box)  
- [get one item from an array of name,value JSON](http://stackoverflow.com/questions/7075485/get-one-item-from-an-array-of-name-value-json)
- [loop through JSON result with jQuery](http://stackoverflow.com/questions/2041497/loop-through-json-result-with-jquery)
- [jQuery val() indexOf not working](http://stackoverflow.com/questions/7615719/jquery-val-indexof-not-working)
- [Will content loaded by AJAX affect SEO/Search Engines?](http://stackoverflow.com/questions/3084003/will-content-loaded-by-ajax-affect-seo-search-engines)
- [MDN: <dl>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
- []()
- []()
- []()

------------------------------------------------------------------------------------


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
