const Manager = require('../lib/Manager');

describe('Manager Class', () =>{
    describe('Initialization', () => {
        it('Creates an object with manager data', () =>{
            const manager = new Manager("SampleName", 1, "sampleemail");
            expect(typeof(manager)).toBe("object");
        });
        
        it('Accepts a name', () =>{
            const manager = new Manager("SampleName");
            expect(manager.name).toBe("SampleName");
        });

        test ("Getting office with getGetOffice()", () => {
            const manager = new Manager('SampleName', 12, 'sampleEmail', 'sampleOffice');
            expect(manager.getOffice()).toBe('sampleOffice');
        });
    });
});