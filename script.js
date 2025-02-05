"use strict";
// 1. Написать функцию, которая на вход принимает целое число и возвращает факториал этого числа.
function factorial(n)
{
    let res = 1
    for(i=2;i<=n;i++)
    {
        res = res*i
    }
    return res;
}
console.log(factorial(10))


//2. Написать функцию, которая на вход принимает строку и возвращает длину самого длинного слова в этой строке.
function stroka(params) {
    let words = params.split(" "); 
    let maxLength = 0;  
    let longestWord = ""; 

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {  
            maxLength = words[i].length;   
            longestWord = words[i];        
        }
    }
    
    return longestWord;  
}

console.log(stroka("я изучаю JavaScript")); 



//3. Написать функцию, которая на вход принимает массив, состоящий из массивов целых чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из наибольшего числа каждого предоставленного подмассива.
function maxInSubarrays(arrays) {
    return arrays.map(array => Math.max(...array));
}
const inputArrays = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
const result = maxInSubarrays(inputArrays);
console.log(result)


//4. Написать функцию, которая на вход принимает строку и целое число и обрезает строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент) и возвращает обрезанную строку с «…» в конце.
function truncateString(inputString, maxleg)
{
    if(inputString.length>maxleg)
    {
        return inputString.slice(0, maxleg-1)+'...'
    }
    return inputString
}
const dlinstr =  truncateString('Это пример строки, с длинным текстом', 10)
console.log(dlinstr)


//5. Написать функцию, которая на вход принимает строку и возвращает эту строку в формате: каждое слово начинается с заглавной буквы, остальные внижнем регистре.
function capitalizeWords(inputString2) {
    let str2 = inputString2.split(' '); // Разделяем строку на слова
    for (let i = 0; i < str2.length; i++) {
        if (str2[i].length > 0) { 
            str2[i] = str2[i][0].toUpperCase() + str2[i].slice(1).toLowerCase(); // Делаем первую букву заглавной
        }
    }
    return str2.join(' '); // Объединяем обратно в строку с пробелами
}
console.log(capitalizeWords("привет мир! это тестовая строка")); // "Привет Мир! Это Тестовая Строка"


//№6Написать функцию, которая на вход принимает два массива и целое число п. Функция должна скопировать каждый элемент первого массива во второй по порядку начиная с индекса второго массива и вернуть полученный массив. Входные массивы не должны изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться [4, 1, 2, 3, 5].
function copyElements(arr1, arr2, n) {
    let result = arr2.slice(); 
    // Вставляем элементы первого массива в нужную позицию
    for (let i = 0; i < arr1.length; i++) {
      result.splice(n + i, 0, arr1[i]);
    }
  
    return result;
  }
  

  console.log(copyElements([1, 2, 3], [4, 5], 1)); // [4, 1, 2, 3, 5]
  
//7
function removeFalsyValues(arr) {
    return arr.filter(value => Boolean(value)); // Оставляет только "правдивые" значения
  }
  
  console.log(removeFalsyValues([0, 1, false, "hello", "", null, undefined, NaN])); 
  // Выведет: [1, "hello"]
  
//8
function containsAllLetters(arr) {
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
    
    for (let char of str2) { 
      if (!str1.includes(char)) { 
        return false; 
      }
    }
    return true;
  }
  
  console.log(containsAllLetters(["hello", "ell"])); // true
  console.log(containsAllLetters(["hello", "world"])); // false
  

//№9Написать функцию, которая на вход принимает масссив и целое число. Функция должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и вернуть их в виде двумерного массива.
function splitArrayIntoGroups(arr1, size)
{
    let result1 = []
    for(let i=0;i<arr1.length;i+=size)
    {
        result1.push(arr1.slice(i, i + size))
    }
    return result1
}
console.log(splitArrayIntoGroups([1, 2, 3, 4, 5, 6],2))


//10. Используя рекурсию (без использования циклов). Написать функцию, которая принимает массив и целое число (п) и заполняет массив числами от п до 1.
function fillArray(n) {
    if (n <= 0) return [];
    return [n].concat(fillArray(n - 1)); // Добавляем число и вызываем функцию снова
  }
  
  // Пример:
  console.log(fillArray(5)); 
  
//1. Написать свою реализацию функций: map, filter, find, some, every.

//map
let numbers = [1, 2, 3, 4]
let doubled = numbers.map(num => num * 2)
console.log(doubled)

//filter
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]


//find
let arr = [1, 2, 3, 4];
let res = arr.find(function(currentValue) {
	return currentValue > 0;
});
console.log(res);

//some
let hasBigNumber = numbers.some(num => num > 5);
console.log(hasBigNumber); // true

//every
let allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

//1.Написать функцию, которая принимает на вход массив из двух чисел и возвращает сумму этих двух чисел плюс сумму всех чисел между ними. Наименьшее число не всегда будет на первом месте. (Например sumAlI([4, 1]) должен возвращать 10)

function summArrNumber(array1)
{
    let min = Math.min(array1[0], array1[1])
    let max = Math.max(array1[0], array1[1])
    let sumArr = 0

    for(let i = min;i<=max;i++)
    {
        sumArr +=i;
    }
    return sumArr;
}
console.log(summArrNumber([4, 1]))

//2. Написать функцию, которая на вход принимает два массива и возвращает новый массив с элементами найденными только в одном массиве, но не в обоих.

