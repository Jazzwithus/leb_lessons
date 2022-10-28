
if (num < 49) {
    console.log ('Цифра меньше заданной');
} else if (num > 100) {
    console.log ('Слишком много');
} else {
    console.log ('Все в порядке');
}

(num === 50) ? console.log ('Все в порядке') : console.log ('Цифра меньше заданной');

const num = 150;

switch (num) {
    case 40:
        console.log ('Меньше , чем нужно');
        break;
    case 45:
        console.log ('Точно в цель, Яблочко!!!');
        break;
    case 50:
        console.log ('Уже ближе к пятидесяти');
        break;
    default:
        console.log ('По дефолту');
        break;
}