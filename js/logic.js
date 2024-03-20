const characters = [a, b, c ];
let result;
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

export default function healthCompare (characters) {
  characters.forEach((character) => {
    return character.health.sort(compareNumeric); 
  })
}

