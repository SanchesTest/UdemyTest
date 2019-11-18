"use strict";

let money,
    time;
    // = prompt("Ваш бюджет на месяц?", "")
    // = prompt("Введите дату в формате YYYY-MM-DD", "")

let appData = {
  moneyData: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let costsOne = prompt("Введите обязательную статью расходов в этом месяце", ""),
    sumOne = +prompt("Во сколько обойдется?", ""),
    costsTwo = prompt("Введите обязательную статью расходов в этом месяце", ""),
    sumTwo = +prompt("Во сколько обойдется?", "");

appData.expenses.costsOne = sumOne;
appData.expenses.costsTwo = sumTwo;




alert((appData.expenses.costsOne + appData.expenses.costsTwo) / 30);



// console.log(costsOneSum + costsTwoSum);
