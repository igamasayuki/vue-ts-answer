export class Employee {
    constructor(_id, _name, _hireDate, _salary, _dependentsCount) {
        this._id = _id;
        this._name = _name;
        this._hireDate = _hireDate;
        this._salary = _salary;
        this._dependentsCount = _dependentsCount;
    }
    // private _id!: number;
    // private _name!: string;
    // private _hireDate!: string;
    // private _salary!: number;
    // private _dependentsCount!: number;
    // constructor(
    //   id: number,
    //   name: string,
    //   hireDate: string,
    //   salary: number,
    //   dependentsCount: number
    // ) {
    //   this._id = id;
    //   this._name = name;
    //   this._hireDate = hireDate;
    //   this._salary = salary;
    //   this._dependentsCount = dependentsCount;
    // }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get hireDate() {
        return this._hireDate;
    }
    set hireDate(hireDate) {
        this._hireDate = hireDate;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get dependentsCount() {
        return this._dependentsCount;
    }
    set dependentsCount(dependentsCount) {
        this._dependentsCount = dependentsCount;
    }
}
//# sourceMappingURL=employee.js.map