const Wallet = require('../policies/wallet');

const initWallet = () => {
  return new Wallet(100, 60, 340)
}

module.exports = initWallet;