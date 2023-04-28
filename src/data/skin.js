export const dataSkin = [
  { value: [0.8, 0, 0, 0] },
  { value: [0, 0.8, 0, 0.8] },
  { value: [0.8, 0, 0, 0] },
  { value: [0.8, 0, 0, 0] },
  { value: [0, 0.7, 0.7, 0.7] },
  { value: [0, 0.8, 0, 0] },
  { value: [0, 0.75, 0, 0] },
  { value: [0, 0.65, 0, 0] },
  { value: [0, 0, 0.7, 0.7] },
  { value: [0, 0, 0.6, 0.75] },
  { value: [0, 0, 0, 0.75] },
  { value: [0, 0, 0.4, 0] },
  { value: [0, 0, 0.7, 0] },
  { value: [0, 0.8, 0, 0] },
  { value: [0.8, 0, 0, 0] },
  { value: [0.75, 0, 0, 0] },
  { value: [0.75, 0, 0, 0] },
  { value: [0.7, 0, 0, 0] },
];

// const userInput = [
//   1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
// ];
// const userInput = [
//   0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1,
// ];
const userInput = [
  1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

let cfNormalArray = [];
let cfSensitifArray = [];
let cfBekasJerawatArray = [];
let cfDewasaArray = [];
export const getCF = (userArray) => {
  dataSkin.map((e, i) => {
    cfNormalArray.push(e.value[(i, 0)] * userArray[i]);
    cfSensitifArray.push(e.value[(i, 1)] * userArray[i]);
    cfBekasJerawatArray.push(e.value[(i, 2)] * userArray[i]);
    cfDewasaArray.push(e.value[(i, 3)] * userArray[i]);
  });
};
// getCF(userInput);
let finalCFNormal;
let finalSensitif;
let finalDewasa;
let finalBekasJerawat;
export const countCF = (data, n) => {
  let CFold = data[0] + data[1] * (1 - data[0]);

  combineCF(CFold, data, n);
};
let i = 2;

const combineCF = (old, next, n) => {
  let newOldCF = old + next[i] * (1 - old);
  i++;

  if (i != 5) {
    combineCF(newOldCF, next, n);
  }
  if (i == 5) {
    i = 2;

    if (n === 1) {
      // return (finalCFNormal = newOldCF);
      return newOldCF;
    }
    if (n === 2) {
      return (finalSensitif = newOldCF);
    }
    if (n === 3) {
      return (finalBekasJerawat = newOldCF);
    }
    if (n === 4) {
      return (finalDewasa = newOldCF);
    }
  }
};
// countCF(cfNormalArray, 1);
// countCF(cfSensitifArray, 2);
// countCF(cfBekasJerawatArray, 3);
// countCF(cfDewasaArray, 4);

// console.log('Normal: ', finalCFNormal);
// console.log('Sensitif: ', finalSensitif);
// console.log('Jerawat: ', finalBekasJerawat);
// console.log('Dewasa', finalDewasa);
