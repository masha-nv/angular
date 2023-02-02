export interface arrElement {
    val: number,
    isActive: boolean,
    isPrevious: boolean
}

export async function findSubsequences(arr: arrElement[], curr: arrElement[], set: Set<string>) {
    async function helper(idx: number, curr: arrElement[]) {
        if (curr.length >= 2) {
            set.add(curr.slice().map(el => el.val).join('#'));
        }

        for (let i = idx; i<arr.length; i++) {
            if (!curr.length || arr[i].val >= curr[curr.length-1].val) {
                arr[i].isActive = true;
                if(curr.at(-1)) curr[curr.length-1].isPrevious = true;
                await new Promise(resolve => {
                    setTimeout(() => {
                        curr.push(arr[i]);
                        arr[i].isActive = false;
                        if(curr.at(-2)) curr[curr.length-2].isPrevious = false
                        resolve(true);
                    }, 90);

                })

                await helper(i+1, curr);

                curr.pop();
            }
        }
    }

    await helper(0, curr)

    return  [...set].map(el => el.split("#"));
}