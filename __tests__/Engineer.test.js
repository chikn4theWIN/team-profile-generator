const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('User', 90, 'user.email@gmail.com', 'username');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('User', 90, 'user.email@gmail.com', 'username');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('User', 90, 'user.email@gmail.com', 'username');

    expect(engineer.getRole()).toEqual("Engineer");
});