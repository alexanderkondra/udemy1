
let money = prompt ('whats your budget?', ''),
    time = promt ('Enter Date-Month-Day', '');

let appData = {
  budged: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  saving: false
};
let a1 = prompt('Monthly expenses', ''),
    a2 = prompt('How much would it cost?', '')
    a3 = prompt('Monthly expenses', ''),
    a4 = prompt('How much would it cost?', '')

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);
