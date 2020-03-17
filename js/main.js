"Use strict"

let buttonStart = document.getElementById("start"),
    budgetValue = document.querySelector(".budget-value"),
    daybudget = document.querySelectorAll(".daybudget-value"),
    levelValue = document.querySelectorAll(".level-value"),
    expensesValue = document.querySelectorAll(".expenses-value"),
    optionalexpensesValue = document.querySelectorAll(".optionalexpenses-value"),
    incomeValue = document.querySelectorAll(".income-value"),
    monthsavingsValue = document.querySelectorAll(".monthsavings-value"),
    yearsavingsValue = document.querySelectorAll(".yearsavings-value"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value"),
    chooseExpenses = document.querySelectorAll(".expenses-item"),
    buttons = document.getElementsByTagName("button"),
    accept1 = document.querySelector(".count-budget-btn"),
    accept2 = document.querySelector(".optionalexpenses-btn"),
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses"),
    chooseIncome = document.querySelector("#income"),
    checkbox = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    expensesBtn = document.querySelector(".expenses-item-btn");
    

let money, time;

buttonStart.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "");
    }

    appData.budget = money;
    appData.time = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < chooseExpenses.length; i++) {
        let a = chooseExpenses[i].value,
            b = chooseExpenses[++i].value;
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
            console.log("Проверка пройдена");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

let appData = {
    budjet: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.Budjet / 30).toFixed(1); // Метод округления 1(до первого знака после запятой)
        alert(" Ежедневный бюджет :" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Cредний достаток");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let optExp = prompt("Статья необязательных расходов?", "");
            if (typeof (optExp) === "string" && typeof (optExp) != null) {
                console.log("Cтатья записана");
                appData.optionalExpenses.a = ("1 : " + optExp);
                appData.optionalExpenses.b = ("2 : " + optExp);
                appData.optionalExpenses.c = ("3 : " + optExp);

            } else {
                i = i - 1;
            }
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход? (Перечисли через запитую)", "");
            if ((typeof (items)) === "string" && (typeof (items)) != null && (typeof (items)) != "") {
                appData.income = items.split(", ");
                appData.income.push(prompt("Может что-то еще?", ""));
                appData.income.sort();
                appData.income.forEach(function (item, i) {
                    let n = i + 1;
                    alert(n + (" - Способы доп. зароботка: ") + item);
                });
            } else {
                i = i - 1;
            }
        }
    },
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
}

console.log(appData);

/* console.log(day);
console.log(month);
console.log(year);
console.log(sum);
console.log(checkbox);
console.log(chooseIncome);
console.log(optionalExpensesItem);
console.log(accept1);
console.log(accept2);
console.log(chooseExpenses);
console.log(buttonStart);
console.log(budgetValue);
console.log(daybudget);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalexpensesValue);
console.log(incomeValue);
console.log(monthsavingsValue);
console.log(yearsavingsValue);
console.log(yearValue);
console.log(monthValue);
console.log(dayValue) */
;