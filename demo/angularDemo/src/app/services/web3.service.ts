import { Injectable } from '@angular/core';
import { BigNumber, ethers } from 'ethers';

const oneInch_abi = {

}

@Injectable({
  providedIn: 'root',
})
export class Web3Service {

  constructor(
  ) {
  }

  async init() {
    const provider = new ethers.providers.JsonRpcProvider(
      { url: 'https://bsc-nodes.1inch.io'},
      { name: 'bsc', chainId:56 }
    )

    let abi = [
      "function balanceOf(address) view returns (uint)",
      "function allowance(owner, spender) view returns (uint256)",
    ];
    const signer = new ethers.VoidSigner('0x690eD9d54c99993e0Df4776d712dc8517457aa67', provider)

    const contract = new ethers.Contract("0xe9e7cea3dedca5984780bafc599bd69add087d56", abi, signer)

    const tokens = await contract.balanceOf('0x690eD9d54c99993e0Df4776d712dc8517457aa67');
    // const tokens = await contract.allowance('0x690eD9d54c99993e0Df4776d712dc8517457aa67', '0x11111112542d85b3ef69ae05771c2dccff4faa26');
    console.log(ethers.utils.formatEther(tokens))
  }
}
