require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad guess private tail size'; 
let testAccounts = [
"0x093f93c68c439f74f3b89316bd291e2e1170512f5c5b38d2177ed7c8bbd75243",
"0x9a20f923af27bdf845fb2c1809698c588f3aeee0bb4c2a8f6306d8b2c74c89ff",
"0x4b4c221337bb02ce6a595aba40d7f29aec99479514319305f7f1d74ac9966e3c",
"0xa25a141684ac81603c4c57711e812a6f7edcd6ad345ac87563b187340d776259",
"0x5d559d5c3802d4a7bcf109e729d7a9289d4c67ec71a145ba038d3ab071ab1776",
"0xec7356ab43d6868b5129cced8a958684c31f813d942bd027d8fe435a39063777",
"0x007c878b305e3b72d6bb10e3a8434d198a5d013a34d3bf7a3831215c148b54a5",
"0x4c5c55b7349d97b08501537696e115696bac5115f121264f4d69589ab6c73243",
"0x5fef917a0f474ef366705912a04df02425df2bca1748a6caf4e6f427236c1d83",
"0x198d7bebb2176f557be77d9ce8858de246a1f8cc869fa03dd62c188535248b87"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

