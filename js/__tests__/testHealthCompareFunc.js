import healthCompare from "../logic";
let expected;

test("should compare characters' health from high to low", () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const received = healthCompare(input, true);
  for (let i = 0; i < input.length; i++) {
    if (input[0].health > input[1].health && input[0].health > input[2].health) {
      expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },        
      ];
    }
  }

  expect(received).toEqual(expected);
});
