 export class Employee {

    private _fullName : string;
    private _birthday: Date;
    private _address: string;
    private _position:string
    private _id : number

    constructor(fullName: string, birthday: Date, address: string, position: string, id: number) {
        this._fullName = fullName;
        this._birthday = birthday;
        this._address = address;
        this._position = position;
        this._id =id
    }

    get fullName(): string {
        return this._fullName;
    }

    get birthday(): Date {
        return this._birthday;
    }

    get address(): string {
        return this._address;
    }

    get position(): string {
        return this._position;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    set birthday(value: Date) {
        this._birthday = value;
    }

    set address(value: string) {
        this._address = value;
    }

    set position(value: string) {
        this._position = value;
    }
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}