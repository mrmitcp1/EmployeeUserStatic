import {Employee} from "./employee";
import {EmployeeManager} from "./employeeManager";

let employee1=new Employee('A',new Date('1992-03-12'),'ha noi','giam doc',1)
let employee2=new Employee('B',new Date('1982-11-03'),'quang ninh','nhan vien',2)
let employee3=new Employee('C',new Date('2000-04-21'),'quang ninh','nhan vien',3)
let employee4=new Employee('D',new Date('1999-10-24'),'quang ninh','nhan vien',4)
let employeeList = new EmployeeManager()
EmployeeManager.add(employee1)
EmployeeManager.add(employee2)
EmployeeManager.add(employee3)
EmployeeManager.add(employee4)

employeeList.upDate(2,'hoang van thu')
EmployeeManager.delete(3)
console.table(EmployeeManager.getList())