# jquery-responsive-Menu.
Плагин для горизонтального меню. Если не вмещается в родительский блок , инициализируются кнопки прокрутки

Подключение:
<head>
    <link href="css/jquery.responsiveMenu.css" rel="stylesheet">
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/jquery.responsiveMenu.js"></script>
 </head>
 <body> 
 <div class="container">
        <div id="slider">
            <div class="msl-container">
                <div class="msl-menu">
                    <span class="msl-item">меню блок 1</span>
                    <span class="msl-item">меню блок 2</span>
                    <span class="msl-item">меню блок 3</span>
                    <span class="msl-item">меню блок 4</span>
                    <span class="msl-item">меню блок 5</span>
                    <span class="msl-item">меню блок 6</span>
                </div>
            </div>
            <div class="cont-slider-next">
                <div class="menu-slider-next"></div>
            </div>
            <div class="cont-slider-prev">
                <div class="menu-slider-prev"></div>
            </div>
        </div>
    </div>
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
 </body>
 </html>
Demo:http://naprienko.in.ua/responsiveMenu/
