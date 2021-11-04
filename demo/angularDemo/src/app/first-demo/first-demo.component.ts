import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Web3Service } from '../services/web3.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-first-demo',
  templateUrl: './first-demo.component.html',
})
export class FirstDemoComponent {
  readonly allowanceAmount$ = new BehaviorSubject<string>('');

  readonly error$ = new BehaviorSubject<string>('');

  readonly userAddressControl = new FormControl(' 0x6Ab9c477246bCaa4A1C3a825F42437EF66c55953');

  readonly tokenAddressControl = new FormControl('0xe9e7cea3dedca5984780bafc599bd69add087d56');

  constructor(
    private web3Service: Web3Service
  ) {
  }

  getAllowance(): void {
    const ownerAddress = this.userAddressControl.value.trim();
    const contractAddress = this.tokenAddressControl.value.trim();
    const spenderAddress = '0x11111112542d85b3ef69ae05771c2dccff4faa26';

    this.web3Service.getAllowTokenAmount(ownerAddress, contractAddress, spenderAddress)
      .then((amount) => {
        this.allowanceAmount$.next(amount);
        this.error$.next('');
      })
      .catch(() => {
        this.error$.next('error');
      });
  }
}
