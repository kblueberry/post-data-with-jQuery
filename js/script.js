$(document).ready(function () {
  $('#form-second-page').css('display', 'none');

  $('.actions__button__submit').addClass('actions__button--hidden');

  $('.actions__button__back').css('visibility', 'hidden');

  $('#file-upload-info').css('display', '');

  $('#attached-files').css('display', 'none');

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

    $('.actions__button__back').css('visibility', 'hidden');

    $('.contact-form__body__badge--current').text('Block 1');
  });

  registerRequiredValidator($('#input-phone'));
  registerRequiredValidator($('#input-city'));
  registerRequiredValidator($('#input-name'));
  registerRequiredValidator($('#input-country'));

  $('#upload-button').click(function () {
    $('#input-upload').click();
  });

  $('#input-upload').change(function () {
    const file = this.files[0];
    $('#file-name').text(file.name);
    $('#file-info').text(
      `${formatSize(file.size)} | ${formatDate(file.lastModified)}`
    );
  });

  $('#input-upload').change(function () {
    $('#attached-files').css('display', '');
    $('#file-upload-info').css('display', 'none');
  });

  $('#attached-files__close').click(function (e) {
    e.preventDefault();
    $('#attached-files').css('display', 'none');
    $('#file-upload-info').css('display', '');
    $('#input-upload').val(null);
  });
});

function validateIsRequired(element) {
  if (element.val()) {
    element.removeAttr('data-error');
  } else {
    element.attr('data-error', 'required');
  }
}

function registerRequiredValidator(element) {
  element.blur(function () {
    validateIsRequired(element);
  });
}

// let validationMessage = $('.form-field__invalid-message');
// validationMessage.removeClass('form-field__invalid-message--hidden');

function formatSize(sizeBytes) {
  const bytesInMb = 1024 * 1024;
  const isGreaterThanOneMb = sizeBytes >= bytesInMb;
  if (isGreaterThanOneMb) {
    return `${formatNumber(sizeBytes / bytesInMb)} Mb`;
  } else {
    return `${formatNumber(sizeBytes / 1024)} kb`;
  }
}

function formatNumber(n) {
  return n.toLocaleString('en-US');
}

function formatDate(epoch) {
  const date = new Date(epoch);
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}
