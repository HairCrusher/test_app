import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {interval, Observable, startWith, Subject, switchMap, tap} from "rxjs";
import {Currency} from "../../types";

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyListComponent implements OnInit, OnDestroy {

  loading = false;

  updateListEmitter$ = new Subject<void>();

  currencyList$: Observable<Currency[]> = this.updateListEmitter$.pipe(
    startWith([]),
    tap(() => {this.loading = true}),
    switchMap(() => this.currencyService.getList()),
    tap(() => {this.loading = false}),
  );

  // 10 seconds
  intervalSub = interval(10 * 1000).pipe(
    tap(() => this.updateListEmitter$.next()),
  ).subscribe();

  value = 100;


  constructor(
    private currencyService: CurrencyService,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

}
