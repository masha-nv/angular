import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Injector, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { Subject } from "rxjs";
import { getDynamicSentence } from '../../utility'
import { arrElement, findSubsequences } from "./algorithm";
import { ArrayElementComponent } from "./array-element/array-element.component";
import { solution } from "./solution";
import {Clipboard} from '@angular/cdk/clipboard';
import { ILog } from "src/app/shared/history/history.component";
import { NumbersChangeService } from "src/app/services/numbersChange.service";
import { status } from "src/app/shared/components/button-status/button-status.component";
import { ActivatedRoute } from "@angular/router";

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
    numbersStr = this.numbers.join('')
    current: arrElement[] = [];
    sequences: string[][] = [];
    set: Set<any> = new Set();
    parser = new DOMParser();
    viewSolution: boolean = false;
    handleViewSolution = new Subject()
    isProblemStatmentReady: boolean = false;
    status: string = status.Open


    @ViewChild('container', {static: true}) container!: ElementRef;
    @ViewChild('solution', {static: true}) solution!: ElementRef;
    @ViewChild('input') input!: ElementRef;


    isCopied: boolean = false;
    isEditing: boolean = false;

    @Output()
    numbersChangeEvt: EventEmitter<ILog> = new EventEmitter();

    numbersChangeService!: NumbersChangeService
    constructor(injector: Injector, private clipboard: Clipboard, private route: ActivatedRoute){
      this.numbersChangeService = injector.get(NumbersChangeService)
    }
    ngOnInit(): void {
        this.setProplemStatement();
        this.setSolution()
    }

    handleStatusChange(status: string) {
      this.status = status
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
            const val = this.input.nativeElement.value
            if (val.trim().length)  {
              const prevNumbers = this.arr.map(obj => obj.val).join('');
              this.numbers = String(this.numbersStr).split('').map((el: string) => +el);
              this.updateArray();
              const currentNumbers = this.numbersStr;;
              const time = new Date();
              this.numbersChangeService.emitEvent({prevValue: prevNumbers, currValue: currentNumbers, time })
          }
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
