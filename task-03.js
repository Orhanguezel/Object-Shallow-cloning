const person = {
  firstName: "James",
  lastName: "Ensor",
  age: 13,
};

const addFullName = (person) => {
  const newPerson = { ...person };
  newPerson.fullName = `${person.firstName} ${person.lastName}`;
  return newPerson;
 
};

console.log(addFullName(person));
console.log(person);
