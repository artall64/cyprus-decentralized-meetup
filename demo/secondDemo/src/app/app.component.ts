import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly tokenAddressControl = new FormControl('0xe9e7cea3dedca5984780bafc599bd69add087d56');

  readonly walletAddress$ = new BehaviorSubject<string>('');

  readonly allowanceAmount$ = new BehaviorSubject<string>('');


  connectWallet(): void {
    this.walletAddress$.next('0x1AA1');
  }

  disconnectWallet(): void {
    this.walletAddress$.next('');
  }

  getAllowance(): void {
    this.allowanceAmount$.next('123');
  }

  setAllowance(): void {
    //
  }
}
