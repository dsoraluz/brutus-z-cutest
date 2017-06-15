$(document).ready(()=>{

  // $('.title').hide();
  // $('.title').fadeIn(3000,()=>{
  //
  //
  // });

  $('.review-1').css('opacity', '1');
     setInterval(rotateImages, 5000);


    function rotateImages() {
      let firstRev = $('.review-1');
      let secondRev = $('.review-2');
      let thirdRev = $('.review-3');

      if (firstRev.hasClass('current')) {
        firstRev.removeClass('current');
          firstRev.animate({
            opacity: 0
          }, 1000, function() {
            secondRev.addClass('current');
            secondRev.animate({
              opacity: 1
            });
          });
      }
      else if (secondRev.hasClass('current')) {
        secondRev.removeClass('current');
        secondRev.animate({
          opacity: 0
        }, 1000, function() {
          thirdRev.addClass('current');
          thirdRev.animate({
            opacity: 1
          });
        });

      }
      else if (thirdRev.hasClass('current')){
        thirdRev.removeClass('current');
        thirdRev.animate({
          opacity: 0
        }, 1000, function() {
          firstRev.addClass('current');
          firstRev.animate({
            opacity: 1
          });
        });

      }

    }

  // $('#message').focusin(()=>{
  //   let value = $('#message').val();
  //
  //   if ($('#message').val() === ''){
  //     $('#message').val(`${value}`);
  //   } else {
  //     $('#message').val('');
  //
  //   }
  //
  // });
  //
  // $('#message').focusout(()=>{
  //   let value = $('#message').val();
  //   if ($('#message').val() === '' ){
  //     $('#message').val('(How can we collaborate together?)');
  //   } else {
  //     $('#message').val(`${value}`);
  //   }
  // });

  $(".button-collapse").sideNav();
  $('.carousel').carousel();
});
