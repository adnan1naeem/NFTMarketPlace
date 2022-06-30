export const SALE_CONTRACT_ADDRESS =
  '0xF10C69EA5Bb32f25dE8bC9C17416Ba7c37E28217'
export const SALE_CONTRACT_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: 'id',
        type: 'uint256',
      },
      {
        name: 'name',
        type: 'string',
      },
      {
        name: 'items',
        type: 'string',
      },
      {
        name: 'link',
        type: 'string',
      },
    ],
    name: 'setNftInfo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'getNftInfo',
    outputs: [
      {
        name: '',
        type: 'string',
      },
      {
        name: '',
        type: 'string',
      },
      {
        name: '',
        type: 'string',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
]
