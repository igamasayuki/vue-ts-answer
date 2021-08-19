export class Employee {
  constructor(
    private _id: number,
    private _name: string,
    private _hireDate: string,
    private _salary: number,
    private _dependentsCount: number
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get hireDate(): string {
    return this._hireDate;
  }

  public set hireDate(hireDate: string) {
    this._hireDate = hireDate;
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(salary: number) {
    this._salary = salary;
  }

  public get dependentsCount(): number {
    return this._dependentsCount;
  }

  public set dependentsCount(dependentsCount: number) {
    this._dependentsCount = dependentsCount;
  }
}
