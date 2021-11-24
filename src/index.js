import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// // `

// function func1(str){
//   return str;
// }

const func1 = function (str) {
  return str;
};

console.log(func1("fun1です！!!"));

const func2 = (str) => {
  return str;
};

console.log(func2("おはよう"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 20));
