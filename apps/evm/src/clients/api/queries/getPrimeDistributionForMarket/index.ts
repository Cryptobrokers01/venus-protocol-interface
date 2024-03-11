import BigNumber from 'bignumber.js';

import type { Prime } from 'libs/contracts';

export interface GetPrimeDistributionForMarketInput {
  vTokenAddress: string;
  primeContract: Prime;
}

export interface GetPrimeDistributionForMarketOutput {
  totalDistributedMantissa: BigNumber;
}

const getPrimeDistributionForMarket = async ({
  vTokenAddress,
  primeContract,
}: GetPrimeDistributionForMarketInput): Promise<GetPrimeDistributionForMarketOutput> => {
  const totalDistributedMantissa = await primeContract.incomeDistributionYearly(vTokenAddress);

  return {
    totalDistributedMantissa: new BigNumber(totalDistributedMantissa.toString()),
  };
};

export default getPrimeDistributionForMarket;
