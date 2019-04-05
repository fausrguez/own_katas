describe("Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.", () => {
  it("Green Test", () => {
    expect(true).toBe(true);
  });
  it("string to array", () => {
    expect(strToArray("Hola Adios")).toEqual(["Hola", "Adios"]);
  });
  it("Return an array", () => {
    expect(array("Hola Adios")).toEqual(["Hola", "soidA"]);
  });
  it("final", () => {
    expect(final("Hola Adios")).toEqual("Hola soidA");
  });
});

function strToArray(str) {
  return str.split(" ");
}

function array(str) {
  let arr = str.split(" ");
  return arr.map(word => {
    if (word.length >= 5) {
      word = word.split("").reverse().join("");
    }
    return word;
  });
}

function final(str) {
  let arr = str.split(" ");
  return arr.map(word => {
    if (word.length >= 5) {
      word = word.split("").reverse().join("");
    }
    return word;
  }).join(" ");
}