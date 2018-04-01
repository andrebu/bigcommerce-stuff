# BC-Timed-Sale-Banner
BigCommerce Timed Sale Banner

```CSS
/*----------Sale Banner-----------*/
#saleinfo {
	width: 76%;
	background: #D1F0DE;
	border: 4px dashed #22a358;
	padding: 10px;
	float: right;
	display: flex;
	margin: 13px 0 0;
	text-align: center;
	-webkit-transition: all 0.13s linear;
	-moz-transition: all 0.13s linear;
	transition: all 0.13s linear;
	font-family: Futura;
	font-size: 13px;
	box-sizing: border-box;
}
#SaleTopBanner {	
	margin-bottom: 0px !important;
	width: auto;
	display: block;
	margin: 0 auto;
	position: relative;
}
#countdownTo420 {
/* 	display:none; */
}
#countdownTo420Timer {
	color: #F47D77;
	color: #F2142B;
}
```


```HTML
          <div id="saleinfo"><p id="SaleTopBanner">Get ready for the holiday with our 420 sale! Enter <span class="green-bg-white-text">DANK420</span> at checkout for 15% off everything!</p><span id="countdownTo420">Ends in <span id="countdownTo420Timer"></span></span></div>
<script src="%%ASSET_js/countdown.js%%"></script>
<script type="text/javascript">
        // use countdown timer plugin to set the "countown to sale's end" clock 
        function setSaleTimer() {
            $('#countdownTo420Timer').countdown('2015/04/21', function(event) {
                $(this).html(event.strftime('%D days %H:%M:%S'));
            }).on('finish.countdown', function() {
                $('#saleinfo').remove();
            });
            //$('#countdownTo420').hide();
        }

        var saleInfoDiv = $('#saleinfo');
    
        // get the width of main content area and set the saleinfo banner to this width
        function getContentWidth() {
            var mainContentWidth = ($('.main #LayoutColumn1.Content').innerWidth()) - 1;
            saleInfoDiv.css('width', mainContentWidth)
        }
    
        //attach fade to the scroll event of the window object
        $(window).scroll(function () {
            var height = $('body').height();
            var scrollTop = $('body').scrollTop();
            var opacity = 1;
    
            // do some math here, setting up the scroll-fade condition
            if(scrollTop > 1) {
                opacity = 0.0;
            }
            //set the opacity of .saleinfo div
            saleInfoDiv.css('opacity', opacity);
        });

        // get the main content width again every time the browser window is resized and set the new width
        function widthOnResize() {
            $(window).bind("resize", function(){
                getContentWidth();
            });
        }
    $(document).ready(function() {
        setSaleTimer();
        getContentWidth();
        widthOnResize();
    });
</script>

```
