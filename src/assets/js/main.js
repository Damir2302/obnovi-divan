$(document).ready(function() {

    // INPUT MASK PHONE NUMBER
    $('input[type="tel"]').inputmask({"mask": "+7 (999) 99-99-99"});

    $('#fileUpload').on('change', function() {
        if ($(this).val().length) {
          let fileName = $('#fileUpload').val().split("\\");
          $('#fileUploadLabel span').html(fileName[fileName.length - 1]);
        }
    });

    // HEADER FIXED
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > $('header').height()) {
        $('header').addClass('header-fixed')
      } else if ($(window).scrollTop() == 0) {
        $('header').removeClass('header-fixed')
        $('header').removeClass('header-backscroll')
      }
    })

    let lastScrollTop = 0;
    $(window).scroll(function(){
        let currentScroll = $(this).scrollTop()
        if (currentScroll > lastScrollTop){
            $('.header-fixed').removeClass('header-backscroll')
        } else {
            $('.header-fixed').addClass('header-backscroll')
        }
        lastScrollTop = currentScroll
    })

    $(function(){
      $('.beforeAfter').beforeAfter({
        hoverOpacity: 1,
        separatorColor:'#F9E328',
        bulletColor:'#F9E328',
        arrowColor:'#4F4E53'
      });
    });
})