var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://cdn5.bigcommerce.com/s-ss4br/templates/__custom/js/jquery.infinitescroll.js';
document.head.appendChild(script);

// infinitescroll() is called on the element that surrounds 
// the items you will be loading more of
  $('#CategoryContent ul.ProductList').infinitescroll({
 
    navSelector  : ".productlist-page .product-nav",            
                   // selector for the paged navigation (it will be hidden)
    nextSelector : ".productlist-page .product-nav:first .CategoryPagination > a",    
                   // selector for the NEXT link (to page 2)
    itemSelector : "#CategoryContent ul.ProductList li"          
                   // selector for all items you'll retrieve
  });