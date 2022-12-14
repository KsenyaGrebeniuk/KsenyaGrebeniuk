// 1. Для початку в змінну age впиши свій вік.

let age = 25;

// 2. Виведемо значення greeting, використовуючи метод console.log. Для цього напиши змінну в круглі дужки методу

const greeting = 'Hello, world!';
console.log(greeting);

/* 2.2 Ми маємо 4 кг яблук і 3 кг груш. Твоє завдання — оголосити 3 нові змінні:
apples зі значенням 4;
pears зі значенням 3;
fruits, значення якої дорівнює сумі змінних apples і pears.*/

const apples = 4;
const pears = 3 
const fruits = apples + pears

/* 3. Оголоси наступні змінні:
brand зі значенням 'Toyota';
price зі значенням 22500;
isSedan зі значенням true;
wings зі значенням undefined;
owner зі значенням null */

const brand = 'Toyota';
const price = 22500;
const isSedan = true;
const wings = undefined;
const owner = null;

/* 4. У коді є змінні a та b. Твоє завдання: оголоси 4 нові змінні:
addition повинна містити суму a та b;
subtraction повинна містити різницю a та b;
division повинна містити результат ділення a на b;
multiplication повинна містити добуток a та b.*/

const a1 = 10;
const b1 = 20;

const addition = a1 + b1;
const subtraction = a1 - b1;
const division = a1 / b1;
const multiplication = a1 * b1;

/* 4.1  У коді є змінні a та b.
Твоє завдання: оголоси 2 нові змінні:
exp має містити результат піднесення a до степеня b;
mod має містити остачу від ділення a на b.*/

const a2 = 7;
const b2 = 2;

const exp = a2 ** b2;
const mod = a2 % b2;

/* 5. А тепер застосуємо конкатенацію — «склеювання» рядків за допомогою +.
Оголоси нову змінну resultString. Її значення «склей» із уже оголошених змінних a, b та c,
щоб у результаті утворився рядок 'Concatenation'.*/

const a3 = 'Con';
const b3 = 'enation';
const c3 = 'cat';

const resultString = a3 + c3 + b3;

/* 5.1 А тепер скористаємося інтерполяцією — вставкою змінних у рядок у зворотних лапках.
Оголоси нову змінну resultString. Щоб записати їй значення, використай уже оголошені змінні a та b і зворотні лапки (``). 
У результаті повинен вийти рядок: Hello, world!. */

const a4 = 'Hello';
const b4 = 'world';
const resultString1 = `${a4}, ${b4}!`

/* 7 У цьому завданні оголоси функцію myFunction за допомогою ключового слова function.*/

function myFunction () {};

/* 7.1 У цьому завданні оголоси функцію hello, використовуючи ключове слово function.
Всередині функції зроби виклик console.log з аргументом 'Hello, world!'.*/

function hello () {
    console.log('Hello, world!')
};

/* 7.2 Оголоси функцію getString, яка не приймає ніяких параметрів.
Всередині функції getString:
оголоси змінну greeting, використовуючи ключове слово const, присвой їй значення - рядок 'Hello, Mate Academy!'.
поверни змінну greeting за допомогою ключового слова return.*/

function getString(){
    const greeting = 'Hello, Mate Academy!';
    return greeting;
};

/* 7.3 А тепер створи функцію greeter, яка:
приймає параметр name;
повертає рядок-привітання у вигляді Hi, ${name}! (використай ключове слово return). */

function greeter(name){
    const greeter = `Hi, ${name}!`;
    return greeter;
}

/* 7.4 Створи функцію greeter, яка:
приймає параметри name та partOfTheDay;
повертає рядок-привітання в такому форматі:
// параметри: name = 'Paul', partOfTheDay = 'night'
greeter('Paul','night'); // повертає рядок 'Good night, Paul!'*/

function greeter(name,partOfTheDay){
    const greeter = `Good ${partOfTheDay}, ${name}!`
    return greeter
}

/* 7.5 У цьому завданні створи функцію double, яка:
приймає параметр num;
повертає значення num, помножене на 2.*/

function double(num){
    return num * 2;
}

/* 8 Створи функцію canBuyBeer, яка приймає як параметр ціле число age:
якщо age більше або дорівнює 18, то функція поверне рядок You can buy beer;
в іншому випадку функція поверне рядок You can not buy beer.
Щоб повернути потрібний рядок із функції, використай ключове слово return.*/

