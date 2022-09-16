import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 2,
    v1pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0xe63936cE05458f57aEa33E4f60f6dF456897bb1d',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    v1pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xe63936cE05458f57aEa33E4f60f6dF456897bb1d',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 4,
    v1pid: 252,
    lpSymbol: 'MPAD-CAKE LP',
    lpAddresses: {
      97: '0x0014c3018d67052593c5A4a5d9fE097FcaE632Fa',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 5,
    v1pid: 252,
    lpSymbol: 'VLT-BNB LP',
    lpAddresses: {
      97: '0x2604E79283d0659938fFBB4d4d7bd6ed0f32E330',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
