import { ChangeDetectorRef, Component, ElementRef, Injector, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { Subject } from "rxjs";
import { getDynamicSentence } from '../../utility'
import { arrElement, findSubsequences } from "./algorithm";
import { ArrayElementComponent } from "./array-element/array-element.component";
import { solution } from "./solution";
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
    selector: 'non-decreasing-subsequences',
    templateUrl: './non-decreasing-subsequences.component.html',
    styleUrls: ['./non-decreasing-subsequences.component.scss']
})

export class NonDecreasingSubsequencesComponent implements OnInit{
    proplemStatement = `Given an integer array nums, return all the different possible non-decreasing subsequences of 
    the given array with at least two elements. You may return the answer in any order.`;

    arr: arrElement[] = [];
    numbers: number[] = [4,6,7,7]
    current: arrElement[] = [];
    sequences: string[][] = [];
    set: Set<any> = new Set();
    parser = new DOMParser();
    viewSolution: boolean = false;
    handleViewSolution = new Subject()
    isProblemStatmentReady: boolean = false;


    @ViewChild('container', {static: true}) container!: ElementRef;
    @ViewChild('solution', {static: true}) solution!: ElementRef;
    @ViewChild('input') input!: ElementRef

    isCopied: boolean = false;
    isEditing: boolean = false

    
    constructor(private injector: Injector, private clipboard: Clipboard){
        
    }
    ngOnInit(): void {
        this.setProplemStatement();
        this.setSolution()
    }

    copyProblemStatement(text: string) {
        this.clipboard.copy(text);
        this.isCopied = true;
        setTimeout(() => {
            this.isCopied = false;
        }, 900)
    }

    setSolution() {
        const document = this.parser.parseFromString(solution, 'text/html');
        this.solution?.nativeElement.append(document.body)

    }

    handleKeyPress(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            this.isEditing = false;
            this.numbers = this.input.nativeElement.value.split('').map((el: string) => +el);
            this.updateArray()
        }
    }

    updateArray() {
        this.arr = [];
        this.set = new Set();
        for (const n of this.numbers) {
            this.arr.push({val: n, isActive: false, isPrevious: false})
        }
        
        this.runAlgo();
    }


    setProplemStatement() {
        getDynamicSentence(this.proplemStatement,this.container, 6).then(()=>{
            this.updateArray()
            this.isProblemStatmentReady = true;
        });
        
    }

    async runAlgo() {
        this.sequences = await findSubsequences(this.arr, this.current, this.set);
    }
}