function canBuyBeer(age) {
    if (age < 18) {
      return 'You can not buy beer';
    }
  
    return 'You can buy beer';
  }
  /* ???Почему нельзя написать 2 условия 
  function canBuyBeer(age){
    if (age >= 18){
        return 'You can buy beer'
    } else if (age < 18){
        return 'You can not buy beer'
    }
  } */

  /* 8.1 Усі офіціанти люблять чайові! А один із них поділився з нами секретним рейтингом.
Реалізуй функцію getTipsRating, яка приймає суму чайових amount та повертає рядок-оцінку відповідно до залишеної суми:
terrible, якщо amount дорівнює 0 грн;
poor, якщо amount від 1 до 10 грн включно;
good, якщо amount від 11 до 20 грн включно;
great, якщо amount від 21 до 50 грн включно;
excellent, якщо amount більше 50 грн.*/

function getTipsRating(amount){
    if (amount === 0){
        return 'terrible'
    }
    if (amount <= 10){
        return 'poor'
    }
    if (amount <= 20){
        return 'good'
    }
    if (amount <= 50){
        return 'great'
    }
    return 'excellent'
}

/* 8.2 Створи функцію calculateTaxes, яка приймає ціле число income (твій дохід) та повертає податок, який ти заплатиш. 
Сума податку залежить від твого доходу:
до 1000 грн включно — податок 2% від доходу;
від 1001 грн до 10000 грн включно — податок 3% від доходу;
більше 10 000 грн — податок 5% від доходу.*/

function calculateTaxes(income){
    if(income <= 1000){
        return income * 0.02
    }
    if(income <= 10000){
        return income * 0.03
    }
    return income * 0.05
}

/*  8.3 У цьому завданні створи функцію getLargestExpressionResultOfTwo, яка приймає 2 числа: a та b.
 Ця функція має порівняти результати наступних обчислень та повернути найбільший із них:
a + b
a - b
Зверни увагу:
числа a та b можуть бути від'ємними;
не використовуй тернарний оператор чи ключове слово else.
Наприклад, якщо a = 10 та b = 5, то:
a + b = 15 — найбільший результат
a - b = 5
Але якщо a = 20 та b = -5, то:
a + b = 15
a - b = 25 — найбільший результат*/

function getLargestExpressionResultOfTwo(a, b) {
    const sum = a + b;
    const difference = a - b;
  
    if (sum > difference) {
      return sum;
    }
  
    return difference;
  }

  /* 8.4 У цьому завданні створи функцію getLargestExpressionResultOfThree, яка приймає 2 числа: a та b.
   Ця функція має порівняти результати наступних обчислень та повернути найбільший із них:
a + b
a - b
a * b
Зверни увагу:
числа a та b можуть бути від'ємними;
не використовуй тернарний оператор чи ключове слово else.
Наприклад, якщо a = 10 та b = 5, то:
a + b = 15
a - b = 5
a * b = 50 — найбільший результат
Але якщо a = 10 та b = -5, то:
a + b = 5
a - b = 15 — найбільший результат
a * b = -50 */

function getLargestExpressionResultOfThree(a, b) {
    let result = a + b;
  
    if ((a - b) > result) {
      result = a - b;
    }
  
    if ((a * b) > result) {
      result = a * b;
    }
  
    return result;
  }

  /* 8.5 У цьому завданні створи функцію getLargestExpressionResult, яка приймає 2 числа: a та b.
   Ця функція має порівняти результати наступних обчислень та повернути найбільший із них:
a + b
a - b
a * b
a / b
Зверни увагу:
числа a та b можуть бути від'ємними;
не використовуй тернарний оператор чи ключове слово else.
Наприклад, якщо a = 10 та b = 5, то:
a + b = 15
a - b = 5
a * b = 50 — найбільший результат
a / b = 2
Але якщо a = 10 та b = -5, то:
a + b = 5
a - b = 15 — найбільший результат
a * b = -50
a / b = -2 */

function getLargestExpressionResult(a,b){
    let result = a + b;
  
    if ((a - b) > result) {
      result = a - b;
    }
  
    if ((a * b) > result) {
      result = a * b;
    }

    if ((a / b) > result){
        result = a / b
    }
  
    return result;
  }

/* 9.1 У цьому завданні реалізуй функцію printNumbersBackwards, яка приймає додатне число N 
і виводить у консоль числа від N до 1 включно.
Наприклад, якщо N = 5, функція повинна вивести такі числа: */

