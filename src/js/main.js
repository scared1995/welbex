//Поиск по имени/содержанию
function searchName() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchName");
    filter = input.value.toUpperCase(); //переводим значения инпута в верхний регистр
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++){ //цикл на получение кол-ва колонок
        td = tr[i].getElementsByTagName("td")[1];//выбираем колонку с Названием
    if (td) { //проверяем есть ли значение в теге td
        txtValue = td.textContent || td.innerText; //получаем содержимое td с просто текстом или с тегами,без разницы
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            //указываем условие при котором возводим td в верхний регистр потому что функция indexOf()зависима от регистра
            //и возвращает -1 если ничего не найдено,поэтому необходимо отображать элементы больше -1
            tr[i].style.display = "";//отображаем найденный элемент
            tr[0].style.display = "table-row";//отображаем описание колонок всегда
        } else {
            tr[i].style.display = "none";
        }
    }
}
}

//Сортировка колонки Количество по больше
function more() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("more");
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase() > input.value - 0) {
                tr[i].style.display = "";
                tr[0].style.display = "table-row";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//Сортировка колонки Количество по меньше
function less() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("less");
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase() < input.value - 0) {
                tr[i].style.display = "";
                tr[0].style.display = "table-row";
            } else {
                tr[i].style.display = "none";
            }

        }
    }
}

//Сортировка колонки Количество по равно
function equally() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("equally");
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase() == input.value) {
                tr[i].style.display = "";
                tr[0].style.display = "table-row";
            } else {
                tr[i].style.display = "none";
            }

        }
    }
}

//Сортировка колонки дистанци по больше
function moreDistance() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("distanceMore");
    table = document.getElementById("myTable");
    filter = input.value.toUpperCase();
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase() > input.value - 0) {
                tr[i].style.display = "";
                tr[0].style.display = "table-row";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//Сортировка колонки дистанци по меньше
function lessDistance() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("distanceLess");
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    filter = input.value.toUpperCase();
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase() < input.value - 0) {
                tr[i].style.display = "";
                tr[0].style.display = "table-row";
            } else {
                tr[i].style.display = "none";
            }

        }
    }
}

//Сортировка колонки дистанци по равно
function equallyDistance() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("distanceEqually");
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase() == input.value) {
                tr[i].style.display = "";
                tr[0].style.display = "table-row";
            } else {
                tr[i].style.display = "none";
            }

        }
    }
}

//Функия для кнопки Сброс,приводит в исходное состояние страницу без перезагрузки страницы
$('.clear-button').on('click', function () {
    $('.sort').prop('selectedIndex', 0); //ощищаем select с выбором сортировки при каждом изминении select с колонками
    $('.sort').css('display', 'none'); //если не выбрана ни одна колонка, скрываем select с выбором сортировки
    $('.checkedColumn').attr('selected', 'selected');//устанавливаем по умолчанию инпут с классом checkedColumn
    $('.inputSort').css('display', 'none'); //если не выбрана ни одна марка, скрываем select c вводом значений
    getPagination('#myTable');//функция для приведения таблицы в изначальное состояние
});


//Функция для выплывающих select
$('.columnName').change(function () {
    $('.sort').prop('selectedIndex', 0); //ощищаем select с выбором сортировки при каждом изминении select с колонками
    var val = $(this).val(); //получаем value выбранной колонки
    if (val != '') { //проверяем, выбрана ли хоть какая-то колонка
        $('.sort').css('display', 'block'); //делаем видимым колонку для сортировки
        $('.sort option').css('display', 'none'); //сначала скрываем все модели
        $('.sort option.' + val).css('display', 'inline');//затем показываем те инпуты которые нам нужны
        $('.inputSort').css('display', 'block');//делаем видимым колонку input для вввода значений
    }
    else {
        $('.sort').css('display', 'none'); //если не выбрана скрываем select с выбором сортировки
        $('.inputSort').css('display', 'none'); //поля для ввода значений тоже скрываем
    }
});

$(function () {
    $('.sort').change(function () {
        $('.inputHide').hide();
        $('.' + $(this).val()).show();
    });
});

