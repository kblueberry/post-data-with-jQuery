$(document).ready(function () {
  $('.contact-form__body__inputs--second-page').addClass(
    'contact-form__body__inputs--hidden'
  );

  $('.actions__button__submit').addClass('actions__button--hidden');

  $('.actions__button__back').css('visibility', 'hidden');

  $('.actions__button__next').click(function () {
    $('.contact-form__body__inputs--second-page').removeClass(
      'contact-form__body__inputs--hidden'
    );
    $('.contact-form__body__inputs--first-page').addClass(
      'contact-form__body__inputs--hidden'
    );

    $('.contact-form__body__badge--current').text(function () {
      return 'Block 2';
    });

    $('.actions__button__submit').removeClass('actions__button--hidden');

    $('.actions__button__next').css('visibility', 'hidden');

    $('.actions__button__back').css('visibility', '');
  });
});
