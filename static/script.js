
var win = $(this);
var contentContainer = $('.content-container');
var initialMarginTopLogo = $('.inevio-logo').css('margin-top');
var initialMarginRightBtn = $('.login-buttons .accept').css('margin-right');
var initialButtonWidth = $('.login-buttons .accept').css('width');
var initialHeight = contentContainer.outerHeight(false);
var recoverMargin = $('.passwd-recover').css('margin-top');
var loginStage = 0;// 0 = intro, 1=sign-in, 2=sign-up, 3=recover 4=recover-success, -1 transition

win.on('click', '.sign-in', function(){

  loginStage = -1;
  $('.inevio-logo').transition({
    'margin-top': '0px',
  },500);

  $('.slogan').transition({
    'left': '-100%'
  },250,function(){

    $(this).hide();
    $('.login.inputs').show().transition({
      'left' : '0%'
    },250);

  });

  $('.sign-up').css({'margin-right':'0px'}).transition({
    'opacity': '0'
  },50,function(){
    $(this).hide();
  });

  $(this).transition({
    'width': '317px',
    'background-color': '#69a55a',
    'border': 'none',
    'box-shadow': 'inset 0 -1px rgba(0, 0, 0, 0.2)',
    'background-image' : 'linear-gradient(to top, #5cb05a, #6ebd6c)'
  },500,function(){

    $(this).addClass('accept').css('float','right');
    $(this).removeClass('transparent');
    $('.forgot').show();
    loginStage = 1;

  });

  $('.more').transition({
    'opacity' : '0'
  },500, function(){
    $(this).hide();
  });

  $('.back-button').show().transition({
    'opacity' : '1'
  },500);

})

.on('click', '.sign-up', function(){

  loginStage = -1;
  $('.inevio-logo').transition({
    'margin-top': '0px',
  },500);

  $('.slogan').transition({
    'left': '-100%'
  },250,function(){

    $(this).hide();
    $('.inputs.register').show().transition({
      'left' : '0%'
    },250);

  });

  contentContainer.transition({
    'height' : initialHeight + 73
  },500);

  $('.sign-in').hide();

  $(this).transition({
    'width': '317px',
    'margin-right':'0px',
    'background-color': '#69a55a',
    'border': 'none',
    'height': '58px',
    'box-shadow': 'inset 0 -1px rgba(0, 0, 0, 0.2)'
  },500);

  $('.more').transition({
    'opacity' : '0'
  },500, function(){

    $(this).hide();
    loginStage = 2;

  });

  $('.back-button').show().transition({
    'opacity' : '1'
  },500);

})

.on('click', '.forgot', function(){

  loginStage = -1;
  $('.passwd-recover').css('margin-top','0').show().transition({
    'opacity': '1',
    'margin-top': recoverMargin
  },500);

  contentContainer.transition({
    'height' : '360px'
  },500);

  $('.inputs.login .password').transition({
    'opacity':'0'
  },500,function(){

    loginStage = 3;
    $(this).hide();
    $('.forgot').hide();
    $('.inputs.login .username').removeClass('username').addClass('email').find('input').attr('placeholder','Email').val('');

  });

  $('.login-buttons').transition({
  },500,function(){
    $(this).find('.sign-in span').text('Recover');
  });

})

.on('click', '.back-button', function(){

  if( loginStage == 1 ){

    loginStage = -1;
    $('.inevio-logo').transition({
      'margin-top': initialMarginTopLogo,
    },500);

    $('.login.inputs').transition({
      'left': '100%'
    },250,function(){

      $(this).hide();
      $('.slogan').show().transition({
        'left' : '0%'
      },250);

    });

    $('.sign-in').css('float','right').transition({
      'width': initialButtonWidth,
    },500,function(){

      $('.sign-up').css( 'margin-right', initialMarginRightBtn ).show().css('opacity','1');
      $(this).addClass('transparent');
      $(this).removeClass('accept').removeAttr( 'style' );
      loginStage = 0;

    });

    $('.more').show().transition({
      'opacity' : '1'
    },500);

    $('.back-button').transition({
      'opacity' : '0'
    },500, function(){
      $(this).hide();
    });

    $('.forgot').hide();

  }else if( loginStage == 2 ){

    loginStage = -1;
    $('.inevio-logo').transition({
      'margin-top': initialMarginTopLogo,
    },500,function(){});

    $('.inputs.register').transition({
      'left': '100%'
    },250,function(){

      $(this).hide();
      $('.slogan').show().transition({
        'left' : '0%'
      },250);

    });

    contentContainer.transition({
      'height' : initialHeight
    },500);

    $('.sign-up').transition({
      'width': initialButtonWidth
    },500,function(){

      //$(this).removeAttr( 'style' );
      $('.sign-in').show();
      loginStage = 0;

    });

    $('.more').show().transition({
      'opacity' : '1'
    },500);

    $('.back-button').transition({
      'opacity' : '0'
    },500, function(){
      $(this).hide();
    });

  }else if( loginStage == 3 ){

    loginStage = -1;
    $('.passwd-recover').transition({
      'opacity': '0',
      'margin-top': '0'
    },500,function(){
      $(this).hide();
    });

    contentContainer.transition({
      'height' : initialHeight
    },500);

    $('.inputs.login .password').show().transition({
      'opacity':'1'
    },500,function(){

      $('.forgot').show();
      $('.inputs.login .email').addClass('username').removeClass('email').find('input').attr('placeholder','Username').val('');
      loginStage = 1;

    });

    $('.login-buttons').transition({
    },500,function(){
      $(this).find('.sign-in span').text('Sign in');
    });


  }

});
