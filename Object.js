const obj={
    name:"Lenovo",
    age: 20,        
    mail:"sufibaig610@gmail.com",
    isActive: true,
    phone: 1234567890,
  Sim:["jazz","zong","ufone"],  
};

// console.log(obj.name);
// console.log(obj.age);
// Object.freeze(obj); // This prevents any changes to the object properties.
// obj.mail="sufibaig@google.com";
const new_obj=Object.create(obj);
console.log(new_obj);
const new_obj1=Object.seal(obj);