function DiffArray(difarr1, difarr2)
{
    let resArr = []

    for(let item of difarr1)
    {
        if(!difarr2.includes(item))
            {
                resArr.push(item)
            }
    }

    for(let item of difarr2)
    {
        if(!difarr1.includes(item))
            {
                resArr.push(item)
            }
    }
    return resArr
}
console.log(DiffArray([1, 2, 4, 5], [1, 2, 3, 4, 6]))

//3. Написать функцию, которая на вход принимает массив и еще один или несколько аргументов (точное количество не известно). Удалить из массива все
//элементы, которые имеют то же значение, что и эти аргументы.

function deletElement(delArr, ...elementArr)
{
    let resDel = [];
    for(let item of delArr)
    {
        if(!elementArr.includes(item))
        {
            resDel.push(item)
        }
    }
    return resDel
}
console.log(deletElement([1, 2, 3, 4, 5, 6, 7, 8], 2, 5, 7))

//4.Создайте функцию, которая просматривает массив объектов (первый аргумент) и возвращает массив всех объектов, имеющих совпадающие пары имя и значение (второй аргумент). Например: whatlsinAName([{"apple": 1, "bat": 2 }, { "apple": 1 }. {"apple": 1, "bat": 2, "cookie": 2}, { "bat":2}] {"apple": 1, "bat": 2}) должен вернуться [{ "apple": 1, "bat": 2 ), { "apple": 1, "bat": 2, "cookie":2}]
function whatIsInAName(collection, source) {
  let result = [];

  // Перебираем каждый объект из массива collection
  for (let obj of collection) {
    let isMatch = true; // Флаг, который показывает, подходит ли объект

    // Перебираем все ключи из объекта source
    for (let key in source) {
      // Если в obj нет такого же значения, как в source, то объект не подходит
      if (obj[key] !== source[key]) {
        isMatch = false; // Меняем флаг, объект не подходит
        break
      }
    }

    // Если после всех проверок isMatch осталось true, добавляем объект в result
    if (isMatch) {
      result.push(obj)
    }
  }

  return result;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }));

//5. Написать функцию, которая конвертирует строку в spinal-case регистр.

function spinalCase(str) 
{
    const regex =new RegExp(/(([A-Z]|[a-z])[a-z]+)/,'g')
    str=str.match(regex);
    return str.join('-').toLowerCase()
}
  
  console.log(spinalCase('function spinal case'));

//6. Написать функцию, которая осуществляет поиск и замену в предложении. Первый аргумент - это строка, в которой осуществляется поиск и замена. Второй аргумент - это слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить. При замене сохраняйте регистр первого символа в
//исходном слове.

function myReplace(mystr, before, after)
{
    if (before[0]===before[0].toUpperCase())
    {
        after = after[0].toUpperCase()+after.slice(1)
    }
    else
    {
        after = after[0].toLowerCase()+after.slice(1)
    }
    return mystr.replace(before, after)
}
console.log(myReplace("Hello World", "World", "universe"))

//7. Написать функцию, которая на вход принимает последовательность букв и ищет пропущенные буквы. Если все буквы присутствуют в диапазоне, то возвращается undefined. Например: fearNotLetter("abce") должна вернуть "d"
function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
      if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
        return String.fromCharCode(str.charCodeAt(i) + 1)
      }
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce")); 
 //8. Написать функцию, которая принимает два или более массивов и возвращает новый массив уникальных значений. Значения должны быть отсортированы
//по их первоначальному порядку.  

function uniteUnique(...arrays) {
    let result = []
  
    for (let arr of arrays) {
      for (let item of arr) {
        if (!result.includes(item)) {
          result.push(item)
        }
      }
    }
  
    return result
  }
  
console.log(uniteUnique([1, 2, 3], [5, 2, 1], [2, 1, 10])); 

//9. Написать функцию, которая заменяет символы &, <, >, "(двойные кавычки), и "(апостроф) в строке их соответствующим HTML - кодом.
function convertHTML(str) {
  let map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }
  let result = ""
  for (let char of str) {
    result += map[char] || char
  }

  return result
}

console.log(convertHTML("Dolce & Gabbana")); // "Dolce &amp; Gabbana"

//10. Написать функцию, которая суммирует все простые числа до п (аргумент функции) 

function sumPrimes(num) {
    function isPrime(n) {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    }
  
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) sum += i;
    }
  
    return sum;
  }
  
  console.log(sumPrimes(10)); 

 //11. Написать функцию, которая принимает массив и функцию и удаляет каждый элемент массива начиная с первого, пока функция не вернет true, а затем
//возвращает оставшуюся часть массива. Например: dropElements([1, 2, 3, 4], function(n) {return n > = 3;}) должна вернуть [3, 4].  

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  
  console.log(dropElements([1, 2, 3, 4], n => n >= 3)); // [3, 4]

//12. Написать функцию, которая принимает массив различной вложенности и возвращает одномерный массив. Например: steamrollArray([1, [2], [3. [[4]]])
//должна вернуть [1, 2, 3, 4].  
function steamrollArray(arr) {
  let result = [];

  function flatten(subArr) {
    for (let item of subArr) {
      if (Array.isArray(item)) {
        flatten(item)
      } else {
        result.push(item)
      }
    }
  }
  flatten(arr)
  return result
}

console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]

//13. Написать функцию, которая суммирует два аргумента вместе. Если указан только один аргумент, то возвращает функцию, которая ожидает второй
//аргумент и возвращает сумму.
function addTogether(a, b) {
    if (b === undefined) {
      return function(c) {
        return a + c;
      };
    }
    return a + b;
  }
  
console.log(addTogether(2, 3)); 
console.log(addTogether(2)(3));
  
