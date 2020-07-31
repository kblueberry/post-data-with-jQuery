$(document).ready(function () {
  $('#form-second-page').css('display', 'none');

  $('.actions__button__submit').addClass('actions__button--hidden');

  $('.actions__button__back').css('visibility', 'hidden');

  $('#file-upload-info').css('display', '');

  $('.actions__button__next').click(function () {
    $('#form-second-page').css('display', '');

    $('#form-first-page').css('display', 'none');

    $('.contact-form__body__badge--current').text(function () {
      return 'Block 2';
    });

    $('.actions__button__submit').removeClass('actions__button--hidden');

    $('.actions__button__next').css('visibility', 'hidden');

    $('.actions__button__back').css('visibility', '');

    validate();
  });

  $('.actions__button__back').click(function () {
    $('#form-second-page').css('display', 'none');

    $('#form-first-page').css('display', '');

    $('.actions__button__submit').addClass('actions__button--hidden');

    $('.actions__button__next').css('visibility', '');
  });

  //   let requiredInputs = [];
  //   requiredInputs.push(requiredPhone);
  //   requiredInputs.push(requiredCity);
  //   requiredInputs.push(requiredName);
  //   requiredInputs.push(requiredCountry);

  $('#upload-button').click(function () {
    $('#input-upload').click();
  });

  $('#input-upload').bind('change', function () {
    //this.files[0].size gets the size of your file.
    alert(this.files[0].size);
  });

  $('#input-upload').change(function () {
    $('#file-upload-info').css('display', 'none');
  });
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
