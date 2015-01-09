The issue is with Masonry plugin.    
- http://desandro.github.io/masonry/docs/methods.html#content  
- http://masonry.desandro.com/  
- http://stackoverflow.com/questions/15018174/disable-jquery-masonry  

Must deactive via in site.js, approx line 375

```javascript
  $('.ProductList').masonry().masonry( 'destroy' );
```

Also, CSS, style.css: 

```CSS
/* Approx line 6326 */
.CategoryContent .ProductList li {
width: 310px;
clip: rect(auto, auto, auto, 14px);
position: relative;
}
```
