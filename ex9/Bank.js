"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var BankAccount = /** @class */ (function () {
    function BankAccount(ownerName, initialBalance) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    BankAccount.prototype.credit = function (amount) {
        this.balance += amount;
        console.log("Credited ".concat(amount, " to ").concat(this.ownerName, "'s account."));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn ".concat(amount, " from ").concat(this.ownerName, "'s account."));
        }
        else {
            console.log("Insufficient balance for ".concat(this.ownerName, " to withdraw ").concat(amount, "."));
        }
    };
    BankAccount.prototype.checkBalance = function () {
        console.log("Balance for ".concat(this.ownerName, ": ").concat(this.balance));
    };
    BankAccount.prototype.transfer = function (amount, recipient) {
        if (amount <= this.balance) {
            this.balance -= amount;
            recipient.credit(amount);
            console.log("Transferred ".concat(amount, " from ").concat(this.ownerName, "'s account to ").concat(recipient.ownerName, "'s account."));
        }
        else {
            console.log("Insufficient balance for ".concat(this.ownerName, " to transfer ").concat(amount, "."));
        }
    };
    return BankAccount;
}());
// Example usage:
var account1 = new BankAccount("John", 1000);
var account2 = new BankAccount("Alice", 2000);
while (true) {
    // Menu
    console.log("\nBank Account Menu:");
    console.log("1. Check Balance");
    console.log("2. Credit Amount");
    console.log("3. Withdraw Amount");
    console.log("4. Transfer Amount");
    console.log("5. Exit");
    var choice = readlineSync.question("Enter your choice: ");
    switch (choice) {
        case '1':
            account1.checkBalance();
            account2.checkBalance();
            break;
        case '2':
            var amountToCredit = parseInt(readlineSync.question('Enter amount to credit: '));
            account1.credit(amountToCredit);
            break;
        case '3':
            var amountToWithdraw = parseInt(readlineSync.question('Enter amount to withdraw: '));
            account1.withdraw(amountToWithdraw);
            break;
        case '4':
            var amountToTransfer = parseInt(readlineSync.question('Enter amount to transfer: '));
            var recipientName = readlineSync.question("Enter recipient account owner's name: ");
            if (recipientName.toLowerCase() === 'john') {
                account1.transfer(amountToTransfer, account2);
            }
            else if (recipientName.toLowerCase() === 'alice') {
                account2.transfer(amountToTransfer, account1);
            }
            else {
                console.log("Recipient not found.");
            }
            break;
        case '5':
            console.log("Exiting...");
        default:
            console.log("Invalid choice.");
            break;
    }
}
