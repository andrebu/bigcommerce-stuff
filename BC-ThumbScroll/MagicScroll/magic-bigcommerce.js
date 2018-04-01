/*

   JavaScript to integrate Magic Toolbox tools with BigCommerce
   Copyright 2012 Magic Toolbox
   www.magictoolbox.com/volusion/

*/ 
function MagicToolbox_addCSSRule(selector, declaration) {
	var ua = navigator.userAgent.toLowerCase();

	var isIE = (/msie/.test(ua)) && !(/opera/.test(ua)) && (/win/.test(ua)) && (!/msie 9\.0/.test(ua)) && (!/msie 10\.0/.test(ua));

	var style_node = document.createElement("style");
	style_node.setAttribute("type", "text/css");
	style_node.setAttribute("media", "screen"); 

	if (!isIE) style_node.appendChild(document.createTextNode(selector + " {" + declaration + "}"));

	document.getElementsByTagName("head")[0].appendChild(style_node);

	if (isIE && document.styleSheets && document.styleSheets.length > 0) {
		var last_style_node = document.styleSheets[document.styleSheets.length - 1];
		if (typeof(last_style_node.addRule) == "object") last_style_node.addRule(selector, declaration);
	}
};

function MagicToolbox_initMagicBigCommerce() {

	if ($mjs('MagicImage')) {
		$mjs('MagicImage').parentNode.removeChild($mjs('MagicImage'));
	}

    var $MAGICJS = (typeof magicJS == "undefined")?$J:magicJS;
	$mjs( $MAGICJS.$A($MAGICJS.body.byTag('A')).filter(function(o){ 
		return o.getAttribute('rel')=='prodImage'; 
	}) ).forEach(function(o) {
		
		if (!o.innerHTML.match(/.*img.*/mi)) {
			o.parentNode.removeChild(o);
			return;
		}

    	o.className = MagicToolbox_toolName;

    	o.setAttribute('title',$(o).find('img').attr('title') );

    	o.setAttribute('id', 'MagicImage');
    	if (MagicToolbox_toolName=='MagicMagnify' || MagicToolbox_toolName=='MagicMagnifyPlus') {
    		o.setAttribute('rel','disable-crossdomain:true;');
    	} else if (MagicToolbox_toolName=='MagicZoomPlus' || MagicToolbox_toolName=='MagicZoom' ) {
    		//o.setAttribute('rel','selectors-class: Active');
    		MagicZoomPlus.options['selectors-class'] = 'Active';
    	} else {
    		o.setAttribute('rel','');
    	}

    	o.setAttribute('rel','prodImage');

		if (MagicToolbox_firstInit) {
            var elms = document.getElementsByTagName('SCRIPT');
            for (var i in elms) {	
            	if (elms[i].innerHTML) {
            		var matches = elms[i].innerHTML.match(/\$\("#ProductDetails"\)\.updateProductDetails.*"image":"(.*?)","thumb":"(.*?)"/mi)
            		if (matches) {
    					o.href = matches[1].replace(/\\/gm,"");
    					$(o).find('img').attr('src',matches[2].replace(/\\/gm,""));
            		}            		
            	}
            }    		
		}

    	o.setAttribute('onclick','');

    	if (MagicToolbox_firstInit) {
        	var thId = 0;

        	var scrollimages = document.createElement('DIV');

        	while (elm = $mjs('TinyImage_'+thId)) {

        		var thA = elm.parentNode;

        		var smallImageURL = thA.getAttribute('rel').replace(/.*"smallimage": "(.*?)".*/gm,"$1");
        		var largeImageURL = thA.getAttribute('rel').replace(/.*"largeimage": "(.*?)".*/gm,"$1");

        		thA.setAttribute('rev',smallImageURL);
        		thA.className='Selector';
        		thA.href = largeImageURL;

            	var rel = '';
                switch(MagicToolbox_toolName) {
                	case 'MagicZoom': rel="zoom-id:"; break;
                	case 'MagicZoomPlus': rel="zoom-id:"; break;
                	case 'MagicThumb': rel="thumb-id:"; break;
                	case 'MagicMagnify': rel=""; break;
                	case 'MagicMagnifyPlus': rel=""; break;
                }
                thA.setAttribute('rel',rel+'MagicImage');

                $mjs('TinyImageBox_'+thId).setAttribute('onclick','');
                $mjs('TinyImageBox_'+thId).setAttribute('onmouseover','');
                

                if (thId==0) {
                	//MagicToolbox_addCSSRule('.Selector.Active','border:'+$mjs('TinyImageBox_'+thId).style.border);
                	//MagicToolbox_addCSSRule('.Selector.Active img','border:2px solid #ffffff');
                }
                if (thId==1) {
    				//MagicToolbox_addCSSRule('.Selector','border:'+$mjs('TinyImageBox_'+thId).style.border);
    				//MagicToolbox_addCSSRule('.Selector img','border:2px solid #ffffff');
               		MagicToolbox_addCSSRule('#ProductDetails .ProductTinyImageList ul li','border:'+$mjs('TinyImageBox_'+thId).style.border+" !important");
                	MagicToolbox_addCSSRule('.TinyOuterDiv','border:2px solid #fff !important;');
                }

                var scrollElement = thA.cloneNode(true);

                scrollimages.appendChild(scrollElement);

        		thId++;
        	}

        	if (thId>3 && typeof(MagicScroll)!='undefined') {
        		scrollimages.className='MagicScroll';
        		$mjs('TinyImageBox_0').parentNode.parentNode.replaceChild(scrollimages,$mjs('TinyImageBox_0').parentNode);
        	}

        	MagicToolbox_firstInit = false;
		}

    	switch(MagicToolbox_toolName) {
    		case 'MagicZoom': MagicZoom.refresh(); break;
    		case 'MagicZoomPlus': MagicZoomPlus.refresh(); break;
    		case 'MagicThumb': MagicThumb.refresh(); break;
    		case 'MagicMagnify': MagicMagnify.start(); break;
    		case 'MagicMagnifyPlus': MagicMagnifyPlus.start(); break;
    	}

        if (thId>3 && typeof(MagicScroll)!='undefined') {
        	MagicScroll.init();
        }

	});
}

