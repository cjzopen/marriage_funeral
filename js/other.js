(function(){
  var BODY = $('body');
  // accordion slideToggle
  BODY.on('click','.accordion-title',function(){
    var accordion = $(this).closest('.accordion');
    accordion.toggleClass('active');
    accordion.find('.accordion-body').slideToggle();
  });
  //confirm
  var popout = $('#popout');
  BODY.on('click','#popout', function(e) {
    if (e.target !== this)
    return;

    popout.fadeOut()
    BODY.removeClass('act')
  });
  BODY.on('click','#popout header', function(e) {
    popout.fadeOut()
    BODY.removeClass('act')
  });
  // remark
  $('.remark').on('click',function(){
    var content = $(this).attr('data-content');
    $('body').append('<div id="remark-popout"><div id="remark-content"><header class="l-size bb-1">註解</header><p class="content remark-color">'+content+'</p></div></div>');
    $('#remark-popout').fadeIn();
    var remark = $('#remark-popout');
    BODY.on('click','#remark-popout', function(e) {
      if (e.target !== this)
      return;

      remark.fadeOut(400,function(){
        remark.remove();
      });
      BODY.removeClass('act')
    });
    BODY.on('click','#remark-popout header', function(e) {
      remark.fadeOut(400,function(){
        remark.remove();
      });
      BODY.removeClass('act')
    });
    return false;
  });
})($)