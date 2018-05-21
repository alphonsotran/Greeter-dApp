import Web3 from 'web3';

const ETHEREUM_CLIENT = new Web3(new Web.providers.HttpProvider("http://localhost:8545"))


var greeterABI =
[{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"type":"function"}]

var greeterAddress = '0x73ac32061d7a943fd1aadfbeaa5f6dc7a061213d';

const greeterContract = ETHEREUM_CLIENT.eth.contract(greeterABI).at(greeterAddress);

export {greeterContract}
