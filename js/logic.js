export default function healthCompare(characters) {
  characters.sort((a, b) => b.health - a.health);
  return characters;
}

