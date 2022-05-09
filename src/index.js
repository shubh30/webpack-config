const fullName = {
  firstName: "Shubham",
  lastName: "Nagpal"
}

const introduction = {
  ...fullName,
  age: 25
}

console.log(introduction)
console.log(fullName)