var MagicToolbox_toolName = '', MagicToolbox_firstInit = true, MagicToolbox_thumb, MagicToolbox_image;

$mjs(document).je1('domready', function() {

    var elms = document.getElementsByTagName('SCRIPT');
    for (var i in elms) {
    	if (typeof elms[i].getAttribute == "function" && (' '+elms[i].getAttribute("src")+' ').match(/.*magic\-bigcommerce\.js.*/)) {
    		MagicToolbox_toolName = elms[i].getAttribute("src").replace(/.*magic\-bigcommerce\.js\?tool=([a-zA-Z])/gm,"$1");
    		break;
    	}
    	if (elms[i].src && (' '+elms[i].src+' ').match(/.*magic\-bigcommerce\.js.*/)) {
    		MagicToolbox_toolName = elms[i].src.replace(/.*magic\-bigcommerce\.js\?tool=([a-zA-Z])/gm,"$1");
    		break;
    	}    		
    }

    MagicToolbox_initMagicBigCommerce();


    return;
});



$.fn.updateProductDetails_old = $('#ProductDetails').updateProductDetails;
$.fn.updateProductDetails = function() {
	
	$('#ProductDetails').updateProductDetails_old(arguments[0]);

	MagicToolbox_thumb = arguments[0].thumb;
	MagicToolbox_image = arguments[0].image;

	if (MagicToolbox_firstInit) return;

    var $MAGICJS = (typeof magicJS == "undefined")?$J:magicJS;
	$mjs( $MAGICJS.$A($MAGICJS.body.byTag('A')).filter(function(o){ 
		return o.getAttribute('rel')=='prodImage'; 
	}) ).forEach(function(o) {

    		o.href = MagicToolbox_image;
    		//o.className = MagicToolbox_toolName;
    		$(o).find('img').attr('src',MagicToolbox_thumb);
	
        	switch(MagicToolbox_toolName) {
        		case 'MagicZoom': MagicZoom.refresh(); break;
        		case 'MagicZoomPlus': MagicZoomPlus.refresh(); break;
        		case 'MagicThumb': MagicThumb.refresh(); break;
        		case 'MagicMagnify': MagicMagnify.start(); break;
        		case 'MagicMagnifyPlus': MagicMagnifyPlus.start(); break;
        	}
	
	});

	MagicToolbox_initMagicBigCommerce('update',arguments[0].image,arguments[0].thumb);
}

$.fn.jqzoom = function() {};
$.fn.fancybox.build = function() {};
