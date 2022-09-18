const deployedBlocks = {
  bsc: 8159290,
  xdai: 17754561,
  matic: 16257962,
  goerli: 3781595,
  mainnet: 9116966,
  optimism: 2243689,
  arbitrum: 3430648,
  avalanche: 4429818,
};

const contracts = [
  {
    prod: deployedBlocks.bsc,
    amount: '0.1',
    network: 'bsc',
    currency: 'bnb',
    name: 'Instance',
    address: '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
  },
  {
    prod: deployedBlocks.bsc,
    amount: '1',
    network: 'bsc',
    currency: 'bnb',
    name: 'Instance',
    address: '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
  },
  {
    prod: deployedBlocks.bsc,
    amount: '10',
    network: 'bsc',
    currency: 'bnb',
    name: 'Instance',
    address: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
  },
  {
    prod: deployedBlocks.bsc,
    amount: '100',
    network: 'bsc',
    currency: 'bnb',
    name: 'Instance',
    address: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
  },
  {
    prod: deployedBlocks.xdai,
    amount: '100',
    network: 'xdai',
    currency: 'xdai',
    name: 'Instance',
    address: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
  },
  {
    prod: deployedBlocks.xdai,
    amount: '1000',
    network: 'xdai',
    currency: 'xdai',
    name: 'Instance',
    address: '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
  },
  {
    prod: deployedBlocks.xdai,
    amount: '10000',
    network: 'xdai',
    currency: 'xdai',
    name: 'Instance',
    address: '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
  },
  {
    prod: deployedBlocks.xdai,
    amount: '100000',
    network: 'xdai',
    currency: 'xdai',
    name: 'Instance',
    address: '0xa5C2254e4253490C54cef0a4347fddb8f75A4998',
  },
  {
    prod: deployedBlocks.matic,
    amount: '100',
    network: 'matic',
    currency: 'matic',
    name: 'Instance',
    address: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
  },
  {
    prod: deployedBlocks.matic,
    amount: '1000',
    network: 'matic',
    currency: 'matic',
    name: 'Instance',
    address: '0xdf231d99Ff8b6c6CBF4E9B9a945CBAcEF9339178',
  },
  {
    prod: deployedBlocks.matic,
    amount: '10000',
    network: 'matic',
    currency: 'matic',
    name: 'Instance',
    address: '0xaf4c0B70B2Ea9FB7487C7CbB37aDa259579fe040',
  },
  {
    prod: deployedBlocks.matic,
    amount: '100000',
    network: 'matic',
    currency: 'matic',
    name: 'Instance',
    address: '0xa5C2254e4253490C54cef0a4347fddb8f75A4998',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '0.1',
    network: 'mainnet',
    currency: 'eth',
    name: 'Instance',
    address: '0x12D66f87A04A9E220743712cE6d9bB1B5616B8Fc',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '1',
    network: 'mainnet',
    currency: 'eth',
    name: 'Instance',
    address: '0x47CE0C6eD5B0Ce3d3A51fdb1C52DC66a7c3c2936',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '10',
    network: 'mainnet',
    currency: 'eth',
    name: 'Instance',
    address: '0x910Cbd523D972eb0a6f4cAe4618aD62622b39DbF',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '100',
    network: 'mainnet',
    currency: 'eth',
    name: 'Instance',
    address: '0xA160cdAB225685dA1d56aa342Ad8841c3b53f291',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '100',
    network: 'goerli',
    currency: 'dai',
    name: 'Instance',
    address: '0x76D85B4C0Fc497EeCc38902397aC608000A06607',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '100',
    network: 'mainnet',
    currency: 'dai',
    name: 'Instance',
    address: '0xD4B88Df4D29F5CedD6857912842cff3b20C8Cfa3',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '1000',
    network: 'mainnet',
    currency: 'dai',
    name: 'Instance',
    address: '0xFD8610d20aA15b7B2E3Be39B396a1bC3516c7144',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '10000',
    network: 'mainnet',
    currency: 'dai',
    name: 'Instance',
    address: '0x07687e702b410Fa43f4cB4Af7FA097918ffD2730',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '100000',
    network: 'mainnet',
    currency: 'dai',
    name: 'Instance',
    address: '0x23773E65ed146A459791799d01336DB287f25334',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '5000',
    network: 'mainnet',
    currency: 'cdai',
    name: 'Instance',
    address: '0x22aaA7720ddd5388A3c0A3333430953C68f1849b',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '50000',
    network: 'mainnet',
    currency: 'cdai',
    name: 'Instance',
    address: '0x03893a7c7463AE47D46bc7f091665f1893656003',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '500000',
    network: 'mainnet',
    currency: 'cdai',
    name: 'Instance',
    address: '0x2717c5e28cf931547B621a5dddb772Ab6A35B701',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '5000000',
    network: 'mainnet',
    currency: 'cdai',
    name: 'Instance',
    address: '0xD21be7248e0197Ee08E0c20D4a96DEBdaC3D20Af',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '100',
    network: 'mainnet',
    currency: 'usdc',
    name: 'Instance',
    address: '0xd96f2B1c14Db8458374d9Aca76E26c3D18364307',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '1000',
    network: 'mainnet',
    currency: 'usdc',
    name: 'Instance',
    address: '0x4736dCf1b7A3d580672CcE6E7c65cd5cc9cFBa9D',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '100',
    network: 'mainnet',
    currency: 'usdt',
    name: 'Instance',
    address: '0x169AD27A470D064DEDE56a2D3ff727986b15D52B',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '1000',
    network: 'mainnet',
    currency: 'usdt',
    name: 'Instance',
    address: '0x0836222F2B2B24A3F36f98668Ed8F0B38D1a872f',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '0.1',
    network: 'mainnet',
    currency: 'wbtc',
    name: 'Instance',
    address: '0x178169B423a011fff22B9e3F3abeA13414dDD0F1',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '1',
    network: 'mainnet',
    currency: 'wbtc',
    name: 'Instance',
    address: '0x610B717796ad172B316836AC95a2ffad065CeaB4',
  },
  {
    prod: deployedBlocks.mainnet,
    amount: '10',
    network: 'mainnet',
    currency: 'wbtc',
    name: 'Instance',
    address: '0xbB93e510BbCD0B7beb5A853875f9eC60275CF498',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '1000',
    network: 'goerli',
    currency: 'dai',
    name: 'Instance',
    address: '0xCC84179FFD19A1627E79F8648d09e095252Bc418',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '10000',
    network: 'goerli',
    currency: 'dai',
    name: 'Instance',
    address: '0xD5d6f8D9e784d0e26222ad3834500801a68D027D',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '100000',
    network: 'goerli',
    currency: 'dai',
    name: 'Instance',
    address: '0x407CcEeaA7c95d2FE2250Bf9F2c105aA7AAFB512',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '5000',
    network: 'goerli',
    currency: 'cdai',
    name: 'Instance',
    address: '0x833481186f16Cece3f1Eeea1a694c42034c3a0dB',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '50000',
    network: 'goerli',
    currency: 'cdai',
    name: 'Instance',
    address: '0xd8D7DE3349ccaA0Fde6298fe6D7b7d0d34586193',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '500000',
    network: 'goerli',
    currency: 'cdai',
    name: 'Instance',
    address: '0x8281Aa6795aDE17C8973e1aedcA380258Bc124F9',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '5000000',
    network: 'goerli',
    currency: 'cdai',
    name: 'Instance',
    address: '0x57b2B8c82F065de8Ef5573f9730fC1449B403C9f',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '100',
    network: 'goerli',
    currency: 'usdc',
    name: 'Instance',
    address: '0x05E0b5B40B7b66098C2161A5EE11C5740A3A7C45',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '1000',
    network: 'goerli',
    currency: 'usdc',
    name: 'Instance',
    address: '0x23173fE8b96A4Ad8d2E17fB83EA5dcccdCa1Ae52',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '100',
    network: 'goerli',
    currency: 'usdt',
    name: 'Instance',
    address: '0x538Ab61E8A9fc1b2f93b3dd9011d662d89bE6FE6',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '1000',
    network: 'goerli',
    currency: 'usdt',
    name: 'Instance',
    address: '0x94Be88213a387E992Dd87DE56950a9aef34b9448',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '0.1',
    network: 'goerli',
    currency: 'wbtc',
    name: 'Instance',
    address: '0x242654336ca2205714071898f67E254EB49ACdCe',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '1',
    network: 'goerli',
    currency: 'wbtc',
    name: 'Instance',
    address: '0x776198CCF446DFa168347089d7338879273172cF',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '10',
    network: 'goerli',
    currency: 'wbtc',
    name: 'Instance',
    address: '0xeDC5d01286f99A066559F60a585406f3878a033e',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '0.1',
    network: 'goerli',
    currency: 'eth',
    name: 'Instance',
    address: '0x6Bf694a291DF3FeC1f7e69701E3ab6c592435Ae7',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '1',
    network: 'goerli',
    currency: 'eth',
    name: 'Instance',
    address: '0x3aac1cC67c2ec5Db4eA850957b967Ba153aD6279',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '10',
    network: 'goerli',
    currency: 'eth',
    name: 'Instance',
    address: '0x723B78e67497E85279CB204544566F4dC5d2acA0',
  },
  {
    prod: deployedBlocks.goerli,
    amount: '100',
    network: 'goerli',
    currency: 'eth',
    name: 'Instance',
    address: '0x0E3A09dDA6B20aFbB34aC7cD4A6881493f3E7bf7',
  },
  {
    prod: deployedBlocks.avalanche,
    amount: '10',
    network: 'avalanche',
    currency: 'avax',
    name: 'Instance',
    address: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
  },
  {
    prod: deployedBlocks.avalanche,
    amount: '100',
    network: 'avalanche',
    currency: 'avax',
    name: 'Instance',
    address: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
  },
  {
    prod: deployedBlocks.avalanche,
    amount: '500',
    network: 'avalanche',
    currency: 'avax',
    name: 'Instance',
    address: '0xaf8d1839c3c67cf571aa74B5c12398d4901147B3',
  },
  {
    prod: deployedBlocks.arbitrum,
    amount: '0.1',
    network: 'arbitrum-one',
    currency: 'eth',
    name: 'Instance',
    address: '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
  },
  {
    prod: deployedBlocks.arbitrum,
    amount: '1',
    network: 'arbitrum-one',
    currency: 'eth',
    name: 'Instance',
    address: '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
  },
  {
    prod: deployedBlocks.arbitrum,
    amount: '10',
    network: 'arbitrum-one',
    currency: 'eth',
    name: 'Instance',
    address: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
  },
  {
    prod: deployedBlocks.arbitrum,
    amount: '100',
    network: 'arbitrum-one',
    currency: 'eth',
    name: 'Instance',
    address: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
  },
  {
    prod: deployedBlocks.optimism,
    amount: '0.1',
    network: 'optimism',
    currency: 'eth',
    name: 'Instance',
    address: '0x84443CFd09A48AF6eF360C6976C5392aC5023a1F',
  },
  {
    prod: deployedBlocks.optimism,
    amount: '1',
    network: 'optimism',
    currency: 'eth',
    name: 'Instance',
    address: '0xd47438C816c9E7f2E2888E060936a499Af9582b3',
  },
  {
    prod: deployedBlocks.optimism,
    amount: '10',
    network: 'optimism',
    currency: 'eth',
    name: 'Instance',
    address: '0x330bdFADE01eE9bF63C209Ee33102DD334618e0a',
  },
  {
    prod: deployedBlocks.optimism,
    amount: '100',
    network: 'optimism',
    currency: 'eth',
    name: 'Instance',
    address: '0x1E34A77868E19A6647b1f2F47B51ed72dEDE95DD',
  },
];

module.exports = contracts;