const Employee = require('../lib/Employee')

describe('Employee Class', () =>{
    describe('Initialization', () => {
        it('Creates an object with employee data', () =>{
            const employee = new Employee("SampleName", 1, "sampleemail");
            expect(typeof(employee)).toBe("object");
        });
        
        it('Accepts a name', () =>{
            const employee = new Employee("SampleName");
            expect(employee.name).toBe("SampleName");
        });

        test ("Getting a name with getName()", () => {
            const value = 'SampleName';
            const employee = new Employee(value);
            expect(employee.getName()).toBe(value);
        });
    });
});