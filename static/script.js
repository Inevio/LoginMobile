
var win = $(this);


win.on('click', '.sign-in', function(){

  $('.inevio-logo').transition({
    'margin-top': '156px'
  },600,function(){});

  $('.slogan').transition({
    'left': '-100%'
  },300,function(){

    $(this).hide();
    $('.login.inputs').css('display','block').transition({
      'left' : '0%'
    },300);

  });

  $('.sign-up').css({'margin-right':'0px'});

  $('.sign-up').transition({
    'opacity': '0'
  },100,function(){
    $(this).hide();
  });

  $(this).transition({
    'width': '317px',
    'background-color': '#69a55a',
    'border': 'none',
    'height': '58px',
    'box-shadow': 'inset 0 -1px rgba(0, 0, 0, 0.2)'
  },600,function(){
    $(this).addClass('accept');
    $(this).removeClass('transparent');
    $('.forgot').show();
  });

  $('.more').transition({
    'opacity' : '0'
  },300, function(){
    $(this).hide();
  });



})

.on('click', '.sign-up', function(){

  $('.inevio-logo').transition({
    'margin-top': '156px'
  },600,function(){});

  $('.slogan').transition({
    'left': '-100%'
  },300,function(){

    $(this).hide();
    $('.register.inputs').css('display','block').transition({
      'left' : '0%'
    },300);

  });

  $('.sign-in').transition({
    'opacity': '0'
  },100,function(){
    $(this).hide();
  });

  $(this).transition({
    'width': '317px',
    'margin-right':'0px',
    'background-color': '#69a55a',
    'border': 'none',
    'height': '58px',
    'box-shadow': 'inset 0 -1px rgba(0, 0, 0, 0.2)'
  },600,function(){
    $('.login-buttons').css('margin-top','58px');
  });

  $('.more').transition({
    'opacity' : '0'
  },300, function(){
    $(this).hide();
  });

});
