import { Routes } from '@angular/router';
import { FirstDemoComponent } from './first-demo/first-demo.component';
import { SecondDemoComponent } from './second-demo/second-demo.component';

export const routes: Routes = [
  {
    path: 'first-demo',
    component: FirstDemoComponent,
  },
  {
    path: 'second-demo',
    component: SecondDemoComponent,
  }
]
