'use strict';

var money = prompt("Сколько вам лет:" , ""),
    time = prompt("Введите дату в формате YYYY-MM-DD" , "" ),
    spend = prompt("Обязательная статья расходов в этом месяце" , ""),
    amount = prompt("Сколько," , "");

Object.appData = {
budget: money,
timeData: time,
expens: Object.$expens = {spend:amount },
optionalExpense: Object.$optionalExpens = {},
income: Array.$income = [],
saving: false
   }   ; 

   var OneDayBudget = (money - amount) / 30;
   alert(prompt("Ваш бюджет на день" , OneDayBudget));
