import { ICell } from "./cell/cell.component";

let found = false;
export async function findBunny(originalBunnyPos: number, arr: ICell[]) {
  console.log('originalBunnyPos', originalBunnyPos)
  let bunny = originalBunnyPos, i = 0, prevBunny = bunny;
  while (i<arr.length) {

    let nextDir = Math.random() < .5 ? 1 : -1;
    await new Promise(res => {
      setTimeout(() =>{
        res('');
        if (i>0) arr[i-1].isI = false;
        arr[prevBunny].isBunny = false
      }, 1000)
    })


    arr[i].isI = true;
    arr[bunny].isBunny = true
    console.log(`bunny is at ${bunny}`)
    if (i === bunny) {
      found = true;
      console.log(`found bunny at pos ${i}`);
      break
    }
    i++;
    prevBunny = bunny;
    if (bunny === 0) bunny++;
    else if (bunny >= arr.length-1) bunny--;
    else bunny += nextDir;
    if ( i >= arr.length) {
      arr[prevBunny].isBunny = false;
      arr[arr.length-1].isI = false
      break;
    }
  }


  if (found) return;
  console.log(`tough luck, starting at odd index`, originalBunnyPos);
  bunny = originalBunnyPos;
  prevBunny = bunny
  i = 1
  while (i<arr.length) {
    let nextDir = Math.random() < .5 ? 1 : -1;
    await new Promise((res) => {
      setTimeout(() => {
        res('');
        if (i > 0) arr[i-1].isI = false;
        arr[prevBunny].isBunny = false;
      }, 1000)
    })


    arr[i].isI = true;
    arr[bunny].isBunny = true;
    console.log(`bunny is at ${bunny}`)
    if (i === bunny) {
      found = true;
      console.log(`found bunny at pos ${i}`)
      break;
    }
    if ( i >= arr.length) break;
    i++;
    prevBunny = bunny;
    if (bunny === 0) bunny++;
    else if (bunny >= arr.length-1) bunny--;
    else bunny += nextDir;
  }
}
