<?php
$connection = New PDO('mysql:host=localhost; dbname=description; charset=utf8', 'root', '');
$sql = "select * from description.description";


$result = $connection->query($sql) or die();
while ($row = $result->fetchObject()) {//конвертируем данные sql в массив php
    $rows[] = $row;//создаем массив
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link href="src/css/common.css" rel="stylesheet">
    <title>Welbex</title>
</head>
<body>
<h2>Поиск</h2>
<div class="container-sort">
    <div >
        <select class="columnName form-control">
            <option value="" class="checkedColumn">Выберите колонку для поиска</option>
            <option value="name">Название</option>
            <option value="quantity">Количество</option>
            <option value="distance">Дистанция</option>
        </select>
    </div>
    <div>
        <select class="sort form-control" >
            <option value="">Поиск по</option>
            <option class="name" value="sortName">По названию</option>
            <option class="quantity" value="quantityMore">Больше</option>
            <option class="quantity" value="quantityLess">Меньше</option>
            <option class="quantity" value="quantityEqually">Равно</option>
            <option class="distance" value="distanceMore">Больше</option>
            <option class="distance" value="distanceLess">Меньше</option>
            <option class="distance" value="distanceEqually">Равно</option>
        </select>
    </div>
    <div>
        <div class="inputSort">
            <input type="text" class="inputHide sortName form-control" id="searchName" onkeyup="searchName()"
                   placeholder="Поиск по названию"
                   title="Введите имя">
            <input type="text" class="inputHide quantityMore form-control" id="more" onkeyup="more()" placeholder="больше"
                   title="больше">
            <input type="text" class="inputHide quantityLess form-control" id="less" onkeyup="less()" placeholder="меньше"
                   title="меньше">
            <input type="text" class="inputHide quantityEqually form-control" id="equally" onkeyup="equally()" placeholder="равно"
                   title="равно">
            <input type="text" class="inputHide distanceMore form-control" id="distanceMore" onkeyup="moreDistance()"
                   placeholder="больше"
                   title="больше">
            <input type="text" class="inputHide distanceLess form-control" id="distanceLess" onkeyup="lessDistance()"
                   placeholder="меньше"
                   title="меньше">
            <input type="text" class="inputHide distanceEqually form-control" id="distanceEqually" onkeyup="equallyDistance()"
                   placeholder="равно" title="равно">
        </div>
    </div>
</div>


<p>
    <button type="button" class="clear-button btn btn-primary btn-lg" data-clear-selector="input">
        Сброс
    </button>
</p>
<h2>Выберите количество отображаемых строк на странице</h2>
<div class="form-group">
    <select class="form-control" name="state" id="maxRows">
        <option value="5000">Показать все</option>
        <option value="5" >5</option>
        <option value="10" >10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="70">70</option>
        <option value="100">100</option>
    </select>

</div>
<table class="table table-striped table-class" id="myTable"> <!--id ="myTable"-->
    <tr>
        <th>Название</th>
        <th>Количесвто</th>
        <th>Дистанция в км.</th>
        <th>Дата</th>
    </tr>
    <?php
    foreach ($rows as $row) { ?>
        <tr>

            <td><?= $row->name ?></td>
            <td><?= $row->quantity ?></td>
            <td><?= $row->distance ?></td>
            <td><?= $row->date ?></td>
        </tr>
    <? } ?>
</table>
<div class='pagination-container'>
    <nav>
        <ul class="pagination">

            <li data-page="prev">
                <span> < <span class="sr-only">Назад</span></span>
            </li>
            <!--	тут функция для создания цифр для прокручивания таблицы -->
            <li data-page="next" id="prev">
                <span> > <span class="sr-only">Вперед</span></span>
            </li>
        </ul>
    </nav>
</div>

<script src="src/js/jquery-3.5.1.min.js"></script>
<script src="src/js/main.js"></script>

</body>
</html>