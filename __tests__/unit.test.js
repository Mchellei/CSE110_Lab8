// unit.test.js

const {isPhoneNumber, isHexColor, isEmail, isDate, isStrongPassword} = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber(phoneNumber) unit tests
test('Valid phone number should return true', () => {
    expect(isPhoneNumber('(123)456-9888)')).toBe(true);
});
test('Valid phone number should return true', () => {
    expect(isPhoneNumber('456-9888)')).toBe(true);
});
test('Invalid phone number should return false', () => {
    expect(isPhoneNumber('888')).toBe(false);
});
test('Invalid phone number should return false', () => {
    expect(isPhoneNumber('898-989')).toBe(false);
});


// isEmail(email) unit tests
test('Valid email address should return true', () => {
    expect(isEmail('example@gmail.com')).toBe(true);
});
test('Valid email address should return true', () => {
    expect(isEmail('example@ucsd.edu')).toBe(true);
});
test('Invalid email address should return false', () => {
    expect(isEmail('888')).toBe(false);
});
test('Invalid email address should return false', () => {
    expect(isEmail('@')).toBe(false);
});

// isStrongPassword(password) unit tests 
test('Valid strong passwords should return true', () => {
    expect(isStrongPassword('g132112')).toBe(true);
});
test('Valid strong passwords should return true', () => {
    expect(isStrongPassword('B121adjjsh_')).toBe(true);
});
test('Invalid strong passwords should return fase', () => {
    expect(isStrongPassword('23212b')).toBe(false);
});
test('Invalid strong passwords should return fase', () => {
    expect(isStrongPassword('a923bhajdjj**(ajsdhahjkad')).toBe(false);
});

// isDate(date) unit tests 
test('Valid dates should return true', () => {
    expect(isDate('01/26/2003')).toBe(true);
});
test('Valid dates should return true', () => {
    expect(isDate('1/7/2003')).toBe(true);
});
test('Invalid dates should return false', () => {
    expect(isDate('01/26/03')).toBe(false);
});
test('Invalid dates should return false', () => {
    expect(isDate('001/26/2003')).toBe(false);
});

// isHexColor(color) unit tests 
test('Valid hex codes should return true', () => {
    expect(isHexColor('#ebde34')).toBe(true);
});
test('Valid hex codes should return true', () => {
    expect(isHexColor('#fff')).toBe(true);
});
test('Invalid hex codes should return false', () => {
    expect(isHexColor('#F')).toBe(false);
});
test('Invalid hex codes should return false', () => {
    expect(isHexColor('FFFFFFFFF')).toBe(false);
});


