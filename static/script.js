
var win = $(this);


win.on('click', '.sign-in', function(){

  $('.sign-up').css({'margin-right':'0px'});

  $('.sign-up').transition({
    'opacity': '0'
  },100,function(){
    $(this).hide();
  });

  $('.sign-in').transition({
    'width': '317px',
    'background-color': '#69a55a',
    'border': 'none',
    'box-shadow': 'inset 0 -1px rgba(0, 0, 0, 0.2)',
    'background-image': 'linear-gradient(to top, #5cb05a, #6ebd6c);'
  },800,function(){
    $(this).addClass('accept');
  });

  $('.slogan').transition({
    'left': '-100%'
  },800,function(){
    //$(this).hide();
  });

  $('.inevio-logo').transition({
    'margin-top': '156px'
  },600,function(){});

})
