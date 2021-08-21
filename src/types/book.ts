export class Book {
  constructor(
    private _isbn: string,
    private _title: string,
    private _price: number
  ) {}
  get isbn() {
    return this._isbn;
  }
  set isbn(isbn) {
    this._isbn = isbn;
  }
  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
}