function printNumbersBackwards(N) {
    for (let i = N; i >= 1; i--) {
      console.log(i);
    }
  }

  /* 9.2 Одного разу ведучий на весіллі вирішив розважити гостей і встановив правило: кожен гість вимовляє тост, 
  і всі присутні п'ють за здоров'я молодих.
Наприклад:
коли приходить перший гість, він п'є на самоті;
коли приходить другий — п'ють удвох;
третій — п'ють утрьох і так далі.
Якщо гостей 5, то всього знадобиться 15 порцій (1 + 2 + 3 + 4 + 5).
Якщо 10, то 55 порцій (1 + 2 + 3 + ... + 10).
Реалізуй функцію getDrinks, яка приймає numberOfGuests — скільки всього буде гостей, і повертає необхідну кількість порцій.*/


/* 9.3 Тому ведучий вирішив змінити правила. Молодята обирають ціле додатне число step, і тепер тост говорить не кожен гість,
 а тільки перший і кожен, хто приходить через обрану кількість (step) гостей після попереднього тосту. 
 При цьому, як і раніше, п'ють усі присутні.
Наприклад:
якщо step = 1, то, як і раніше, тост говорить кожен гість, що прийшов;
якщо step = 2, то 1-й, 3-й, 5-й тощо;
якщо step = 3, то 1-й, 4-й, 7-й, 10-й тощо.
Реалізуй функцію getDrinksWithStep, яка приймає numberOfGuests і step та повертає потрібну кількість порцій.*/


/* 9.4 В Mate bank є можливість покласти гроші на депозит під певний відсоток і отримати прибуток через деякий час.
Наприклад, якщо покласти 10000 на 3 роки під 4% річних, отримаємо:
перший рік: 10000 + 4% = 10400 (10000 + 10000 * 0.04);
другий рік: 10400 + 4% = 10816 (10400 + 10400 * 0.04);
третій рік: 10816 + 4% = 11248.64 (10816 + 10816 * 0.04);
чистий прибуток: 11248.64 - 10000 = 1248.64.
Твоє завдання: напиши функцію calculateProfit, яка приймає 3 параметри:
amount — початкова сума, яку ми кладемо на депозит;
percent — річна відсоткова ставка;
period — кількість років (час, на який гроші кладуться на депозит).
Функція повинна розрахувати та повернути суму чистого прибутку за весь час.*/

/* 10 Напиши функцію getStringLength, яка приймає рядок input і повертає його довжину (кількість символів у ньому).*/

function getStringLength(input){
    return input.lenght
};

/* 10.1 Створи функцію isSubstring, яка приймає 2 параметри: phrase та part.
 Вона повинна повертати true, якщо phrase містить part, або false — якщо ні.*/

 function isSubstring(phrase,part){
    
 }

 /* 10.2 У цьому завданні ти навчишся використовувати цикл for of для перебору рядка.
Реалізуй функцію countMs, яка приймає рядок text та повертає кількість літер m у ньому (як великих, так і маленьких).*/

/* 10.3 Напиши функцію removeVowels, яка приймає рядок doc і повертає новий рядок, де всі голосні видалені.
Зверни увагу: голосними літерами є aeiouy у будь-якому регістрі.*/

/* 10.4  створи функцію makeAbbr, яка приймає рядок зі слів words та повертає абревіатуру з них у верхньому регістрі.
Рядок words містить одне або декілька слів, розділених одним пробілом.*/

/* 10.5 Створи функцію decryptMessage, яка приймає рядок message та повертає новий рядок, де символи з message розташовані
 у зворотному порядку.*/

 /* 10.6 Створи функцію isWerewolf, яка приймає рядок target і повертає true, якщо це перевертень, або false — якщо ні.
Перевертень — це слово або речення, яке читається однаково в обох напрямках (зліва направо й навпаки), при цьому ігноруючи регістр, 
пробіли та розділові знаки.*/

/* 10.7 А тепер ти знайдеш відсоток входження символу в рядок.
Ми вдосконалили нашу програму для збору статистики з вебінарів Міші. 
Тепер вона надсилає дані на сервер у вигляді рядка 111001010111011, де 1 — це студент, який зрозумів тему, а 0 — відповідно, ні.
Але було б корисно зрозуміти, скільки відсотків студентів засвоїли матеріал, тобто наскільки вебінар був ефективним.
Для цього створи функцію getSuccessRate, яка приймає рядок statistic і повертає відсоток студентів, які зрозуміли матеріал,
округлюючи до найближчого цілого (використай метод Math.round).
Зверни увагу: якщо вхідний рядок порожній — поверни 0.*/

