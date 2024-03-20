import healthIndicator from "../logic";
let expected;


test('should indicate color for good health', () => {
  const input = {name: 'Маг', health: 60};
  const received = healthIndicator(input,true);
  if(input.health > 50) {
    expected = 'healthy';
  };
  expect(received).toBe(expected);
});

test('should indicate color for medium health', () => {
  const input = {name: 'Маг', health: 20};
  const received = healthIndicator(input,true);
  if (input.health > 15 && input.health < 50) {
    expected = 'wounded';
  };
  expect(received).toBe(expected)
});

test('should indicate color for low health', () => {
  const input = {name: 'Маг', health: 5};
  const received = healthIndicator(input,true);
  if (input.health < 15) {
    expected = 'critical';
  };
  expect(received).toBe(expected)
});