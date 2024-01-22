// // Example 1: Abstraction and Classes & Objects

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     makeSound() {
//         // Abstract method
//     }
// }

// class Dog extends Animal {
//     makeSound() {
//         return "Woof!";
//     }
// }

// class Cat extends Animal {
//     makeSound() {
//         return "Meow!";
//     }
// }

// const dog = new Dog("Buddy");
// const cat = new Cat("Whiskers");

// console.log(`${dog.name} says: ${dog.makeSound()}`);
// console.log(`${cat.name} says: ${cat.makeSound()}`);

// // Example 2: Encapsulation
// class BankAccount {
//     constructor(accountHolder, balance = 0) {
//         this.accountHolder = accountHolder;
//         this.balance = balance;
//     }

//     deposite(amount) {
//         if (amount > 0) {
//             this.balance += amount;
//             return `Deposite of ${amount} successful. New balance is ${this.balance}`;
//         } else {
//             return "Invalid deposit amount.";
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//             return `Withdrawal of ${amount} successful. New balance: ${this.balance}`;
//         } else {
//             return "Invalid withdrawal amount or insufficient balance.";
//         }
//     }
// }

// const account1 = new BankAccount("Jane", 1000);

// console.log(account1.deposite(480));
// console.log(account1.withdraw(115));


class BankAccount {
    constructor(accountHolder, initialBalance = 0) {
        // Public properties
        this.getAccountHolder = () => accountHolder;
        this.getBalance = () => initialBalance;

        // Private properties
        let balance = initialBalance;

        // Private method
        const validateAmount = amount => amount > 0;

        this.deposit = amount => {
            if (validateAmount(amount)) {
                balance += amount;
                return `Deposit of ${amount} successful. New balance: ${balance}`;
            } else {
                return "Invalid deposit amount.";
            }
        };

        this.withdraw = amount => {
            if (validateAmount(amount) && amount <= balance) {
                balance -= amount;
                return `Withdrawal of ${amount} successful. New balance: ${balance}`;
            } else {
                return "Invalid withdrawal amount or insufficient balance.";
            }
        };
    }
}

// Usage
const account = new BankAccount("John Doe", 1000);

console.log(`Account Holder: ${account.getAccountHolder()}`);
console.log(`Initial Balance: ${account.getBalance()}`);
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.balance);
