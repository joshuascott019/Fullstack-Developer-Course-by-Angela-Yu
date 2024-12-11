import generateName from 'sillyname';
import { randomSuperhero } from 'superheroes';

let sillyName = generateName();
console.log(`Hello, I'm ${sillyName}. Are you a superhero?`);

console.log(`Hello, yes, I'm ${randomSuperhero()}!`);
