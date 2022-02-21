const Intern = require('../lib/Intern');

describe('Intern Class', () =>{
    describe('Initialization', () => {
        it('Creates an object with intern data', () =>{
            const intern = new Intern("SampleName", 1, "sampleemail");
            expect(typeof(intern)).toBe("object");
        });
        
        it('Accepts a name', () =>{
            const intern = new Intern("SampleName");
            expect(intern.name).toBe("SampleName");
        });

        test ("Getting office with getSchool()", () => {
            const intern = new Intern('SampleName', 12, 'sampleEmail', 'sampleSchool');
            expect(intern.getSchool()).toBe('sampleSchool');
        });
    });
});