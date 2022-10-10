require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/eCaj7l-TxQA_FgF_H_O3iDZJaop8hsaS',
      accounts: [
        'c2e848b80a3b3d391c1b60246e38327a6d4cf3a0cfb12047d6ed829e7949ee1d',
      ],
    },
  },
}
