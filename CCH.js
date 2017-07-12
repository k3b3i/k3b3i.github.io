$(document).ready(function(){

  // getting prismic posts //

  Prismic.Api('https://kebeicch.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "cch_content"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");
      var desciption;
      var images;

      for (var i = 0; i < results.length; i++) {
        
        description = results[i].getStructuredText("cch_content.description").asHtml();
        images = results[i].getGroup("cch_content.images1").asHtml();

        var gallery = $("<div class='imagegallery'></div>");
        var info = $("<p class='desc'></p>");

        info.append(description);
        gallery.append(images);

        
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
          
          $(info).appendTo(body).insertAfter(".phonesplash");

        } else {

          $(info).appendTo(body).insertAfter(".splash");

        }
        $(gallery).appendTo(body).insertBefore(".contain");

        $(".imagegallery > section > img").addClass("bigimage");

      

      }

      // add class to all images in the gallery 
      


    });
  }, "MC5XV1pSRUNZQUFDa0EzSkow.X--_vRwYOu-_vU3vv70_Ne-_vSvvv70TSO-_vTnvv73vv73vv73vv71DW--_ve-_ve-_vTIzU--_ve-_vUg");





    $(".down,.arrow").click(function(){
      var one = $(".desc").offset();
      var two = $(window).height()*.33;
      $(".arrow").fadeOut();
        $("body,html").animate({scrollTop: one.top-two},700);
    });

    $(".purchase").click(function(){
      var one = $(".contain").offset();
      var two = $(window).height()*.15;
        $("body,html").animate({scrollTop: one.top-two},700);
    });

    $(".gallery").click(function(){
      var one = $(".imagegallery").offset();
      var two = $(window).height()*.05;
        $("body,html").animate({scrollTop: one.top-two},700);
    });

    $(".cart").click(function(){
      $(".cartpage").toggleClass("out");
    });

    var price = 39;

    $(".buyone").click(function(){

        $(".cartcount").html(function(i, val) { 
          return val*1+1 
        });

        $(".totalnumber > p").html(function(i, val) {
          return val*1+price
        });

        $( ".cartpage" ).append("<div class='cartitem'><p class='producttitle'>Copper</p><p class='price'>$39</p><p class='removeone'>Remove</p></div>");
          //add variant to array//
          cartItems.push('35068487235:1');

    });

    
    $(".buytwo").click(function(){

        $(".cartcount").html(function(i, val) { 
          return val*1+1 });

        $(".totalnumber > p").html(function(i, val) {
          return val*1+price
          });

        $( ".cartpage" ).append("<div class='cartitem'><p class='producttitle'>Brass</p><p class='price'>$39</p><p class='removetwo'>Remove</p></div>");
          //add variant to array//
          cartItems.push('35068360067:1');

    });

    
    $(".buythree").click(function(){

        $(".cartcount").html(function(i, val) {
          return val*1+1 
          });

        $(".totalnumber > p").html(function(i, val) {
          return val*1+price
          });

        $( ".cartpage" ).append("<div class='cartitem'><p class='producttitle'>Stainless</p><p class='price'>$39</p><p class='removethree'>Remove</p></div>");
          //add variant to array//
          cartItems.push('35068492547:1');

    });

    //close cart page//

    $(".close").click(function(){
      $(".cartpage").removeClass("out");
    });

    //remove copper items from cart//
    
    $('.cartpage').on('click','.removeone',function(){
    
        $(this).parents('.cartitem').remove();
        //minus 1 from cart count//
        $(".cartcount").html(function(i, val) {
          return val*1-1 
        });
        //subtract 40 from total//
        $(".totalnumber > p").html(function(i, val) {
          return val*1-price 
        });

        var search_term = '35068487235:1';


        for (var i=cartItems.length-1; i>=0; i--) {
            if (cartItems[i] === search_term) {
                cartItems.splice(i, 1);
                break;    
            }
        }

    });

    //remove brass items from cart//

    $('.cartpage').on('click','.removetwo',function(){
    
        $(this).parents('.cartitem').remove();
        //minus 1 from cart count//
        $(".cartcount").html(function(i, val) {
          return val*1-1 
        });
        //subtract 40 from total//
        $(".totalnumber > p").html(function(i, val) {
          return val*1-price 
        });

        var search_term = '35068360067:1';


        for (var i=cartItems.length-1; i>=0; i--) {
            if (cartItems[i] === search_term) {
                cartItems.splice(i, 1);
                break;    
            }
        }


    });

    //remove stainless items from cart//

    $('.cartpage').on('click','.removethree',function(){
    
        $(this).parents('.cartitem').remove();
        //minus 1 from cart count//
        $(".cartcount").html(function(i, val) {
          return val*1-1 
        });
        //subtract 40 from total//
        $(".totalnumber > p").html(function(i, val) {
          return val*1-price 
        });

        var search_term = '35068492547:1';

        for (var i=cartItems.length-1; i>=0; i--) {
            if (cartItems[i] === search_term) {
                cartItems.splice(i, 1);
                break;    
            }
        }

    });

    $(".buyone,.buytwo,.buythree,.removeone,.removetwo,.removethree").click(function(){

       if( $('.cartitem').length = 0 ){
            $(".checkout").hide();
            $(".empty").show();
        } else {
            $(".checkout").show();
            $(".empty").hide();
        }

    });

    var cartItems = [];
    var shopifyLink = "http://nihil-artikel.myshopify.com/cart/";

    // generate final permalink //

    $(".checkout").click(function() {
        var link = shopifyLink;
        cartItems.forEach(function(item) {
            link += item + ',';
        });
        //direct browser to generated link//
        window.location.href = link;
    });


});