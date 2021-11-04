import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Web3Service } from '../services/web3.service';

@Component({
  selector: 'app-first-demo',
  templateUrl: './first-demo.component.html',
})
export class FirstDemoComponent {
  readonly userAddressControl = new FormControl();

  readonly tokenAddressControl = new FormControl();

  constructor(
    private web3Service: Web3Service
  ) {
    this.web3Service.init();
  }

  getAllowance(): void {
    console.log(this.userAddressControl.value, this.tokenAddressControl.value);
  }
}
