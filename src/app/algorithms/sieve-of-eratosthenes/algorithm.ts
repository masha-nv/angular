import { INumberItem } from "./sieve-of-eratosthenes.component";

export async function sieveOfEratosthenes(array: INumberItem[]) {
  const length = array.length-1;

  // loop through numbers starting from first prime number which is 2 and till sqrt of num
  for (let i = 2; i<=Math.sqrt(length); i++) {
    // if array[i] is already marked as non prime (ie false), then all its multiples are also already marked
    // so continue to next i
    if (array[i].isPrime === false) continue;
    array[i].isCurrElement = true;
    await setBackgroundColor(array, i);

    // else start from its multple and increment by i
    for (let j = i*i; j<=length; j+=i) {
      if (array[j].isPrime === false) continue;
      await setBackgroundColor(array, j, array[i].backgroundColor)
      array[j].backgroundColor = array[i].backgroundColor;
      array[j].isPrime = false;
    }
  }
  await markPrimes(array)
}

function randomColor() {
  return '#'+Math.floor(Math.random()*256*256*256).toString(16)
}

async function setBackgroundColor(array: INumberItem[], idx: number, color: string = '') {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, 100)
  }).then(() => {
    if(!color) array[idx].backgroundColor = randomColor();
    else array[idx].backgroundColor = color
  })
}

async function markPrimes(array: INumberItem[]) {
  const primeColor = randomColor();
  for (let i = 2; i<array.length; i++) {
    if (array[i].isPrime) {
      await setBackgroundColor(array, i, primeColor)
    }
  }
}
