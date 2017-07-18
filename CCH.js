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

        
      
        $(gallery).appendTo(body).insertBefore(".contain");

        if($(window).width() < 767) {
          
          $(info).appendTo(body).insertBefore(gallery);

        } else {

          $(info).appendTo(body).insertBefore(gallery);

        }

        $(".imagegallery > section > img").addClass("bigimage");

      

      }

      // add class to all images in the gallery 
      


    });
  }, "MC5XV1pSRUNZQUFDa0EzSkow.X--_vRwYOu-_vU3vv70_Ne-_vSvvv70TSO-_vTnvv73vv73vv73vv71DW--_ve-_ve-_vTIzU--_ve-_vUg");

    
    $("#c,#b,#s").hide();
    $("#c").first().show();
    $("#b").first().show();
    $("#s").first().show();
    var clicked = 0;
    
    $("#c,#b,#s").click(function () {
      clicked++;
      console.log(clicked);

      $(this).hide();
      $(this).next().show();

      if ($("#c:visible").length === 0){
        $(this).hide();
        $(this).first().show();
      }
      if ($("#b:visible").length === 0){
        $(this).hide();
        $(this).first().show();
      }
      if ($("#s:visible").length === 0){
        $(this).hide();
        $(this).first().show();
      }
        
    });


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

    $(".down").click(function(){
      var one = $(".desc").offset();
      var two = $(window).height()*.035;
      $(".arrow").fadeOut();
        $("body,html").animate({scrollTop: one.top-two},700);
    });

} else {

    $(".down").click(function(){
      var one = $(".desc").offset();
      var two = $(".contain").height()*.35;
      $(".arrow").fadeOut();
        $("body,html").animate({scrollTop: one.top-two},700);
    });

}




    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

      $(".purchase").click(function(){
      var one = $(".contain").offset();
        $("body,html").animate({scrollTop: one.top-150},700);
    });

    } else {

      $(".purchase").click(function(){
      var one = $(".contain").offset();
      var two = $(".contain").height()*.25;
        $("body,html").animate({scrollTop: one.top-two},700);
    });

    }





    $(".gallery").click(function(){
      var one = $(".imagegallery").offset();
        $("body,html").animate({scrollTop: one.top-150},700);
    });





    $(".cart").click(function(){
      $(".cartpage").toggleClass("out");
    });




    var price = 39;
    var copperP = parseInt($('.thispricec').text());
    var brassP = parseInt($('.thispriceb').text());
    var stainlessP = parseInt($('.thisprices').text());
    var totalP = copperP+brassP+stainlessP;


    $(".buyone",this).click(function(){

        $(".thispricec").html(function(i, val) { 
          return val*1+price
        });
        
        var copperP = parseInt($('.thispricec').text());
        var brassP = parseInt($('.thispriceb').text());
        var stainlessP = parseInt($('.thisprices').text());
        var totalP = copperP+brassP+stainlessP;

        $(".totalnumber > p").html(function() { 
          return totalP 
        });
        
        $(".empty").hide();

        $(".qtyc").html(function(i, val) { 
          return val*1+1
        });

        $(".shipping,.cartcontent,.cartitemcopper,.checkout").show();

        $(".cartcount").html(function(i, val) { 
          return val*1+1 
         });
   
    });

    
    $(".buytwo").click(function(){
        
        $(".thispriceb").html(function(i, val) { 
          return val*1+price
        });

        var copperP = parseInt($('.thispricec').text());
        var brassP = parseInt($('.thispriceb').text());
        var stainlessP = parseInt($('.thisprices').text());
        var totalP = copperP+brassP+stainlessP;

        $(".totalnumber > p").html(function() { 
          return totalP
        });

        $(".empty").hide();
    
        $(".qtyb").html(function(i, val) { 
          return val*1+1
        });

        $(".shipping,.cartcontent,.cartitembrass,.checkout").show();

        $(".cartcount").html(function(i, val) { 
          return val*1+1 
        });

    });

    
    $(".buythree").click(function(){
        
        $(".thisprices").html(function(i, val) { 
          return val*1+price
        });

        var copperP = parseInt($('.thispricec').text());
        var brassP = parseInt($('.thispriceb').text());
        var stainlessP = parseInt($('.thisprices').text());
        var totalP = copperP+brassP+stainlessP;

        $(".totalnumber > p").html(function() { 
          return totalP
        });

        $(".empty").hide();

        $(".qtys").html(function(i, val) { 
          return val*1+1
        });

        $(".shipping,.cartcontent,.cartitemstainless,.checkout").show();

        $(".cartcount").html(function(i, val) {
          return val*1+1 
          });

    });

    // update the cart total whenever anything is clicked within cart //

    $(".cartcontent").click(function(){

        var copperP = parseInt($('.thispricec').text());
        var brassP = parseInt($('.thispriceb').text());
        var stainlessP = parseInt($('.thisprices').text());
        var totalP = copperP+brassP+stainlessP;

        $(".totalnumber > p").html(function() {
                  return totalP;
                  });

        
    });

    $(".cartpage").click(function(){
      if ($(".cartitembrass").css('display')=== 'none' && $(".cartitemstainless").css('display')=== 'none' && $(".cartitemcopper").css('display')=== 'none') {
          $(".cartcontent,.shipping,.checkout").hide();
          $(".empty").show();
          $(".cartcount").text("0");
          console.log("wtf");
        }
      });

    // quantity //

    var total;

    //copper//

    $('.qtyplusc').click(function(){
              
              $(".qtyc").html(function(i, val) {
                  return val*1+1
                  });
              var one = parseInt($('.qtyc').text());
              var two = price;
              var total = one*two;
              console.log(one);
              console.log(two);
              console.log(total);
              
              $(".pricec > p").html(function(i, val) {
                  return total
                  });

    });

    $(".qtyminusc").click(function(e) {
      
      $(".qtyc").html(function(i, val) {
          return val*1-1
      });
      
      var one = parseInt($('.qtyc').text());
      var two = price;
      var total = one*two;
      console.log(one);
      console.log(two);
      console.log(total);
      
      $(".pricec > p").html(function(i, val) {
          return total
          });

      if (one===0){
        $(".cartitemcopper").hide();
      } else {
        $(".cartitemcopper").show();
      }
      
      });

    //brass//

      $('.qtyplusb').click(function(){
      
      $(".qtyb").html(function(i, val) {
          return val*1+1
          });

      $(".totalnumber > p").html(function(i, val) {
          return total;
          });
      
      
      var one = parseInt($('.qtyb').text());
      var two = price;
      var total = one*two;
      console.log(one);
      console.log(two);
      console.log(total);
      
      $(".priceb > p").html(function(i, val) {
          return total
          });

        
    });

    $(".qtyminusb").click(function(e) {
      
      $(".qtyb").html(function(i, val) {
          return val*1-1
      });
      
      var one = parseInt($('.qtyb').text());
      var two = price;
      var total = one*two;
      console.log(one);
      console.log(two);
      console.log(total);
      
      $(".priceb > p").html(function(i, val) {
          return total
          });

      if (one===0){
        $(".cartitembrass").hide();
      } else {
        $(".cartitembrass").show();
      }
      
      });

    //stainless//

    $('.qtypluss').click(function(){
      
      $(".qtys").html(function(i, val) {
          return val*1+1
          });

      $(".totalnumber > p").html(function(i, val) {
          return total;
          });
      
      
      var one = parseInt($('.qtys').text());
      var two = price;
      var total = one*two;
      console.log(one);
      console.log(two);
      console.log(total);
      
      $(".prices > p").html(function(i, val) {
          return total
          });

        
    });

    $(".qtyminuss").click(function(e) {
      
      $(".qtys").html(function(i, val) {
          return val*1-1
      });
      
      var one = parseInt($('.qtys').text());
      var two = price;
      var total = one*two;
      console.log(one);
      console.log(two);
      console.log(total);
      
      $(".prices > p").html(function(i, val) {
          return total
          });

      if (one===0){
        $(".cartitemstainless").hide();
      } else {
        $(".cartitemstainless").show();
      }
      
      });


    // quantity buttons and cart count //

    $(".qtyplusc,.qtyplusb,.qtypluss").click(function(){
      $(".cartcount").html(function(i, val) {
          return val*1+1 
        });
    });

    $(".qtyminusc,.qtyminusb,.qtyminuss").click(function(){
      $(".cartcount").html(function(i, val) {
          return val*1-1 
        });
    });


    //close cart page//

    $(".close").click(function(){
      $(".cartpage").removeClass("out");
    });

    //remove copper items from cart//
    
    $('.cartpage').on('click','.removeone',function(){
      var copperQ = parseInt($('.qtyc').text());
      var copperP= parseInt($('.thispricec').text());
        $('.cartitemcopper').hide();
        //minus 1 from cart count//
        $(".cartcount").html(function(i, val) {
          return val*1-copperQ 
        });
        //subtract 40 from total//
        $(".totalnumber > p").html(function(i, val) {
          return val*1-copperP 
        });

        $(".qtyc").text("0");
        $(".thispricec").text("0");

    });

    //remove brass items from cart//

    $('.cartpage').on('click','.removetwo',function(){
        var brassQ = parseInt($('.qtyb').text());
        var brassP= parseInt($('.thispriceb').text());
        $('.cartitembrass').hide();
        //minus 1 from cart count//
        $(".cartcount").html(function(i, val) {
          return val*1-brassQ 
        });
        //subtract 40 from total//
        $(".totalnumber > p").html(function(i, val) {
          return val*1-brassP 
        });

        $(".qtyb").text("0");
        $(".thispriceb").text("0");


    });

    //remove stainless items from cart//

    $('.cartpage').on('click','.removethree',function(){
        var stainlessQ = parseInt($('.qtys').text());
        var stainlessP= parseInt($('.thisprices').text());
        $('.cartitemstainless').hide();
        //minus 1 from cart count//
        $(".cartcount").html(function(i, val) {
          return val*1-stainlessQ 
        });
        //subtract 40 from total//
        $(".totalnumber > p").html(function(i, val) {
          return val*1-stainlessP 
        });

        $(".qtys").text("0");
        $(".thisprices").text("0");


    });

    // refresh on smaller size, just in case //
    // $(window).resize(function(){
    //       if ($(window).width() <= 767) {   
    //               location.reload(); 
    //     } else {

    //     }
    // });
  

    var cartItems = [];
    var shopifyLink = "http://nihil-artikel.myshopify.com/cart/";

    // generate final permalink //

    $(".checkout").click(function() {
        var skuC = "35068487235:";
        var skuB = "35068360067:";
        var skuS = "35068492547:";
        var e = ",";
        var f = ",";
        var g = ",";
        var copperQ = parseInt($('.qtyc').text());
        var brassQ = parseInt($('.qtyb').text());
        var stainlessQ = parseInt($('.qtys').text());
        var link = shopifyLink;
        var finalLink = shopifyLink + skuC + copperQ + e + skuB + brassQ + f + skuS + stainlessQ;

        if (copperQ===0) {
          console.log("no copper!");
          finalLink = finalLink.replace('35068487235:0,','');
        }

        if (brassQ===0) {
          console.log("no brass!");
          finalLink = finalLink.replace(',35068360067:0','').replace('35068360067:0,','');
        } 

        if (stainlessQ===0) {
          console.log("no stainless!");
          finalLink = finalLink.replace(',35068492547:0','');
         } 
         //else if (stainlessQ >= 1) {
        //   console.log("wtf");
        //   finalLink = finalLink.replace(',','');
        // }


        console.log(copperQ);
        console.log(brassQ);
        console.log(stainlessQ);
        console.log(finalLink);
        console.log(cartItems);

        //direct browser to generated link//
        window.location.href = finalLink;
    });


});