'use strict';

class WalletController {

  deductEntryFee(wallet, entryFee, discount) {
    entryFee = this.applyDiscount(entryFee, discount)
    if (wallet.totalBalance > entryFee) {
      entryFee = this.deductBonus(wallet, entryFee);
      if (entryFee > 0) {
        entryFee = this.deductDeposit(wallet, entryFee);
      }
      if (entryFee > 0) {
        entryFee = this.deductWinnings(wallet, entryFee);
      }
      return {
        data: wallet,
        message: 'Entry fee deducted successully'
      }
    } else {
      return {
        data: wallet,
        message: 'Wallet does not have sufficient balance.'
      }
    }
  }

  deductBonus(wallet, entryFee) {
    if (wallet.bonus > 0) {
      let amount = this.calculatePercentage(entryFee, 10);
      if (wallet.bonus < amount) {
        amount = wallet.bonus;
      }
      entryFee -= amount;
      wallet.bonus -= amount;
      wallet.totalBalance -= amount;
    }
    return entryFee;
  }

  deductWinnings(wallet, entryFee) {
    if (wallet.winnings > 0) {
      wallet.winnings -= entryFee;
      wallet.totalBalance -= entryFee;
    }
    return 0;
  }

  deductDeposit(wallet, entryFee) {
    if (wallet.deposit > 0) {
      let amount = entryFee;
      if (wallet.deposit < amount) {
        amount = wallet.deposit;
      }
      entryFee -= amount;
      wallet.deposit -= amount;
      wallet.totalBalance -= amount;
    }
    return entryFee;
  }

  applyDiscount(entryFee, discount) {
    if (discount && (discount > 0) && (discount < 70)) {
      discount = this.calculatePercentage(entryFee, discount);
    } else {
      discount = 0;
    }
    entryFee -= discount;
    return entryFee;
  }

  calculatePercentage(base, percentage) {
    return (base * percentage) / 100;
  }
}

module.exports = WalletController;