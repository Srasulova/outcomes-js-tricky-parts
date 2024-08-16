function createAccount(pin, amount = 0) {
  let currentPin = pin;
  let balance = amount;

  return {
    checkBalance: function (inputPin) {
      if (inputPin === currentPin) {
        return `$${balance}`;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit: function (inputPin, depositAmount) {
      if (inputPin === currentPin) {
        balance += depositAmount;
        return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw: function (inputPin, withdrawalAmount) {
      if (inputPin === currentPin) {
        if (withdrawalAmount > balance) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        } else {
          balance -= withdrawalAmount;
          return `Successfully withdrew $${withdrawalAmount}. Current balance: $${balance}.`;
        }
      } else {
        return "Invalid PIN.";
      }
    },
    changePin: function (oldPin, newPin) {
      if (oldPin === currentPin) {
        currentPin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

// Example usage:
let account = createAccount("1234", 100);
console.log(account.checkBalance("oops")); // "Invalid PIN."
console.log(account.deposit("1234", 250)); // "Successfully deposited $250. Current balance: $350."
console.log(account.withdraw("1234", 300)); // "Successfully withdrew $300. Current balance: $50."
console.log(account.withdraw("1234", 10)); // "Withdrawal amount exceeds account balance. Transaction cancelled."
console.log(account.changePin("1234", "5678")); // "PIN successfully changed!"

module.exports = { createAccount };
