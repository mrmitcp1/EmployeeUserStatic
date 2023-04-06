import {Employee} from "./employee";

export class EmployeeManager {
    static employeeList : Employee[]=[]
    constructor() {
    }
    findId(id:number){
        return EmployeeManager.employeeList.find((employee)=>employee.id===id)
    }
    static add(employee:Employee){
        this.employeeList.push(employee)
    }
    static delete(id:number){
        this.employeeList=this.employeeList.filter((employee)=>employee.id!==id)
    }
    upDate(ID:number,newName:string){
        let employee = this.findId(ID);
        if (employee){
            employee.fullName = newName
        }
    }
     static getList():Employee[]{
        return this.employeeList
    }
}