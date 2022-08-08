

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
    chooseExpenses: function() {
        for(let i=0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ' '),
                b = prompt("Во сколько обойдется?", ' ');
            
                if ((typeof(a))  === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 ) { 
                
                    appData.expenses[a] = b; 
                    } else {
                    
                    console.log("Вы ввели неверные значения");
        
                    i--;
                   
                }
              
            }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет" + appData.moneyPerDay);
    },
    detectLevel: function() {
        if ( appData.moneyPerDay < 100 ) {
            console.log("Малый достаток");
        
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            console.log("Средний достаток");
            
        } else if ( appData.moneyPerDay > 2000) {
            console.log("Большой достаток");
            
        } else {
            console.log("Что то пошло не так");
        
        }
    },
    chooseOptExpenses: function() {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
    },
    checkSavings: function() {
        if (appData.savings == true){
            let save = +prompt("Kakova sunna nokoplenij?"),
            percent = +prompt("Pod kakoj percent");
    
            appData.monthIncome = save/100/12*percent;
            alert("Dohod v mesyac s depozita: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
     for (let i = 0; i < 2 ; i++) {
        let items = prompt('Что принесёт дополнительный доход (Перечислите черещ запятую' , ' ');
        if (typeof(items) === "string" && items != 'null' && items != '') { 
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что то ещё,"));
        appData.income.sort();
        } else {
            i--;
        }
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
            return 0;
        });
    }
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}













