// Tusk #1 Напишите функцию, которая разворачивает массив в обратном порядке.
// Ожидаемый результат: [1, 2, 3] => [3, 2, 1]

// const arrReverse = (arr) => {
//     return arr.reverse()
// }
//
// console.log(arrReverse([1, 2, 3]))


////////////////////////////////////////////////////////////////


// Tusk #2 Напишите функцию, которая очищает массив от нежелательных значений, таких как false,
// undefined, пустые строки, ноль, null.
// Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

// const cleanBoolean = (arr) => {
//     return arr.filter(el => el)
// }
//
// console.log(cleanBoolean([0, 1, false, 2, undefined, '', 3, null]))


///////////////////////////////////////////////////////////////////


// Tusk #3 Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

// const cleanRepeat = (arr) => {
//     return arr.filter((el, idx) => arr.indexOf(el) === idx)
// }
//
// console.log(cleanRepeat([1, 2, 3, 1, 2]))

///////////////////////////////////////////////////////


// Tusk #4 Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// const arrSum = (arr, arr2) => {
//     return [...arr, ...arr2]
// }
//
// console.log(arrSum(['a', 'b', 'c'], [1, 2, 3]))


//////////////////////////////////////////////////////////


// Tusk #5 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// const arrElemSum = (arr) => {
//     return [...arr, 4, 5, 6]
// }
//
// console.log(arrElemSum([1, 2, 3]))


///////////////////////////////////////////////////////////////


// Tusk #6 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// const arrElemSum = (arr) => {
//     return [4, 5, 6, ...arr]
// }
//
// console.log(arrElemSum([1, 2, 3]))


////////////////////////////////////////////////////////////////////


// Tusk #7 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// const arrSplice = (arr) => {
//     return [...arr.splice(0, 1), ...arr.splice(2)]
// }
//
// console.log(arrSplice([1, 2, 3, 4, 5]))


////////////////////////////////////////////////////////////


// Tusk #8 Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

// const newObj = {
//     js: 'test',
//     jq: 'hello',
//     css: 'world'
// }
//
// console.log(Object.keys(newObj))


////////////////////////////////////////////////////////////////


// Tusk #9 Напишите код, который преобразовывает и объединяет все элементы массива в одно
// строковое значение. Элементы массива будут разделены запятой.
// ['Капуста', 'Репа', 'Редиска', 'Морковка']

// const newArr = (arr) => {
//     return [arr.join(', ')]
// }
//
// console.log(newArr(['Капуста', 'Репа', 'Редиска', 'Морковка']))


//////////////////////////////////////////////////////////////////////


// Tusk #10 Пользователь вводит строку кириллицей разного регистра. Напишите функцию,
// которая принимает строку в качестве аргумента и заменяет регистр каждого символа на
// противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен
// быть массив [кАжДыЙ оХоТнИк]

// const changeRegister = (str) => {
//     return [str.split('').map(el => el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()).join('')]
// }
// console.log(changeRegister('КаЖдЫй ОхОтНиК'))


/////////////////////////////////////////////////////


// Tusk #11 1 фильтровать по цене. от 40000 до 60000 и год до 2019
//          2

// const cars= [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ]
//
// // // 1 Tusk
// const arrayFilter = (arr) => {
//     return arr.filter(car => car.price >= 40000 && car.price <= 60000 && car.year <= 2019)
// }
//
// console.log(arrayFilter(cars))

// // // 2 Tusk
// const makes = (arr) => {
//     return arr.map(el => el.make)
// }
//
// console.log(makes(cars))
