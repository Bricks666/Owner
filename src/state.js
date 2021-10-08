export const state = {
  html: {
    header: document.querySelector(".connect-block"),
    accountName: document.querySelector(".connect-block__current-user"),
    main: document.querySelector(".main"),
  },

  deployData: {
    abi: [
      {
        inputs: [],
        stateMutability: "payable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "oldOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnerSet",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "changeOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "getOwner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    bytecode:
      "60806040526000341415610048576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161003f9061012b565b60405180910390fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a73560405160405180910390a3610185565b600061011560178361014b565b91506101208261015c565b602082019050919050565b6000602082019050818103600083015261014481610108565b9050919050565b600082825260208201905092915050565b7f504c656173652c20706c617920666f72206465706c6f79000000000000000000600082015250565b610356806101946000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063893d20e81461003b578063a6f9dae114610059575b600080fd5b610043610075565b604051610050919061025d565b60405180910390f35b610073600480360381019061006e91906101fe565b61009e565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461012c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161012390610278565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a73560405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000813590506101f881610309565b92915050565b600060208284031215610214576102136102db565b5b6000610222848285016101e9565b91505092915050565b610234816102a9565b82525050565b6000610247601383610298565b9150610252826102e0565b602082019050919050565b6000602082019050610272600083018461022b565b92915050565b600060208201905081810360008301526102918161023a565b9050919050565b600082825260208201905092915050565b60006102b4826102bb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b7f43616c6c6572206973206e6f74206f776e657200000000000000000000000000600082015250565b610312816102a9565b811461031d57600080fd5b5056fea26469706673582212207e4510141c2c437c10a7a5844f41a379df7d7624f778cd5dcbb220356fb37bdb64736f6c63430008070033",
  },
};

window.state = state;
