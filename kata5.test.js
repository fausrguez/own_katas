describe("In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?", () => {
  it("Final", () => {
    expect(nbYear(1000, 2, 50, 1200)).toBe(3);
    expect(nbYear(1500, 5, 100, 5000)).toBe(15);
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
    expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
  });
});

function nbYear(p0, percent, aug, p) {
  let loop = 0;
  while (p0 < p) {
    loop++;
    p0 = p0 + (p0 * percent / 100) + aug;
  }
  return loop;
}