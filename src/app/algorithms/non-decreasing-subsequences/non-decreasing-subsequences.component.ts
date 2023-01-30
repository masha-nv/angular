import { ChangeDetectorRef, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { getDynamicSentence } from '../../utility'
import { findSubsequences } from "./algorithm";

@Component({
    selector: 'non-decreasing-subsequences',
    templateUrl: './non-decreasing-subsequences.component.html',
    styleUrls: ['./non-decreasing-subsequences.component.scss']
})

export class NonDecreasingSubsequencesComponent implements OnInit{
    proplemStatement = `Given an integer array nums, return all the different possible non-decreasing subsequences of 
    the given array with at least two elements. You may return the answer in any order.`;

    arr!: number[];
    current: number[] = [];
    sequences: string[][] = []


    @ViewChild('container', {static: true}) container!: ElementRef;
    constructor(){
        
    }
    ngOnInit(): void {
        this.setProplemStatement();

    }


    setProplemStatement() {
        getDynamicSentence(this.proplemStatement,this.container, 6).then(()=>{
            this.arr = [4,6,7,7];
            this.runAlgo()
        });
        
    }

    async runAlgo() {
        this.sequences = await findSubsequences(this.arr, this.current);
        await console.log('seq', this.sequences)
    }
}