
describe("Basic FizzBuzz", function() {
  it("3 should be Fizz", function() {
    expect(fizzBuzz.getNumber(3)).toBe('Fizz');
  });
  it("5 should be Buzz", function() {
    expect(fizzBuzz.getNumber(5)).toBe('Buzz');
  });
  it("15 should be FizzBuzz", function() {
    expect(fizzBuzz.getNumber(15)).toBe('FizzBuzz');
  });
  it("1 should be 1", function() {
    expect(fizzBuzz.getNumber(1)).toBe('1');
  });
  it("0 should be FizzBuzz", function() {
    expect(fizzBuzz.getNumber(0)).toBe('FizzBuzz');
  });
});

describe("Additional Tasks : accept numbers as a string", function() {
  it("'3' should be Fizz", function() {
    expect(fizzBuzz.getNumber('3')).toBe('Fizz');
  });
  it("'5' should be Buzz", function() {
    expect(fizzBuzz.getNumber('5')).toBe('Buzz');
  });
  it("'15' should be FizzBuzz", function() {
    expect(fizzBuzz.getNumber('15')).toBe('FizzBuzz');
  });
  it("'1' should be 1", function() {
    expect(fizzBuzz.getNumber('1')).toBe('1');
  });
  it("'0' should be 0", function() {
    expect(fizzBuzz.getNumber('0')).toBe('FizzBuzz');
  });
});

describe("Additional Tasks : accept a list of comma separated numbers", function() {
  it("3,4,5 should be 'Fizz4Buzz'", function() {
    expect(fizzBuzz.getNumber('3,4,5')).toBe('Fizz4Buzz');
  });
  it("15,8,0 should be 'FizzBuzz8FizzBuzz'", function() {
    expect(fizzBuzz.getNumber('15,8,0')).toBe('FizzBuzz8FizzBuzz');
  });
  it("0,Fizz,Buzz should be 'FizzBuzzFizzBuzz'", function() {
    expect(fizzBuzz.getNumber('0,Fizz,Buzz')).toBe('FizzBuzzFizzBuzz');
  });
});

describe("Additional Tasks : accept numbers, 'Fizz' and 'Buzz' as inputs", function() {
  it("Fizz should be Fizz", function() {
    expect(fizzBuzz.getNumber('Fizz')).toBe('Fizz');
  });
  it("Buzz should be Buzz", function() {
    expect(fizzBuzz.getNumber('Buzz')).toBe('Buzz');
  });
});
