export interface CurrencyListResp {
  Date: Date;
  PreviousDate: Date;
  PreviousURL: string;
  Timestamp: Date;
  Valute: CurrencyMap;
}

export type CurrencyMap = Record<string, Currency>;

export interface Currency {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}
