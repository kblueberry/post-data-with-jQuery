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

    validate();
  });

  $('.actions__button__back').click(function () {
    $('.contact-form__body__inputs--second-page').addClass(
      'contact-form__body__inputs--hidden'
    );
    $('.contact-form__body__inputs--first-page').removeClass(
      'contact-form__body__inputs--hidden'
    );

    $('.actions__button__submit').addClass('actions__button--hidden');

    $('.actions__button__next').css('visibility', '');
  });

  //   let requiredInputs = [];
  //   requiredInputs.push(requiredPhone);
  //   requiredInputs.push(requiredCity);
  //   requiredInputs.push(requiredName);
  //   requiredInputs.push(requiredCountry);
});

function validate() {
  let requiredPhone = $(':input[name="phone"]');
  let requiredCity = $(':input[name="city"]');
  let requiredName = $(':input[name="name"]');
  let requiredCountry = $(':input[name="country"]');

  if (
    requiredPhone === '' ||
    requiredName === '' ||
    requiredCountry === '' ||
    requiredCity === ''
  ) {
    let validationMessage = $('.form-field__invalid-message');
    validationMessage.removeClass('form-field__invalid-message--hidden');
  }
}
