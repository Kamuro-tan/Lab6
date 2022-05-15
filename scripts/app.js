
var main = function(toDoObjects) {
    'use strict';

    var toDos = toDoObjects.map(function(toDo) {
        return toDo.description;
    });

    var new_toDo = "";
    

    $('.tabs a span').toArray().forEach(function(element) {
        $(element).on('click', function() {
            var $element = $(element)
            var $content

            $('.tabs a span').removeClass('active');
            $element.addClass('active');
            $('main .content').empty();

            if ($element.parent().is(':nth-child(1)')) {
                $content = $('<ul>');
                for (var i = (toDos.length - 1); i > -1; i--) {
                    $content.append($('<li>').text(toDos[i]));
                }

            } else if ($element.parent().is(':nth-child(2)')) {
                $content = $('<ul>')
                toDos.forEach(function(todo) {
                    $content.append($('<li>').text(todo));
                });

            } else if ($element.parent().is(':nth-child(3)')) {
                $content = $('<form>');
                $content.append($('<input>').attr({ type: 'text', 
                                                    placeholder: 'Введите новую задачу..', 
                                                    value: new_toDo,
                                                    id: 'new_toDo' }));
                $content.append($('<button>').addClass('add_toDo'));

            }

            $('main .content').append($content);
            return false;
        });
    });

// обработчик изменений строки input
    $('main .content').on('change', '#new_toDo', function() {
        new_toDo = $('#new_toDo').val();

        return false;
    });

// обработчик нажатия кнопки добавления
    $('main .content').on('click', '.add_toDo', function() {
        if (new_toDo != "") toDos.push(new_toDo);

        return false;
    });
    

    $('.tabs a:first-child span').trigger('click');

}


$(document).ready(function() {
    $.getJSON("../todos.json", function (toDoObjects) {
        main(toDoObjects);
    });
});
