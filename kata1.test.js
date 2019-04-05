describe("Adds two numbers together and returns their sum in binary", function(){
  it("sum 2 numbers", function(){
    expect(sumNumbers(1,2)).toBe(3);
  });
  it("change to binary", function(){
    expect(numToBin(4)).toBe("100");
  });
  it("both v1", function(){
    expect(numToBin(sumNumbers(1,3))).toBe("100");
  });
  it("both v2", function(){
    expect(both(1,3)).toBe("100");
  });
});

function sumNumbers(n1,n2) {
  return n1 + n2;
}

function numToBin(n) {
  return (n).toString(2);
}

function both(n1, n2) {
  return (n1 + n2).toString(2);
}
