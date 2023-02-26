import { ICell } from "./cell/cell.component";

let found = false;
export async function findBunny(originalBunnyPos: number, arr: ICell[]) {
  let bunny = originalBunnyPos, i = 0;
  while (i<arr.length) {
    let nextDir = Math.random() < .5 ? 1 : -1;
    await new Promise(res => {
      setTimeout(() =>{
        res('');
        if (i>0) arr[i-1].isI = false;
        arr[bunny].isBunny = false
      }, 1000)
    })
    bunny += nextDir;
    if (bunny < 0) bunny++;
    if (bunny >= arr.length) bunny--;
    arr[i].isI = true;
    arr[bunny].isBunny = true
    console.log(`bunny is at ${bunny}`)
    if (i === bunny) {
      found = true;
      console.log(`found bunny at pos ${i}`);
      break
    }
    i++;
    if ( i >= arr.length) {
      arr[bunny].isBunny = false;
      arr[arr.length-1].isI = false
      break;}
  }


  if (found) return;
  console.log(`tough luck, starting at odd index`);
  bunny = originalBunnyPos;
  i = 1
  while (i<arr.length) {
    let nextDir = Math.random() < .5 ? 1 : -1;
    await new Promise((res) => {
      setTimeout(() => {
        res('');
        if (i > 0) arr[i-1].isI = false;
        arr[bunny].isBunny = false;
      }, 1000)
    })
    bunny += nextDir;
    if (bunny < 0) bunny++;
    if (bunny >= arr.length) bunny--;
    arr[i].isI = true;
    arr[bunny].isBunny = true
    console.log(`bunny is at ${bunny}`)
    if (i === bunny) {
      found = true;
      console.log(`found bunny at pos ${i}`)
      break;
    }
    if ( i >= arr.length) break;
    i++;
  }
}
