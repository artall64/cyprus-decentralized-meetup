import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ethers } from 'ethers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly allowanceAmount$ = new BehaviorSubject<string>('');

  readonly error$ = new BehaviorSubject<string>('');

  readonly userAddressControl = new FormControl('0x6Ab9c477246bCaa4A1C3a825F42437EF66c55953');

  readonly tokenAddressControl = new FormControl('0xe9e7cea3dedca5984780bafc599bd69add087d56');

  constructor(
  ) {
  }

  getAllowance(): void {
    const ownerAddress = this.userAddressControl.value.trim();
    const contractAddress = this.tokenAddressControl.value.trim();
    const spenderAddress = '0x11111112542d85b3ef69ae05771c2dccff4faa26';

    this.getAllowTokenAmount(ownerAddress, contractAddress, spenderAddress)
      .then((amount) => {
        this.allowanceAmount$.next(amount);
        this.error$.next('');
      })
      .catch(() => {
        this.error$.next('error');
      });
  }

  async getAllowTokenAmount(
    ownerAddress: string,
    contractAddress: string,
    spenderAddress: string
  ): Promise<string> {
    const provider = new ethers.providers.JsonRpcProvider(
      {url: 'https://bsc-dataseed.binance.org/'},
      {name: 'bsc', chainId: 56}
    )

    let abi = ["function allowance(address, address) view returns (uint)"];

    const signer = new ethers.VoidSigner(ownerAddress, provider)
    const contract = new ethers.Contract(contractAddress, abi, signer)
    const tokens = await contract.allowance(ownerAddress, spenderAddress);

    return ethers.utils.formatEther(tokens);
  }
}
