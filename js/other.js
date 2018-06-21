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
    var headTitle = $(this).attr('data-title') || '註解';
    var content = $(this).attr('data-content');
    $('body').append('<div id="remark-popout"><div id="remark-content"><header class="l-size bb-1">'+headTitle+'</header><p class="content remark-color">'+content+'</p></div></div>');
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
  // content popout
  $(document).on('click','.popout',function(e){
    e.preventDefault();
    var urlPath = $(this).attr('data-urlpath');
    var headTitle = $(this).attr('data-title') || '\u00A0 ';
    $.ajax({
      type: "GET",
      url: urlPath,
      cache:false
    })
    .done(function(d){
      $('#remark-popout').remove()
      $('body').append('<div id="remark-popout"><div id="remark-content" class="xl"><header class="l-size bb-1">'+headTitle+'</header></div></div>');
      $('#remark-content').append(d);
      $('#remark-popout').fadeIn();
      $('body').addClass('act');
      popFadeOut();
    })
    .fail(function(jqXHR,exception){
      if (jqXHR.status === 0) {
        msg = 'Not connect.\n Verify Network.';
      } else if (jqXHR.status == 404) {
        msg = 'Requested page not found. [404]';
      } else if (jqXHR.status == 500) {
        msg = 'Internal Server Error [500].';
      } else if (exception === 'parsererror') {
        msg = 'Requested JSON parse failed.';
      } else if (exception === 'timeout') {
        msg = 'Time out error.';
      } else if (exception === 'abort') {
        msg = 'Ajax request aborted.';
      } else {
        msg = 'Uncaught Error.\n' + jqXHR.responseText;
      }
      console.log(jqXHR.responseText)
    })
    return false;
    function popFadeOut(){
      $('body').on('click','#remark-popout', function(e) {
        if (e.target !== this)
        return;

        $('#remark-popout').fadeOut(400,function(){
          $('#remark-popout').remove();
        });
        $('body').removeClass('act');
      });
      $('body').on('click','#remark-popout header', function(e) {
        $('#remark-popout').fadeOut(400,function(){
          $('#remark-popout').remove();
        });
        $('body').removeClass('act');
      });
    }
  })
  //sort table
  $(document).on('click','.sort',function(){
    var num = $(this).index();
    var tID = $(this).closest('.table').attr('id');
    sortTable(tID,num);
  });
  function sortTable(tableID,n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById(tableID);
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("tr");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  //details and summary for ie and edge
  $('details>*').not('summary').hide();
  $(document).on('click','summary',function(){
    $(this).siblings().fadeToggle();
  });
})($)