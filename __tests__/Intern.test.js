const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('User', 90, 'user.email@gmail.com', 'FSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('User', 90, 'user.email@gmail.com', 'FSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('User', 90, 'user.email@gmail.com', 'FSU');

    expect(intern.getRole()).toEqual("Intern");
}); 