//Пагинация
getPagination('#myTable');


function getPagination(table) {
    var lastPage = 1;

    $('#maxRows').on('change', function (evt) {//функция для переключения кол-во отображаемых строк
        lastPage = 1;
        $('.pagination')
            .find('li')//находим все элементы списка на странице
            .slice(1, -1)//метод уменьшения или увеличения элементов
            .remove();//удаляем лишние цифры
        var trnum = 0; // обнуляем счетчик tr
        var maxRows = parseInt($(this).val()); // получаем максимальное кол-во строк из опции select
        var totalRows = $(table + ' tbody tr').length; // кол-во строк таблицы

        if (maxRows >= totalRows) { //если макс. кол-во строк будет больше или равно кол-во строк в таблице,то скрыаем пагинацию
            $('.pagination').hide();
        } else {
            $('.pagination').show();
        }

        $(table + ' tr:gt(0)').each(function () {
            trnum++; // запускаем счетчик
            if (trnum > maxRows) { // если номер  tr больше  maxRows
                $(this).hide(); // то скрываем их
            }
            if (trnum <= maxRows) { //если меньше
                $(this).show();// то показать
            }
        });
        if (totalRows > maxRows) {
            // if tr total rows gt max rows option если кол-во строк tr больше кол-во стро select
            var pagenum = Math.ceil(totalRows / maxRows); // округляем вверх результат деления
            //	номера страниц
            for (var i = 1; i <= pagenum;) {
                // для каждой страницы пагинации добавлять элеменn li
                $('.pagination #prev')
                    .before(
                        '<li data-page="' + i + '">\
                                          <span>' + i++ + '<span class="sr-only">(current)</span></span>\
                                        </li>'
                    )
                    .show();
            }
        }
        $('.pagination [data-page="1"]').addClass('active'); // добавляем класс active для первого  li
        $('.pagination li').on('click', function (evt) { //по клику на каждую страницу

            evt.stopImmediatePropagation();//прекращаем текущее событие
            evt.preventDefault();// отменяем действие события по умолчанию
            var pageNum = $(this).attr('data-page'); // получаем номер страницы

            var maxRows = parseInt($('#maxRows').val()); // получаем максимальное кол-во строк из опции select

            if (pageNum == 'prev') {
                if (lastPage == 1) {
                    return;
                }
                pageNum = --lastPage;
            }
            if (pageNum == 'next') {
                if (lastPage == $('.pagination li').length - 2) {
                    return;
                }
                pageNum = ++lastPage;
            }

            lastPage = pageNum;
            var trIndex = 0;
            $('.pagination li').removeClass('active'); // добавляем класс active для всех  li
            $('.pagination [data-page="' + lastPage + '"]').addClass('active'); // добавляем класс эктив по клику

            limitPagging();
            $(table + ' tr:gt(0)').each(function () {//для каждого tr в таблице

                trIndex++; //
                if (
                    trIndex > maxRows * pageNum ||
                    trIndex <= maxRows * pageNum - maxRows
                ) {
                    $(this).hide();
                } else {
                    $(this).show();
                } //else fade in
            });
        });
        limitPagging();
    })
        .val(5)
        .change();

}
//функция лимита страниц
function limitPagging() {


    if ($('.pagination li').length > 7) {
        if ($('.pagination li.active').attr('data-page') <= 3) {
            $('.pagination li:gt(5)').hide();
            $('.pagination li:lt(5)').show();
            $('.pagination [data-page="next"]').show();
        }
        if ($('.pagination li.active').attr('data-page') > 3) {
            $('.pagination li:gt(0)').hide();
            $('.pagination [data-page="next"]').show();
            for (let i = (parseInt($('.pagination li.active').attr('data-page')) - 2); i <= (parseInt($('.pagination li.active').attr('data-page')) + 2); i++) {
                $('.pagination [data-page="' + i + '"]').show();

            }

        }
    }
}

$(function () {//функция добавления id для каждой строки

    $('table tr:eq(0)').prepend('<th> ID </th>');

    var id = 0;

    $('table tr:gt(0)').each(function () {
        id++;
        $(this).prepend('<td>' + id + '</td>');
    });
});