using { Employees.db as  Employees } from '../db/Employee.cds';

@path: 'sap/opu/odata/sap/employees'
service EMPService {

 entity EmployeeSet as projection on Employees.employee_list;

}
