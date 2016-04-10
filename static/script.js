
var win = $(this);
var contentContainer = $('.content-container');
var initialMarginTopLogo = $('.inevio-logo').css('top');
var initialMarginRightBtn = $('.login-buttons .accept').css('margin-right');
var initialButtonWidth = $('.login-buttons .accept').css('width');
var initialHeight = contentContainer.outerHeight(false);
var loginStage = 0;// 0 = intro, 1=sign-in, 2=sign-up, 3=recover 4=recover-success, -1 transition

var back = function( stage ){

  if( stage == 1 ){

    loginStage = -1;
    $('.inevio-logo').transition({
      'top': initialMarginTopLogo,
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

  }else if( stage == 2 ){

    loginStage = -1;
    $('.inevio-logo').transition({
      'top': initialMarginTopLogo,
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

  }else if( stage == 3 ){

    loginStage = -1;
    $('.passwd-recover').transition({
      'opacity': '0'
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
      $('.login-buttons .sign-in').removeClass('recover').find('span').text('Sign in');
      loginStage = 1;

    });

  }else if( stage == 4 ){

    loginStage = -1;
    $('.passwd-recover').show().transition({
      'opacity' : '1'
    },500);

    $('.recover-passwd-success').transition({
      'left' : '100%'
    },250,function(){

      $(this).hide();
      $('.inputs.login').show().transition({
        'left' : '0'
      },250,function(){
        loginStage = 3;
      });

      $('.login-buttons').show().transition({
        'left' : '0%'
      },250);

    });

  }

}

win.on('click', '.sign-in', function(){

  if( loginStage == 0 ){

    loginStage = -1;
    $('.inevio-logo').transition({
      'top': '0px',
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
      'background-color': '#60b25e',
      'border': 'none'
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

  }else if( loginStage == 1 ){

    if( $('.login.inputs .username').find('input').val() === 'a' ){
      $('.login.inputs .input').removeClass('error');
    }else{
      $('.login.inputs .input').addClass('error');
    }

  }

})

.on('click', '.sign-up', function(){

  if( loginStage == 0 ){

    loginStage = -1;
    $('.inevio-logo').transition({
      'top': '0px',
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
      'background-color': '#60b25e',
      'border': 'none',
      'height': '58px'
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

  }

})

.on('click', '.forgot', function(){

  loginStage = -1;
  $('.passwd-recover').show().transition({
    'opacity': '1'
  },500);

  contentContainer.transition({
    'height' : '360px'
  },500);

  $('.inputs.login .password').transition({
    'opacity':'0'
  },500,function(){

    $(this).hide();
    $('.forgot').hide();
    $('.inputs.login .username').removeClass('username').addClass('email').find('input').attr('placeholder','Email').val('');
    $('.login-buttons .sign-in').addClass('recover').find('span').text('Recover');
    loginStage = 3;

  });

})

.on('click', '.recover', function(){

  console.log('recover');
  if( $('.login.inputs .email').find('input').val() === 'a' ){

    loginStage = -1;
    $('.login.inputs .email').removeClass('error');
    $('.passwd-recover').removeClass('error').text('Recover password');

    $('.passwd-recover').transition({
      'opacity' : '0'
    },500,function(){
      $(this).hide();
    });

    $('.inputs.login').transition({
      'left' : '-100%'
    },250,function(){

      $(this).hide();
      $('.recover-passwd-success').show().transition({
        'left' : '0'
      },250,function(){
        loginStage = 4;
      })

    });

    $('.login-buttons').transition({
      'left' : '-200%'
    },500,function(){
      $(this).hide();
    });

  }else{
    $('.login.inputs .email').addClass('error');
    $('.passwd-recover').addClass('error').text('Email incorrecto');
  }

})

.on('click', '.back-button', function(){

  back( loginStage );

})

.on('click', '.more', function(){

  $('.start').append( $('.inevio-logo').clone().css({'top':'185px','background-size':'cover', 'margin-left': $('.inevio-logo.dark').css('margin-left') }) );
  $('.login-screen .inevio-logo').hide();

  $('.start .inevio-logo.white').transition({
    'margin-left' : '0px',
    'width': '108px',
    'height': '21px',
    'top': '20px',
    'left': '20px',
    'opacity' : '0.2'
  },1000,function(){
    $(this).hide();
    $('.menu-screen .header figure').show();
  });

  $('.start .inevio-logo.dark').transition({
    'margin-left' : '0px',
    'width': '108px',
    'height': '21px',
    'top': '20px',
    'left': '20px',
    'opacity' : '1'
  },1000,function(){
    $(this).hide();
  });

  $('.login-screen').transition({
    'bottom' : '100%'
  },1000,function(){
    $(this).hide();
  });

  $('.menu-screen').show().transition({
    'bottom' : '0'
  },1000);

})

.on('key', 'enter', function(){

  if( loginStage === 0 || loginStage === 1 ){
    $('.sign-in').click();
  }else if( loginStage === 2 ){
    $('.sign-up').click();
  }else if( loginStage === 3 ){
    $('.recover').click();
  }

});
