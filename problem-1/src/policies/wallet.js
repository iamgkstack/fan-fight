'use strict';

class WalletModel {

  constructor(deposit, bonus, winnings) {
    this.totalBalance = deposit + bonus + winnings;
    this.deposit = deposit;
    this.bonus = bonus;
    this.winnings = winnings;
  }
}

module.exports = WalletModel;