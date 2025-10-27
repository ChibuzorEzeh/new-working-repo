// write a function that takes an array of strings and converts their length property to numbers, returning the same array ;

const isPalindrome = (str) => { 
  return str.split(``).join(``) === str.split(``).reverse().join(``);
} ;

console.log (isPalindrome(`racecar`)) ;
console.log (`bean`.split(``).reverse()) ;

const numberRep = (arr) => {
  return arr.map((index) => {
    return index.charCodeAt();
  });
};

console.log(numberRep([`r`, `a`])); 

console.log () ;
console.log (`welldone`) ;