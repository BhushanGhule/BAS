using EMPService as service from '../../srv/EmpService';


annotate EMPService.EmployeeSet with @(

UI : {

    HeaderInfo : {
        $Type          : 'UI.HeaderInfoType',
        TypeName       : 'Employee',
        TypeNamePlural : 'Employees',


        Description    : {
            $Type : 'UI.DataField',
            Value : FirstName,
        },


    },

    LineItem   : [

        {
            $Type : 'UI.DataField',
            Value : FirstName,
        },
        {
            $Type : 'UI.DataField',
            Value : LastName,
        },
        {
            $Type : 'UI.DataField',
            Value : Id,
        },
        {
            $Type : 'UI.DataField',
            Value : DOB,
        },
    ],

}

);
