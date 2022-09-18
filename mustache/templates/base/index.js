module.exports = {
  yaml: [
    {
      specVersion: '0.0.2',
      repository: 'https://github.com/esketit-cash/tornado-subgraph',
      dataSourceKind: 'ethereum/contract',
      mapping: {
        kind: 'ethereum/events',
        version: '0.0.4',
        language: 'wasm/assemblyscript',
      },
    },
  ],
};
