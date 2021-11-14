export class Author {
  constructor(private _name: string, private _company: string) {}

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get company(): string {
    return this._company;
  }

  public set company(company: string) {
    this._company = company;
  }
}
