var win = $(this);
var contentContainer = $('.content-container');
var initialMarginRightBtn = $('.login-buttons .accept').css('margin-right');
var initialMarginLeftLogo = $('.login-screen .inevio-logo.dark').css('margin-left');
var initialButtonWidth = $('.login-buttons .accept').css('width');
var initialHeight = contentContainer.height();
var inevioLogo = $('.inevio-logo');
var backButton = $('.back-button');
var initialMarginTopLogo = inevioLogo.css('top');
var loginStage = 0;// 0 = intro, 1=sign-in, 2=sign-up, 3=recover 4=recover-success, -1 transition
var mc;
var hammerLoaded = false;
var menuMode = false;
var menuStage = 1;
var transitioning = false;
var used = false;
/*
var intervalo = setInterval( function(){
  if( typeof Hammer !== 'undefined' ){
    clearInterval( intervalo );
    console.log('cargo');
    hammerLoaded = true;
    mc = new Hammer(win[0] , {
      domEvents:true
    });
  }
},50);
*/
var createCache = function(){

  initialMarginTopLogo = inevioLogo.css('top');
  initialMarginRightBtn = $('.login-buttons .accept').css('margin-right');
  initialMarginLeftLogo = $('.login-screen .inevio-logo.dark').css('margin-left');
  initialButtonWidth = $('.login-buttons .accept').css('width');
  initialHeight = contentContainer.height();

}


var back = function( stage ){

  $('.input.error').removeClass('error');

  if( stage == 1 ){

    loginStage = -1;
    inevioLogo.transition({
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

    backButton.transition({
      'opacity' : '0'
    },500, function(){
      $(this).hide();
    });

    $('.forgot').hide();

  }else if( stage == 2 ){

    loginStage = -1;
    inevioLogo.transition({
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

    backButton.transition({
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

var menuSwipe = function( value ){

  if( !transitioning ){

    if( value === 1 ){

      if( menuStage !== 3 ){

        transitioning = true;
        menuStage++;

        $('.menu-content.active').stop().clearQueue().transition({
          'left' : '-100%'
        },500,function(){

          $(this).removeClass('active');
          $(this).hide();
          $('.bullet.active').removeClass('active');
          $('.bullet-' + menuStage).addClass('active');
          transitioning = false;

        })

        $('.menu-content-' + menuStage).show().stop().clearQueue().transition({
          'left' : '0'
        },500,function(){
          $(this).addClass('active');
        })

      }

    }else{

      if( menuStage !== 1 ){

        transitioning = true;
        menuStage--;
        $('.menu-content.active').stop().clearQueue().transition({
          'left' : '100%'
        },500,function(){

          $(this).removeClass('active');
          $(this).hide();
          $('.bullet.active').removeClass('active');
          $('.bullet-' + menuStage).addClass('active');
          transitioning = false;

        })

        $('.menu-content-' + menuStage).show().stop().clearQueue().transition({
          'left' : '0'
        },500,function(){
          $(this).addClass('active');
        })

      }

    }

  }

}

$('.sign-in').on('click', function(){

  if( !used ){
    used = true;
    createCache();
  }

  if( loginStage == 0 ){

    loginStage = -1;
    inevioLogo.transition({
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
    },50,function(){//50
      $(this).hide();
    });

    $(this).transition({
      'width': '317px',
      'background-color': '#60b25e',
      'border': '2px solid #60b25e'
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

    backButton.show().transition({
      'opacity' : '1'
    },500);

  }else if( loginStage == 1 ){

    if( $('.login.inputs .username').find('input').val() === 'a' ){
      $('.login.inputs .input').removeClass('error');
    }else{
      $('.login.inputs .input').addClass('error');
    }

  }else if( loginStage == 3 ){

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

  }

});

$('.sign-up').on('click', function(){

  if( !used ){
    used = true;
    createCache();
  }

  if( loginStage == 0 ){

    loginStage = -1;
    inevioLogo.transition({
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

    initialHeight = contentContainer.height();

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

    backButton.show().transition({
      'opacity' : '1'
    },500);

  }

});

$('.forgot').on('click', function(){

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

backButton.on('click', function(){

  back( loginStage );

});

$('.more').on('click', function(){

  if( !used ){
    used = true;
    createCache();
  }

  initialMarginLeftLogo = $('.login-screen .inevio-logo.dark').css('margin-left');
  if( $('.start .inevio-logo').length == 0 ){
    $('.start').append( inevioLogo.clone().css({'top':'185px','background-size':'cover', 'margin-left': $('.inevio-logo.dark').css('margin-left') }) );
  }

  $('.start .inevio-logo.white').show().transition({
    'margin-left' : '0px',
    'width': '108px',
    'height': '21px',
    'top': '20px',
    'left': '20px',
    'opacity' : '0.2'
  },1000,function(){
    menuMode = true;
    $(this).hide();
    $('.menu-screen .header figure').show();
  });

  $('.start .inevio-logo.dark').show().transition({
    'margin-left' : '0px',
    'width': '108px',
    'height': '21px',
    'top': '20px',
    'left': '20px',
    'opacity' : '1'
  },1000,function(){
    $(this).hide();
  });

  $('.login-screen .inevio-logo').hide();

  $('.login-screen').transition({
    'bottom' : '100%'
  },1000,function(){
    $(this).hide();
  });

  $('.menu-screen').show().transition({
    'bottom' : '0'
  },1000);

});

$('.less').on('click', function(){

  $('.start .inevio-logo.white').show().transition({
    'margin-left' : initialMarginLeftLogo,
    'width': '251px',
    'height': '49px',
    'top': '185px',
    'left': '0',
    'opacity' : '1'
  },1000,function(){
    menuMode = false;
    $(this).hide();
    $('.login-screen .inevio-logo').show();
  });

  $('.start .inevio-logo.dark').show().transition({
    'margin-left' : initialMarginLeftLogo,
    'width': '251px',
    'height': '49px',
    'top': '185px',
    'left': '0',
    'opacity' : '0'
  },1000,function(){
    $(this).hide();
  });

  $('.login-screen').show().transition({
    'bottom' : '0'
  },1000);

  $('.menu-screen').transition({
    'bottom' : '-100%'
  },1000,function(){
    $(this).hide();
  });

  $('.menu-screen .header figure').hide();

});

$('body').on( 'swiperight', function(){

  if( menuMode ){
    menuSwipe(-1);
  }else{
    backButton.click();
  }

})

.on( 'swipeleft', function(){

  if( menuMode ){
    menuSwipe(1);
  }

})

.on( 'swipeup', function(){

  if( !menuMode ){
    $('.more').click();
  }

})

.on( 'swipedown', function(){

  if( menuMode ){
    $('.less').click();
  }

});

/*$('.bullet-2').on('click', function(){

  if( !menuMode ){
    backButton.click();
  }else{
    menuSwipe(-1);
  }

});

$('.bullet-3').on('click', function(){

  if( !menuMode ){
    backButton.click();
  }else{
    menuSwipe(1);
  }
});*/
