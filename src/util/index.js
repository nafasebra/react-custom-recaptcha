const characters = "abcdefghijklmnopqrstuvwxyz1234567890";
export function generateString(length = 0) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  result = result.split("").join("   ");
  return result;
}
