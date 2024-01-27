//io (input/output)

const pGetNumbers = () => {
  return new Promise((resolve, reject) => {
    let size = 10;
    let numbers = [];

    setTimeout(() => {
      while (numbers.length < size) {
        numbers.push(Math.ceil(-5 + Math.random() * 10));
      }
      resolve(numbers);
    }, Math.random() * 1000);
  });
};

//process
const pmaxNumber = (numbers) => {
  return new Promise((resolve, reject) => {
    let maxNumber = numbers[0];

    setTimeout(() => {
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
          maxNumber = numbers[i];
        }
      }
      resolve(maxNumber);
    }, Math.random() * 1000);
  });
};

//render
const renderNumber = (number) => {
  return new Promise((resolve, reject) => {
    let result = ``;
    setTimeout(() => {
      result = `{number: ${number}}`;
      resolve(result);
    }, Math.random() * 1000);
  });
};

/////////////////////

//declarative coding
function execute(){
pGetNumbers(5)
  .then((numbers) => {
    console.log(numbers)
    return pmaxNumber(numbers);
  })
  .then((result) => {
console.log(max_number)
    return renderNumber(result)
  })
  .then( (result) =>{
    console.log(result)
  } )
}
