import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Currency} from "../../types";

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyItemComponent implements OnInit {

  @Input()
  value?: number;

  @Input()
  currency?: Currency;

  constructor() { }

  ngOnInit(): void {
  }

}
