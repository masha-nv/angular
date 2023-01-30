export async function findSubsequences(arr: number[], curr: number[]) {
    const set = new Set<string>();

    async function helper(idx: number, curr: number[]) {
        if (curr.length >= 2) {
            set.add(curr.slice().join('#'));
        }

        for (let i = idx; i<arr.length; i++) {
            if (!curr.length || arr[i] >= curr[curr.length-1]) {
                curr.push(arr[i]);
                await new Promise(resolve => {
                    setTimeout(() => resolve(true), 100)
                })
                await helper(i+1, curr);
                curr.pop();
            }
        }
    }

    await helper(0, curr)

    return  [...set].map(el => el.split("#"));
}