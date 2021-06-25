export class Book {
  constructor(
    private _isbn: string,
    private _title: string,
    private _price: number
  ) {}

  public get isbn(): string {
    return this._isbn;
  }

  public set isbn(isbn: string) {
    this._isbn = isbn;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get price(): number {
    return this._price;
  }

  public set price(price: number) {
    this._price = price;
  }
}
