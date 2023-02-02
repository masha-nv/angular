import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class MockService {
    constructor(){}

    getCountAndSay() {
        return `<p>For example, the saying and conversion for digit string <code>"3322251"</code>:</p>
        <img alt="" src="https://assets.leetcode.com/uploads/2020/10/23/countandsay.jpg" style="width: 581px; height: 172px;">
        <p>Given a positive integer <code>n</code>, return <em>the </em><code>n<sup>th</sup></code><em> term of the <strong>count-and-say</strong> sequence</em>.</p>`
    }

    
}