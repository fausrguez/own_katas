describe("In DNA strings, symbols 'A' and 'T' are complements of each other, as 'C' and 'G'. You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).", () => {
  it("test", () => {
    expect(getComplementary("A")).toBe("T");
    expect(getComplementary("T")).toBe("A");
    expect(getComplementary("C")).toBe("G");
    expect(getComplementary("G")).toBe("C");
  });
  it("label array", () => {
    expect(getComplementary2("A")).toBe("T");
    expect(getComplementary2("T")).toBe("A");
    expect(getComplementary2("C")).toBe("G");
    expect(getComplementary2("G")).toBe("C");
  });
});

function getComplementary(dna) {
  return dna.split("").map(char => {
    switch(char) {
      case "A": return "T";
      case "T": return "A";
      case "C": return "G";
      case "G": return "C";
    }
  }).join('');
}

function getComplementary2(dna) {
  let pairs = {A:'T',T:'A',C:'G',G:'C'};
  return dna.replace(/./g, c => pairs[c]);
}