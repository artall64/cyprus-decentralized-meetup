import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-first-demo',
  templateUrl: './first-demo.component.html',
  styleUrls: ['./first-demo.component.scss']
})
export class FirstDemoComponent {
  readonly userAddressControl = new FormControl();

  readonly tokenAddressControl = new FormControl();

  getAllowance(): void {
    console.log(this.userAddressControl.value, this.tokenAddressControl.value);
  }
}
