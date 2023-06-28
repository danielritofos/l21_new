$(document).ready(function () {

    $('.menu-icon').click(function(){
        $('.b-nav').toggleClass('active');
        $('.menu-icon').toggleClass('active');
        $(document).on('click', function(event) {
            if (!$(event.target).closest(".b-nav , .menu-icon").length) {
                $('.b-nav').removeClass('active');
                $('.menu-icon').removeClass('active');
            }
            event.stopPropagation();
        });
    });


    $('.js-scroll , .main .b-footer__nav a , .main .b-nav a').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    });



    $('#myForm').submit(function(e) {
        e.preventDefault(); // Отмена отправки формы по умолчанию

        var email = $('#emailInput').val();
        var message = $('#messageInput').val();


        // AJAX запрос для отправки формы
        $.ajax({
            type: 'POST',
            url: 'mail.php', // Замените на ваш обработчик отправки на почту
            data: { email: email, message: message },
            success: function(response) {
                // Обработка успешной отправки
                $('#block').addClass('active');

                $('#myForm')[0].reset(); // Очистка полей формы

                setTimeout(function() {
                    $('#block').removeClass("active");
                }, 10000);


            },
            error: function() {
                // Обработка ошибки при отправке
            }
        });
    });

});






// Получаем ссылки на элементы формы
var emailInput = $('#emailInput');
var messageInput = $('#messageInput');
var submitButton = $('#submitButton');

// Функция, которая проверяет заполненность полей и изменяет класс кнопки
function checkFormValidity() {
    // Проверяем, заполнены ли поля ввода
    var isEmailValid = emailInput.val().trim() !== '';
    var isMessageValid = messageInput.val().trim() !== '';

    // Изменяем класс кнопки в зависимости от заполненности полей
    if (isEmailValid && isMessageValid) {
        submitButton.removeClass('not-filled');
    } else {
        submitButton.addClass('not-filled');
    }
}

// Добавляем обработчики событий на поля ввода
emailInput.on('input', checkFormValidity);
messageInput.on('input', checkFormValidity);


