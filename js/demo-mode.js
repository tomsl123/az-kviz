let demoMode = false;

$(function () {
  $('html').keydown(function (e) {
    if(e.which !== 68 || $('.hex').first().is(':hidden'))
    {
      return;
    }

    if(!demoMode) {
      alert('sandbox mode on');
      demoMode = true;

      $('.middle').click(changeColor);
      $('#turn-info').click(changeTurn);
    }
    else {
      alert('sandbox mode off');
      $('.middle').off('click', changeColor);
      $('#turn-info').off('click');
      demoMode = false;
    }
  });


});

function changeColor() {
  let color = rgb2hex($(this).css('background-color'));
  let colorToChange

  if(color === '#ffa500') {
    colorToChange = 'blue';
  }
  else if(color === '#0000ff') {
    colorToChange = 'black';
    $(this).css('color', 'white');
    $(this).addClass('wrong');
    $(this).click(hexClicked);
    $(this).css('cursor', 'pointer');
  }
  else if(color === '#000000') {
    colorToChange = '#dee0da';
    $(this).removeClass('wrong')
    $(this).css('color', 'black');

    let originalColor;
    $('.middle').hover(function () {
      originalColor = $(this).css('background-color')
      $(this).css('background-color', '#b8bab4')
      $(this).parent().find('.bottom').css('border-top-color', '#b8bab4')
      $(this).parent().find('.top').css('border-bottom-color', '#b8bab4')
    }, function () {
      $(this).css('background-color', originalColor)
      $(this).parent().find('.bottom').css('border-top-color', originalColor)
      $(this).parent().find('.top').css('border-bottom-color', originalColor)
    });
  }
  else if(color === '#b8bab4' || color === '#dee0da') {
    colorToChange = 'orange';
    $(this).off('mouseenter mouseleave');
    $(this).css('cursor', 'default');
    $(this).off('click', hexClicked);
  }

  let top = $(this).parent().children()[0];
  $(top).css('border-bottom-color', colorToChange);

  let middle = $(this).parent().children()[1];
  $(middle).css('background-color', colorToChange);

  let bottom = $(this).parent().children()[2];
  $(bottom).css('border-top-color', colorToChange);
}

const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`
