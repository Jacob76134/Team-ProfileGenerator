const Engineer = require('../lib/Engineer');

describe('Engineer Class', () =>{
    describe('Initialization', () => {
        it('Creates an object with engineer data', () =>{
            const engineer = new Engineer("SampleName", 1, "sampleemail");
            expect(typeof(engineer)).toBe("object");
        });
        
        it('Accepts a name', () =>{
            const engineer = new Engineer("SampleName");
            expect(engineer.name).toBe("SampleName");
        });

        test ("Getting github with getGitName()", () => {
            const engineer = new Engineer('SampleName', 12, 'sampleEmail', 'sampleGit');
            expect(engineer.getGitName()).toBe('sampleGit');
        });
    });
});