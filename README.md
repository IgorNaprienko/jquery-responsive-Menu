# jquery-responsive-Menu.
Плагин для горизонтального меню. Если не вмещается в родительский блок , инициализируются кнопки прокрутки

Подключение:

    <link href="css/jquery.responsiveMenu.css" rel="stylesheet">
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/jquery.responsiveMenu.js"></script>
    
    <script>
    $(document).ready(function () {
        var slider = $('#slider');
        slider.carouselMenu();
        $('.cont-slider-next').click(function () {
            //вешаем обработчик прокрутки меню вперед
            slider.trigger('next');
        });
        $('.cont-slider-prev').click(function () {
            //вешаем обработчик прокрутки меню назад
            slider.trigger('prev');
        });
    });
    </script>
Demo:http://naprienko.in.ua/responsiveMenu/
