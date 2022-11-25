require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember under hunt gloom outer someone'; 
let testAccounts = [
"0xd14cb0cf90a422da5661fe95fc617d70322b7afaab7b2ba791d41ba20b4a790a",
"0x90b455d1f9baaacc80cb328113e7aa48d4f30bfbfeb51dfdf3918ee12281fb8b",
"0x1eaf815a2f08c7fc6f4327b0386478a5ffc012739fec073146e5fcf3b17810ea",
"0x098bdb2af711a285fe200c2febdbdf8d0bfbf514ef91f79bce101389e8205e0e",
"0x7fc04f0cfb093457e0d3889a825f3715393ffc02d58d931cb28a8adcd6dbf464",
"0xdd8266e2decb439729a445eb9da3d53a93d99d1d88b2ac9761114be276dbdf35",
"0x447d6c6f44473934ff1d92644f29ca3a011de1fa57e9ea8640ff04da8cf86325",
"0xc0245d7f1fbadc51ea637ba34907689bf19be32be9476d4d6c6207c18e51dcc9",
"0x2b3b28dcccb5557325485390c91c755911c849cb7d410881df59aae238fcb4cd",
"0x84023bcbff7e34548acc00b8b3b56d212bbf1b2f6954409cc65cf13d072bdd6f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

