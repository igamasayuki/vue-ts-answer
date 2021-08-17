export class Book {
    constructor(_isbn, _title, _price) {
        this._isbn = _isbn;
        this._title = _title;
        this._price = _price;
    }
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
//# sourceMappingURL=book.js.map