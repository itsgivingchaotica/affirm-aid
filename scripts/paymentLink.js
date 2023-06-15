    $(document).ready(function () {
      $('.donate-button').click(function () {
        $('.donate-button').removeClass('active');
        $(this).addClass('active');
      });

      $('.reformat-submit').click(function (e) {
        e.preventDefault();
        window.open('https://cash.app/$tsaubrey94', '_blank');
      });
    });