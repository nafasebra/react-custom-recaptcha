const characters = 'abc123';
export function generateString(length = 0) {
   let result = ''
   const charactersLength = characters.length;
   for(let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}