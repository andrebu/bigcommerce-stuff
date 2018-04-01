# BigCommerce-ThumbScroll
BigCommerce ThumbScroll

https://www.magictoolbox.com/magicscroll/modules/bigcommerce/#installation




Download Magic Scroll™ (free and fully functional demo version).  

Upload Magic Scroll™ file to your bigCommerce website Unzip the file and upload the magicscroll folder to the content folder on your BigCommerce website using FTP or WebDAV.  

Upload magic toolbox script for bigcommerce Download this file - magic-bigcommerce.js (right click it and save it to your computer), then upload that file to the magicscroll folder on your server.  

Image settings in bigcommerce admin In your BigCommerce admin panel, go to the Settings > Store menu, choose Images section.  

Show tiny thumbnails in bigcommerce admin Ensure that parameter 'Show Tiny Thumbnails?' is activated.  
Edit product details page template in bigcommerce In your BigCommerce admin panel, go to the Design > Template Files section and click 'Edit' link in the product.html's template line.  

Insert HTML code for magic in bigcommerce product details page template  

Insert the following lines at the top of template:  

```html
 <link href="/content/magiczoomplus/magiczoomplus.css" rel="stylesheet" type="text/css" media="screen"/>
<script src="/content/magiczoomplus/magiczoomplus.js"></script>
<script src="/content/magiczoomplus/magic-bigcommerce.js?tool=MagicZoomPlus"></script>
```  

Click the Save button at the top of the page.  

That's it.  