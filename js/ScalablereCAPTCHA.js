function reScale() {
    var $recaptcha = jQuery(".g-recaptcha iframe");
    var $parent = $recaptcha.parent().parent();
    if ($recaptcha.length > 0) {
      // clear applied css for calculations
      $recaptcha.css({ transform: "" });
      $parent.css({ height: "", width: "" });
      
      // unaltered width of the reCAPTCHA
      var rw = $recaptcha.width();
      var pw = $parent[0].offsetWidth;
      
      //target scale
      var s = (pw / rw).toPrecision(2);
      if (s < 1) {
        var scaleCSS = {
          // origin top-left
          "transform-origin": 0,
          // scale
          transform: "scale(" + s + ")",
          "-o-transform": "scale(" + s + ")",
          "-moz-transform": "scale(" + s + ")",
          "-ms-transform": "scale(" + s + ")",
          "-webkit-transform": "scale(" + s + ")"
        };
        $recaptcha.css(scaleCSS);
      }
    }
  }
  
  jQuery(document).ready(function() {
    setTimeout(function() {
      reScale();
    }, 500);
  });
  jQuery(window).resize(function() {
    reScale();
  });