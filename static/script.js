
var win = $(this);
var contentContainer = $('.content-container');

win.on('click', '.sign-in', function(){

  $('.inevio-logo').transition({
    'margin-top': '156px',
  },300,function(){});

  $('.slogan').transition({
    'left': '-100%'
  },300,function(){

    $(this).hide();
    $('.login.inputs').css('display','block').transition({
      'left' : '0%'
    },300);

  });

  contentContainer.transition({
    'height' : '151px',
    'margin-bottom' : '15px',
    'margin-top' : '38px'
  },300);

  $('.sign-up').css({'margin-right':'0px'}).transition({
    'opacity': '0'
  },50,function(){
    $(this).hide();
  });

  $(this).transition({
    'width': '317px',
    'background-color': '#69a55a',
    'border': 'none',
    'height': '58px',
    'box-shadow': 'inset 0 -1px rgba(0, 0, 0, 0.2)'
  },300,function(){
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
    'margin-top': '156px',
  },300,function(){});

  $('.slogan').transition({
    'left': '-100%'
  },300,function(){

    $(this).hide();
    $('.inputs.register').css('display','block').transition({
      'left' : '0%'
    },300);

  });

  contentContainer.transition({
    'height' : '244px',
    'margin-bottom' : '0px',
    'margin-top' : '32px'
  },300);

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
  },300,function(){});

  $('.more').transition({
    'opacity' : '0'
  },300, function(){
    $(this).hide();
  });

})

.on('click', '.forgot', function(){

  $('.passwd-recover').show();

  $('.inputs.login').transition({},300,function(){
    $('.forgot').hide();
    $(this).find('.username').removeClass('username').addClass('email').find('input').attr('placeholder','Email').val('' );
  });

  contentContainer.transition({
    'height' : '157px',
    'margin-bottom' : '0px',
    'margin-top' : '32px'
  },300);

  $('.inputs.login .password').transition({
    'opacity':'0'
  },300,function(){
    $(this).hide();
  });

  $('.login-buttons').transition({
    'margin-top':'48px'
  },300,function(){
    $(this).find('.sign-in span').text('Recover');
  });

});
