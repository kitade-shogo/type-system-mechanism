import { parseRec } from "npm:tiny-ts-parser";

console.log(parseRec(`
  type X = { foo: X };

  (arg: X) => 1;
`));
