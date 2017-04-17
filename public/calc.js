var main = function() {
    view();
}

var view = function() {
    var $table = $('<table>');

    var $tr1 = $('<tr>');

    var $td0 = $('<td>');
    $td0.addClass('number');
    var $button0 = $('<button>0</button>');
    $button0.addClass('num');
    $button0.attr('value', '0');
    $td0.append($button0);
    $tr1.append($td0);

    var $td1 = $('<td>');
    $td1.addClass('number');
    var $button1 = $('<button>1</button>');
    $button1.addClass('num');
    $button1.attr('value', 1);
    $td1.append($button1);
    $tr1.append($td1);

    var $td2 = $('<td>');
    $td2.addClass('number');
    var $button2 = $('<button>2</button>');
    $button2.addClass('num');
    $button2.attr('value', 2);
    $td2.append($button2);
    $tr1.append($td2);


    var $td10 = $('<td>');
    $td10.addClass('operator');
    var $button10 = $('<button>+</button>');
    $button10.addClass('oper');
    $button10.attr('value', '+');
    $td10.append($button10);
    $tr1.append($td10);

    var $td11 = $('<td>');
    $td11.addClass('operator');
    var $button11 = $('<button>-</button>');
    $button11.addClass('oper');
    $button11.attr('value', '-');
    $td11.append($button11);
    $tr1.append($td11);

    $table.append($tr1);

    var $tr2 = $('<tr>');

    var $td3 = $('<td>');
    $td3.addClass('number');
    var $button3 = $('<button>3</button>');
    $button3.addClass('num');
    $button3.attr('value', 3);
    $td3.append($button3);
    $tr2.append($td3);

    var $td4 = $('<td>');
    $td4.addClass('number');
    var $button4 = $('<button>4</button>');
    $button4.addClass('num');
    $button4.attr('value', 4);
    $td4.append($button4);
    $tr2.append($td4);

    var $td5 = $('<td>');
    $td5.addClass('number');
    var $button5 = $('<button>5</button>');
    $button5.addClass('num');
    $button5.attr('value', 5);
    $td5.append($button5);
    $tr2.append($td5);

    var $td12 = $('<td>');
    $td12.addClass('operator');
    var $button12 = $('<button>/</button>');
    $button12.addClass('oper');
    $button12.attr('value', '/');
    $td12.append($button12);
    $tr2.append($td12);

    var $td13 = $('<td>');
    $td13.addClass('operator');
    var $button13 = $('<button>*</button>');
    $button13.addClass('oper');
    $button13.attr('value', '*');
    $td13.append($button13);
    $tr2.append($td13);

    $table.append($tr2);

    var $tr3 = $('<tr>');

    var $td6 = $('<td>');
    $td6.addClass('number');
    var $button6 = $('<button>6</button>');
    $button6.addClass('num');
    $button6.attr('value', 6);
    $td6.append($button6);
    $tr3.append($td6);

    var $td7 = $('<td>');
    $td7.addClass('number');
    var $button7 = $('<button>7</button>');
    $button7.addClass('num');
    $button7.attr('value', 7);
    $td7.append($button7);
    $tr3.append($td7);

    var $td8 = $('<td>');
    $td8.addClass('number');
    var $button8 = $('<button>8</button>');
    $button8.addClass('num');
    $button8.attr('value', 8);
    $td8.append($button8);
    $tr3.append($td8);

    var $td14 = $('<td>');
    $td14.attr('id', 'sum');
    var $button14 = $('<button>Sum</button>');
    $button14.addClass('sumClass');
    $td14.append($button14);
    $tr3.append($td14);

    $table.append($tr3);

    var $tr4 = $('<tr>');

    var $td = $('<td>');
    $tr4.append($td);

    var $td9 = $('<td>');
    $td9.addClass('number');
    var $button9 = $('<button>9</button>');
    $button9.addClass('num');
    $button9.attr('value', 9);
    $td9.append($button9);
    $tr4.append($td9);

    var $td10 = $('<td>');
    var $button10 = $('<button>.</button>');
    $button10.addClass('num');
    $button10.attr('value', '.');
    $td10.append($button10);
    $tr4.append($td10);

    var $td15 = $('<td>');
    $td15.attr('id', 'clear');
    var $button15 = $('<button>Clear</button>');
    $button15.addClass('oper');
    $td15.append($button15);
    $tr4.append($td15);

    $table.append($tr4);

    var $tr5 = $('<tr>');

    $table.append($tr5);

    var $tr5 = $('<tr>');

    var $td = $('<td>');
    $tr5.append($td);
    var $td = $('<td>');
    $tr5.append($td);
    var $td = $('<td>');
    $tr5.append($td);

    var $tr6 = $('<tr>');

    var $td = $('<td>');
    $tr6.append($td);
    var $td = $('<td>');
    $tr6.append($td);
    var $td = $('<td>');
    $tr6.append($td);

    $table.append($tr6);

    $('body').append($table);

    var $div = $('<div>');
    $div.attr('id', 'input');
    $('body').append($div);

    var $input = $('<input>');
    $input.attr('type', 'text');
    $div.append($input);

    var num1 = '';
    var num2 = '';
    var opr = '';
    var total = '';

    $('.num').click(function() {
        console.log(total === '');
        if (total === '') {
            $input.attr('value', $input.val() + $(this).val());
        } else {
            $input.attr('value', '' + $(this).val());
            total = '';
        }
    });

    $('.oper').click(function() {
        num1 = $input.val();
        opr = $(this).val();
        $input.attr('value', '');
    });

    $('#clear').click(function() {
        $input.attr('value', '');
    });
    $('#sum').click(function() {
        if (num1 !== '' && opr !== '' && $input.val() !== '') {

            num2 = $input.val();
            if (opr === '+') {
                total = parseFloat(num1) + parseFloat(num2);
                $input.attr('value', total);
            } else if (opr === '-') {
                total = num1 - num2;
                $input.attr('value', total);

            } else if (opr === '*') {
                total = num1 * num2;
                $input.attr('value', total);

            } else if (opr === '/') {
                total = num1 / num2;
                $input.attr('value', total);
            }
        }
    });
}

var assignListenersByClass = function(e, c, n) {
    $(n).each(function() {
        $(this).on(e, c($(this)));
    });
};
