BigCommerce-Projects
====================

BigCommerce Projects - Plugins, Addons, Extensions, Features, and Custom Code for BigCommerce e-commerce Platform

Please provide quotes and time frames to complete each project.

##List of Projects  
1.  **Color Swatch on Category Pages**    
-- Some products have color options and in BigCommerce, these only show up on Product Pages,  We want them to also show up on category pages (I assume some javascript or something is necessary here).  Please give 2 prices, 1 price for just showing "Multiple color options available" when they are present, just showing up a thin overlay strip over the image thumbnail, and 2. where the actual color swatch shows up in a nicely integrated fashion into the category page listings.

2.  **Size Options On Category Pages**    
-- Similar to 1 except with Sizes.  Please also give 2 prices for this as well.

3.  **Alternate Thumbnail Images on Hover**    
-- On mouse hover, on Category and Brand pages, a 2nd, alternate thumbnail image should slide out from the left or right.

4.  **Product Page Videos**    
-- A button that will trigger a video to show up over the image of the product, and then disappears when the same button is clicked.  Should work on desktop and mobile.

5.  **Category Page Videos (is it extra for Brand pages?)**    
-- Similar to product page videos above, but on category pages.  Not each product should have the trigger button (on mobile, preferably in top right corner of image, on desktop preferably as one of the thumbnail images) but only for those for which we have uploaded videos to /content/videos/ folder on our WebDAV (or maybe some other method if you have a better one)

6.  **Product Page Brand Descriptions**  
-- Each product has a brand that is associated with it.  We want a little brand banner with a logo and description of the brand to automatically be added to product pages depending on what brand they are.  We can store the descriptions in some BC hidden page or some other file.

7.  **Category Page Out of Stock script**  
-- A javascript to put a little "Out of Stock" ribbon on the corner of a product listing on category pages when it is sold out.

8.  **Custom Field 1 + 2 appear on right in a table**  
-- We have some custom product properties such as "Height" and "Joint Type" and we want those to show up not int he product description on the bottom of the product page, but on the right of the product image where the other details of the product are.

9.  **Fix resizing issue on category pages when using BC admin panel "Show Newest" option**  
-- When we select "Show newest first" the sizing of the height of the product listings gets messed up.  Each row is supposed to be the height of the tallest product listing, and this gets messed up.

10.  **Install new slider on front page**  
-- The slider on front page only allows up to 4-6 images.  We want a new slider installed that has similar features but will allow many more images (up to 10 or more)

11.  **Implement swipeable "next" and "Prev" actions on Product Page images**  
-- On mobile product pages, the images must be selected by clicking the dots beneath the image.  We want the image to be changeable when a person swipes left or right on the image, bringing up the next or previous image in the list of images.   

12.  **Fix MagicZoom and the conflict it causes with video**  
-- messes up javascript.... breaks it because much of the jQuery-dependent JS written for the ProductThumb gets messed up due to "Undefined TypeError" cuases by missing HTML elements such as <div class="ProductThumb">


###Speed Up and Optimization Project  

| Date | Page Speed | YSlow | Page Load | Page Size | # of Requests | Link |
| --- | --- | --- | --- | --- | --- | --- |
| 12/31/2014 | C - 72% | C - 74% | 6.34s | 15.4MB | 102 | [Site](http://gtmetrix.com/reports/dankstop.com/eeLmiznt) - [PDF](https://github.com/iamandrebulatov/BigCommerce-Projects/blob/master/GTmetrix-report-dankstop.com-20141231T210004-eeLmiznt-full.pdf)


####List of Objectives for Site Speedup Project
1. Reduce page load time  
2. Reduce page requests  
3. Reduce page sizes  
4. Acheive a generally faster and smoother loading experience, on both desktop and mobile


####List of Tasks for Site Speedup Project
1. Optimize, scale and specify size for all front page images  
2. Optimize, scale, and specify size for all product images (over 500+)  
3. Create image sprite for small images and icons  
4. Eliminate all or reduce HTML errors as according to W3C  
5. Investigate and Fix Pre-slider loading issue  
6. Clean up header code  
7. Clean up footer code  
8. Combine all custom JavaScript into custom.js  
9. Defer parsing of JS / Make sure all JS loads properly  
10. Optimize the order of styles and scripts  
11. Completely change "Age Verify" banner style and behavior  
12. Install gzip  
13. Minify JavaScript  
14. Minify CSS  
15. Remove query strings from static resources  
16. Make fewer HTTP requests  
17. Use a Content Delivery Network (CDN) (possible or necessary?)  




###General questions:  
1. Is it possible there will be unforeseen bugs in the code and how is this handled going forward?
2. How do you handle bugs that appear/popup in the future due to updates in template or something of that nature?   
3. What guarantee/warranty do you give on your work and for hold long?  


## Other BigCommerce modules

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
* [BigCommerce Misc Projects](https://github.com/iamandrebulatov/BigCommerce-Projects) 
  * Site Navigation AJAXification
  * List of SEO enhancements and improvements
  * Product Images Swipeable
  * Contact Form Overhaul and AJAXification
  * Cart Item Removal AJAXification


##Resources and Inspiration

- [Killer BigCommerce Tips and Tricks](http://www.onlinestorecreation.com/bigcommerce-tips-tricks.html)

### Swipeable Product Page Product Images
- [How to remove all Click event handlers in Jquery](http://stackoverflow.com/questions/825112/how-to-remove-all-click-event-handlers-in-jquery)
- [event.preventDefault() not canceling link direction in jQuery Mobile](http://stackoverflow.com/questions/11994833/event-preventdefault-not-canceling-link-direction-in-jquery-mobile)
- []()
- []()
- []()
- []()
- []()
- []()
