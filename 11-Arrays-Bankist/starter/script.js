'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index, array) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
            <div class="movements__value">${movement}</div>
        </div> 
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(char => char[0])
      .join('');
  });
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

createUsernames(accounts);

const updateUI = function (currentAccount) {
  // display movements
  displayMovements(currentAccount.movements);
  // display balance
  calcPrintBalance(currentAccount);
  // display summary
  calcDisplaySummary(currentAccount);
};

let currentAccount;
// event handler
btnLogin.addEventListener('click', function (e) {
  // prevent form from submmiting - reload
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    // delete account
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;
  }

  inputClosePin.value = inputCloseUsername.value = '';
  inputClosePin.blur();  
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

///////////////////////////////////////////////
///////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////////

// const eurToUsd = 1.1;
// // const movementsUSD = movements.map(function(mov) {
// //     return mov * eurToUsd;
// // });
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movementsUSD); // [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]

// const movementsDescriptions = movements.map((mov, index) => {
//     if (mov > 0) {
//         return `Movement ${index + 1}: You ${mov}`;
//     } else {
//         return `Movement ${index + 1}: You withdrew ${Math.abs(mov)}`;
//     }
// })
// console.log(movementsDescriptions);

// const deposits = movements.filter((mov, index, array) => {
//     return mov > 0;
// });
// console.log(deposits); // positive value

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce((acc, cur, index, arr) => {
//     console.log(`Iteration ${index}: ${acc} + ${cur}`);
//     return acc + cur;
// }, 0);
// console.log(balance);

// const max = movements.reduce((acc, cur) => Math.max(acc, cur), movements[0]);
// console.log(max);

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// const calcAverageHumanAge = (ages) => {
//     const humanAge = ages.map(cur => cur > 2 ? 16 + cur * 4 : 2 * cur);
//     const adultDogs = humanAge.filter(cur => cur >= 18);
//     const averageAges = adultDogs.reduce((acc, cur) => acc + cur / adultDogs.length, 0);
//     return averageAges;
// }

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// movements.filter(mov => mov > 0).map(mov => mov)
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.find(mov => mov < 0));

const hehe = movements.some(mov => mov >= 3000);
console.log(hehe); // true

console.log(movements.every(mov => mov >= 3000)); // false
