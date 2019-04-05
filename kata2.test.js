describe("Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit", () => {
  it("To Array", () => {
    expect(toArray(11)).toEqual([1, 1]);
    expect(toArray(1111)).toEqual([1, 1, 1, 1]);
  });
  it("Array Iteration", () => {
    expect(iterate(22)).toBe(4);
    expect(iterate(25)).toBe(10);
  });
  it("Array Iteration V2", () => {
    expect(iterate2(5)).toBe(0);
    expect(iterate2(25)).toBe(10);
    expect(iterate2(222)).toBe(8);
  });
  it("Array Iteration V3", () => {
    expect(iterate3(5)).toBe(0);
    expect(iterate3(35)).toBe(5);
    expect(iterate3(222)).toBe(8);
  });
  it("Count loop", () => {
    expect(countLoop(39)).toBe(3);
    expect(countLoop(999)).toBe(4);
    expect(countLoop(4)).toBe(0);
  });
  it("Final", () => {
    expect(persistence(39)).toBe(3);
    expect(persistence(999)).toBe(4);
    expect(persistence(4)).toBe(0);
  });
});

function toArray(n) {
  return Array.from(("" + n).split(""), val => Number(val));
}

function iterate(n) {
  let arr = toArray(n);
  let count = 1;
  arr.forEach(n => {
    count *= n;
  });
  return count;
}

function iterate2(n) {
  let arr = toArray(n);
  let count = arr.length === 1 ? 0 : 1;
  arr.forEach(n => {
    count *= n;
  });
  return count;
}

function iterate3(n) {
  let arr = toArray(n);
  let count = arr.length === 1 ? 0 : 1;
  arr.forEach(n => {
    count *= n;
  });
  while (toArray(count).length != 1) {
    let arr = toArray(count);
    count = 1;
    arr.forEach(n => {
      count *= n;
    });
  }
  return count;
}

function countLoop(n) {
  let arr = toArray(n);
  let count = arr.length === 1 ? 0 : 1;
  let loop = arr.length === 1 ? 0 : 1;
  arr.forEach(n => {
    count *= n;
  });
  while (toArray(count).length != 1) {
    loop++;
    let arr = toArray(count);
    count = 1;
    arr.forEach(n => {
      count *= n;
    });
  }
  return loop;
}

function persistence(n) {
  let arr, res, loop;
  arr = toArray(n);
  loop = arr.length === 1 ? 0 : 1;
  res = loop; // 0 or 1
  res = res === 1 ? arr.reduce((total, num) => total * num * res): 0; // result multiply each number * res
  while (toArray(res).length != 1) {
    loop++;
    res = toArray(res).reduce((total, num) => total * num);
  }
  return loop;
}