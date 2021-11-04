import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-second-demo',
  templateUrl: './second-demo.component.html',
  styleUrls: ['./second-demo.component.scss']
})
export class SecondDemoComponent {
  readonly tokenAddressControl = new FormControl();

  isWalletConnected = false;

  connectWallet(): void {
    this.isWalletConnected = true;
  }

  disconnectWallet(): void {
    this.isWalletConnected = false;
  }

  getAllowance(): void {
    //
  }

  setAllowance(): void {
    //
  }
}
