const customers = [
  {firstName: "Michael",
    lastName: "Storen",
    age: 32,
    height: 171 + `cm`,
    sex: "M"
  },

  {firstName: "Sarah",
    lastName: "Mckenzie",
    age: 24,
    height: 122 + `cm`,
    sex: "F"
  },

  {firstName: "Thomas",
    lastName: "Brady",
    age: 35,
    height: 160 + "cm",
    sex: "M"
  }
] ; 
console.log (...customers) ; 

 function addAge (arr) {
  return arr.map (cust =>  ({
    ...cust,
    fullName: `${cust.firstName} ${cust.lastName}`
  }))
} ; 

console.log (addAge(customers)) ;
