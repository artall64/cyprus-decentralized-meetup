import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FirstDemoComponent } from './first-demo/first-demo.component';
import { SecondDemoComponent } from './second-demo/second-demo.component';
import { Web3Service } from './services/web3.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FirstDemoComponent, SecondDemoComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [FirstDemoComponent, SecondDemoComponent],
  providers: [
    Web3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
