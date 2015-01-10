1. Changed  **for product.html**
```HTML  
%%Panel.HTMLHead%%
    <body class="productPage">
        <script type="text/javascript" src="%%GLOBAL_CdnAppPath%%/javascript/jquery/plugins/validate/jquery.validate.js?%%GLOBAL_JSCacheToken%%"></script>
        <script type="text/javascript" src="%%GLOBAL_TPL_PATH%%/js/product.functions.js?%%GLOBAL_JSCacheToken%%"></script>
        <script type="text/javascript" src="%%GLOBAL_CdnAppPath%%/javascript/product.js?%%GLOBAL_JSCacheToken%%"></script>
        %%Panel.DrawerMenu%%
```  

to

```HTML  
%%Panel.HTMLHead%%
    <body class="productPage">
        <script type="text/javascript" src="%%GLOBAL_CdnAppPath%%/javascript/jquery/plugins/validate/jquery.validate.js?%%GLOBAL_JSCacheToken%%"></script>
        
<!-- <script type="text/javascript" src="%%GLOBAL_TPL_PATH%%/js/product.functions.js?%%GLOBAL_JSCacheToken%%"></script> -->
        <script type="text/javascript" src="%%ASSET_/js/product.functions.js%%"></script> 
        <script type="text/javascript" src="%%GLOBAL_CdnAppPath%%/javascript/product.js?%%GLOBAL_JSCacheToken%%"></script>
        %%Panel.DrawerMenu%%
```


------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------


2. Changed  **for Snippets/ProductThumbImage.html **

```HTML  
<div class="ProductThumbImage">
    <a rel="prodImage" style="margin:auto;" href="%%GLOBAL_InitialZoomImage%%"  onclick="%%GLOBAL_TinyImageClickJavascript%% return false;">
        <img src="%%GLOBAL_ThumbImageURL%%" alt="%%GLOBAL_ImageDescription%%" title="%%GLOBAL_ImageDescription%%" class="category-thumb-image" />
    </a>
</div>

<div id="productDemoVideo" class="%%GLOBAL_ProductId%%"></div>
```  

to 

```HTML  
%%Panel.MagicZoomPlusHeaders%%
<div class="MagicToolboxContainer">
    <a href="%%GLOBAL_InitialZoomImage%%" class="MagicZoomPlus" id="mainMagicZoomPlusImage" title="%%GLOBAL_ImageDescription%%" href="%%GLOBAL_InitialZoomImage%%">
        <img itemprop="image" src="%%GLOBAL_ThumbImageURL%%" alt="%%GLOBAL_ImageDescription%%" />
    </a>
    <!-- <div class="MagicToolboxSelectorsContainer">
        %% SNIPPET_ProductTinyImages %%
    </div> -->
</div>

<div id="productDemoVideo" class="%%GLOBAL_ProductId%%"></div>
```


------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------


3. Changed  **for Snippets/ProductTinyImage.html**

```HTML  
<li style = "height:%%GLOBAL_ProductTinyBoxHeight%%px; width:%%GLOBAL_ProductTinyBoxWidth%%px;" id="TinyImageBox_%%GLOBAL_ProductThumbIndex%%" onclick="%%GLOBAL_TinyImageOverJavascript%%" class="prodThumbImage"> 
    <!-- onmouseover="%%GLOBAL_TinyImageOverJavascript%%"  --> <!-- onclick="%%GLOBAL_TinyImageClickJavascript%%" -->

    <div class="TinyOuterDiv" style = "height:%%GLOBAL_ProductMaxTinyHeight%%px; width:%%GLOBAL_ProductMaxTinyWidth%%px;">
        <div style = "height:%%GLOBAL_ProductMaxTinyHeight%%px; width:%%GLOBAL_ProductMaxTinyWidth%%px;">
            <a href="javascript:void(0);" rel='{"gallery": "prodImage", "smallimage": "%%GLOBAL_ProductThumbImageURL%%", "largeimage": "%%GLOBAL_ProductZoomImageURL%%"}'><img id="TinyImage_%%GLOBAL_ProductThumbIndex%%" style="padding-top:%%GLOBAL_TinyImageTopPadding%%px;" width="%%GLOBAL_TinyImageWidth%%" height="%%GLOBAL_TinyImageHeight%%" src="%%GLOBAL_ProductTinyImageURL%%" alt="%%GLOBAL_ImageDescription%%" title="%%GLOBAL_ImageDescription%%" /></a>
        </div>
    </div>
</li>


<!-- onclick="%%GLOBAL_TinyImageClickJavascript%%" -->
```  

to

```HTML  
<li class="magictoolbox-li prodThumbImage" id="TinyImageBox_%%GLOBAL_ProductThumbIndex%%" onclick="%%GLOBAL_TinyImageOverJavascript%%">
    <a href="%%GLOBAL_ProductZoomImageURL%%" rel="zoom-id:mainMagicZoomPlusImage" rev="%%GLOBAL_ProductThumbImageURL%%" title="%%GLOBAL_ImageDescription%%">
        <img src="%%GLOBAL_ProductTinyImageURL%%" alt="%%GLOBAL_ImageDescription%%" />
    </a>
</li>
```  


------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------


