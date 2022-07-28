import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyListComponent } from './components/currency-list/currency-list.component';
import {CURRENCIES_API_URL_TOKEN} from "./injections";
import {CBR_API_URL} from "./constants";
import {HttpClientModule} from "@angular/common/http";
import { CurrencyItemComponent } from './components/currency-item/currency-item.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent,
    CurrencyItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: CURRENCIES_API_URL_TOKEN,
      useValue: CBR_API_URL,
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'RUB'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
