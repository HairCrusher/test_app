import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Currency, CurrencyListResp} from "../types";
import {CURRENCIES_API_URL_TOKEN} from "../injections";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private http: HttpClient,
    @Inject(CURRENCIES_API_URL_TOKEN) private apiUrl: string,
  ) { }

  getList(): Observable<Currency[]> {
    return this.http.get<CurrencyListResp>(this.apiUrl).pipe(
      map(x => Object.values(x.Valute))
    );
  }

}
