$(function () {

    var all_portfolio_items = $("#portfolio-items1 div");
  
    $("#portfolio-button-container button").click(function(e) {
      var category = $(this).data('portfolio-section');
      console.log("Show " + category);
  
      $("#portfolio-button-container button").removeClass('active');
      $(this).addClass('active');
  

  
      all_portfolio_items.each(function() {
        if ($(this).hasClass(category)) {
          $(this).addClass('show',1000);
        } else {
          $(this).removeClass('show',1000);
        }
      });
  
    });
  });