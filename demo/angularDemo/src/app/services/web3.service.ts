import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root',
})
export class Web3Service {

  constructor() {
  }

  async getAllowTokenAmount(
    ownerAddress: string,
    contractAddress: string,
    spenderAddress: string
  ): Promise<string> {
    const provider = new ethers.providers.JsonRpcProvider(
      {url: 'https://bsc-nodes.1inch.io'},
      {name: 'bsc', chainId: 56}
    )

    let abi = ["function allowance(address, address) view returns (uint)"];

    const signer = new ethers.VoidSigner(ownerAddress, provider)
    const contract = new ethers.Contract(contractAddress, abi, signer)
    const tokens = await contract.allowance(ownerAddress, spenderAddress);

    return ethers.utils.formatEther(tokens);
  }
}
