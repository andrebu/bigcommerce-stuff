$(document).ready(function()
  {
    $(window).resize(function()
      {
        $('#FloatingSocialLinks').css(
          {
            // top: ($(window).height() / 2) - 256
            top: "30%"
        });
    });
 
    // call `resize` to center elements
    $(window).resize();
});
