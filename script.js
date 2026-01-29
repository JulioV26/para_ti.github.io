$(document).ready(function () {
  $('.valentines-day').click(function () {

    $('.envelope').fadeOut(600, function () {
      $('.heart, .text, .front').hide();

      $('#card')
        .css({
          visibility: 'visible',
          opacity: 0,
          transform: 'scale(0.5)'
        })
        .animate({ opacity: 1 }, {
          duration: 800,
          step: function (now) {
            let scale = 0.8 + now * 0.2;
            $(this).css('transform', `scale(${scale})`);
          }
        });
    });
  });
});
