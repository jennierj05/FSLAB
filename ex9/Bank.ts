import * as readlineSync from 'readline-sync';

class BankAccount {
    ownerName: string;
    balance: number;

    constructor(ownerName: string, initialBalance: number) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    credit(amount: number): void {
        this.balance += amount;
        console.log(`Credited ${amount} to ${this.ownerName}'s account.`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from ${this.ownerName}'s account.`);
        } else {
            console.log(`Insufficient balance for ${this.ownerName} to withdraw ${amount}.`);
        }
    }

    checkBalance(): void {
        console.log(`Balance for ${this.ownerName}: ${this.balance}`);
    }

    transfer(amount: number, recipient: BankAccount): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            recipient.credit(amount);
            console.log(`Transferred ${amount} from ${this.ownerName}'s account to ${recipient.ownerName}'s account.`);
        } else {
            console.log(`Insufficient balance for ${this.ownerName} to transfer ${amount}.`);
        }
    }
}

// Example usage:
const account1 = new BankAccount("John", 1000);
const account2 = new BankAccount("Alice", 2000);

while (true) {
    // Menu
    console.log("\nBank Account Menu:");
    console.log("1. Check Balance");
    console.log("2. Credit Amount");
    console.log("3. Withdraw Amount");
    console.log("4. Transfer Amount");
    console.log("5. Exit");

    let choice = readlineSync.question("Enter your choice: ");

    switch (choice) {
        case '1':
            account1.checkBalance();
            account2.checkBalance();
            break;
        case '2':
            let amountToCredit = parseInt(readlineSync.question('Enter amount to credit: '));
            account1.credit(amountToCredit);
            break;
        case '3':
            let amountToWithdraw = parseInt(readlineSync.question('Enter amount to withdraw: '));
            account1.withdraw(amountToWithdraw);
            break;
        case '4':
            let amountToTransfer = parseInt(readlineSync.question('Enter amount to transfer: '));
            let recipientName = readlineSync.question("Enter recipient account owner's name: ");
            if (recipientName.toLowerCase() === 'john') {
                account1.transfer(amountToTransfer, account2);
            } else if (recipientName.toLowerCase() === 'alice') {
                account2.transfer(amountToTransfer, account1);
            } else {
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
