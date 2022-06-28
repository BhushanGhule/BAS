namespace Employees.db;
using { managed  } from '@sap/cds/common';


entity employee_list : managed
{
    Id : Integer;
    FirstName : String(50);
    LastName : String(50);
    DOB : Date;
    Gender : Boolean;
    Salary : Decimal(10,2);
}
