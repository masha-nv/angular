import { ElementRef } from "@angular/core";

export function getDynamicSentence(sentence: string, el: ElementRef, speed: number) {
    return new Promise((resolve) => {
        let i = 0;
        const intervalId = setInterval(() => {
            el.nativeElement.innerHTML += sentence[i++];
            if (i>=sentence.length) {
                clearInterval(intervalId);
                resolve(true)
            }
        }, speed)
    })
}