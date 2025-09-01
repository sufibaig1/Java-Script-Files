const arrow1 = (a = 56, b = 89) => {
  console.log("Hello, Arrow Function!");
  console.log(a + b);
//   return { message: "Hello, Arrow Function!", sum: a + b };
};

const result = arrow1();
// console.log(result); // Output: { message: 'Hello, Arrow Function!', sum: 145 }