$(document).ready(() => {
    $('#kitchens-slick').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('input[type="tel"]').mask("+7 (999) 999 - 99 - 99");
    $('#date').mask("99.99.2020   99:99");

    $('#main #main-info button').click(() => {
        $('#request').css('display', 'flex');
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
        if ($('#header').hasClass('menu-open')) {
            $('body').css('overflow', 'hidden');
            $('#header i').css('display', 'block');
        } else {
            $('body').css('overflow', 'visible');
            $('#header i').css('display', 'none');
        }
    });

    $('#header i').click(() => {
        $('#header').removeClass('menu-open');
        $('body').css("overflow", "visible");
        $('#header i').css('display', 'none');
    });

    $('#header #menu ul li').click(() => {
        $('#header').removeClass('menu-open');
        $('body').css("overflow", "visible");
        $('#header i').css('display', 'none');
    });

    $('#request, #close').click((e) => {
        if (e.target.id === 'request' || e.target.id === 'close')
            $('#request').hide();
    });

    $('#form-request button').click(() => {
        let name = $('#name-request');
        let phone = $('#telephone-request');
        if (name.val() && phone.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    $('#request').hide();
                },
                error: () => {
                    $('#request').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            $('#request-error').show();
        }
    });

    $('#order button').click(() => {
        let name = $('#name');
        let phone = $('#telephone');
        let date =  $('#date');
        if (name.val() && phone.val() && date.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val() + '&date=' + date.val(),
                success: () => {

                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            $('#order-error').show();
        }
    });
});
