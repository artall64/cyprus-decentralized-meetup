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

  readonly error$ = new BehaviorSubject<boolean>(false);

  readonly userAddressControl = new FormControl();

  readonly tokenAddressControl = new FormControl();

  constructor(
    private web3Service: Web3Service
  ) {
  }

  getAllowance(): void {
    const ownerAddress = this.userAddressControl.value;
    const contractAddress = this.tokenAddressControl.value;
    const spenderAddress = '0x11111112542d85b3ef69ae05771c2dccff4faa26';

    this.web3Service.getAllowTokenAmount(ownerAddress, contractAddress, spenderAddress)
      .then((amount) => {
        this.allowanceAmount$.next(amount);
      })
      .catch(() => {
        this.error$.next(true);
      });
  }
}
