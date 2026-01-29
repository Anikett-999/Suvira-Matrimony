$(document).ready(function(){
    $('.header').height($(window).height());

    $('[data-premium-unlock]').on('click', function(){
      var $button = $(this);
      if ($button.prop('disabled')) {
        return;
      }

      var $profile = $button.closest('.emp-profile');
      $profile.find('.premium-locked').removeClass('premium-locked');

      $button.prop('disabled', true).text('Credits used');
      $button.closest('.premium-credits').find('.premium-status')
        .text('Contact details unlocked.');
    });
  })