/* 11 Напиши функцію createArray, яка приймає ціле число N і повертає масив, який містить усі цілі числа від 1 до N включно.
Зверни увагу: якщо N = 0, поверни порожній масив.
Підказка
Створи порожній масив numbers.
Створи цикл for від 1 до N включно.
На кожній ітерації додавай поточне i до numbers за допомогою методу push. */
/* 11.1  Щоб роботи на лінії збиралися правильно, потрібно маркувати деталі.
Різні частини робота будуть складатися з різної кількості деталей. Тож зробимо наліпки для них!
Напиши функцію makeStickers, яка приймає число detailsCount і рядок robotPart. 
Функція повинна повертати масив рядків у наступному форматі: {{robotPart}} detail #{{n}} (наприклад, Hand detail #1).

Зверни увагу: якщо detailsCount = 0, поверни порожній масив.*/
/* 11.2  Наліпки готові? Чудово! Тепер потрібно збільшити продуктивність наших ліній удвічі!
Напиши функцію doublePower, яка приймає масив потужностей currentPowers та повертає новий масив із подвоєними значеннями.*/
/* 11.3  А тепер навчимо наших роботів сортувати коробки на складі. Кожна коробка має свій унікальний номер, а роботи вчаться сортувати 
в порядку зростання.
Але сортування — справа нелегка, іноді трапляються помилки. Тому нам поки що доведеться перевіряти, чи правильно робот 
відсортував коробки.
Для цього напиши функцію isSorted, яка отримує масив чисел boxNumbers і повертає true, якщо всі числа розташовані 
в порядку зростання, або false — якщо ні.
Зверни увагу: числа в масиві можуть повторюватися.*/
/* 11.4  Ускладнюємо роботу нашого робота! Тепер він вміє перетворювати команди руху на правильний сигнал і рухатися відповідно до нього:
'forward' означає y + 1 (крок уперед);
'back' означає y - 1 (крок назад);
'right' означає x + 1 (крок праворуч);
'left' означає x - 1 (крок ліворуч).
Але було б чудово, щоб робот знав, де він знаходиться навіть без GPS.
Для цього реалізуй функцію getLocation, яка приймає 2 параметри:
масив початкових координат coordinates у вигляді [x, y];
масив із командами commands у вигляді ['command1', 'command2', 'command3' ...].
Функція повинна повертати масив кінцевих координат [x, y] після рухів згідно команд із масиву commands.
Наприклад, ми маємо масив із координатами coordinates = [2, 1] та масив із командами commands = ['left', 'back', 'back']:
координати після першої команди — [1, 1] (1 крок ліворуч);
координати після другої команди — [1, 0] (1 крок назад);
координати після третьої команди — [1, -1] (1 крок назад);
результатом буде масив [1, -1]*/
/* 11.5  Напиши функцію getPlan, яка приймає 3 аргументи:
startProduction — поточна кількість роботів, яку ми виробляємо за місяць;
numberOfMonths — кількість місяців, протягом якої виробництво має зростати;
percent — відсоток, на який має зростати виробництво щомісяця.
Функція має повертати масив із цілями на кожен місяць (скільки роботів треба виробити щоб дотримуватись запланованого зростання).
Щоб краще зрозуміти, як це працює, розглянемо приклад. Припустимо, нам дано startProduction = 200, numberOfMonths = 3 та percent = 50:
план на перший місяць — 200 + 50% = 300 роботів;
на другий місяць це вже 300 + 50% = 450 роботів;
і нарешті на третій місяць це 450 + 50% = 675 роботів.
В результаті маємо отримати масив [300, 450, 675].
Зверни увагу: ціль на наступний місяць потрібно рахувати на основі попереднього місяця.
Якщо число роботів виявиться дробовим, округли його за допомогою Math.floor. */
/* 11.6  Напиши функцію getSpeedStatistic, яка приймає масив швидкостей роботів testResults і повертає статистику у вигляді масиву, у якому:
перший елемент — найменша швидкість;
другий елемент — найбільша швидкість;
третій елемент — середнє значення, округлене вниз (використай Math.floor).
Зверни увагу: якщо вхідний масив швидкостей порожній — поверни масив [0, 0, 0]. */
/* 11.7  Напишемо функцію compareRobots, яка отримує два масиви. Перший масив firstRobotResults — це ваги вантажів, перевезених за день першим роботом, другий secondRobotResults — відповідно, другим.
Перевір, хто з роботів може перевезти більше вантажу за день, і поверни рядок із рекомендацією, кого з роботів варто купити:
'First robot for sale!' — якщо перший робот перевозить більше вантажу;
'Second robot for sale!' — якщо другий робот перевозить більше вантажу;
'Both robots for sale!' — якщо обидва роботи перевозять однакову кількість вантажу.
*/












