import { Component, OnInit, ViewChild } from "@angular/core";
import { TooltipDirective } from "src/app/shared/directives/tooltip.directive";
import { sieveOfEratosthenes } from "./algorithm";

const N = 100;

export interface INumberItem {
  index: number,
  isPrime: boolean,
  isCurrElement: boolean,
  isMultipleOf: number | null,
  backgroundColor: string
}

@Component({
  selector: 'app-sieve-of-eratosthenes',
  templateUrl: './sieve-of-eratosthenes.component.html',
  styleUrls: ['./sieve-of-eratosthenes.component.scss']
})

export class SieveOfEratosthenesComponent implements OnInit {
  @ViewChild(TooltipDirective) toolTip!: TooltipDirective;
  isRunning:boolean = false;
  numbers: INumberItem[] = []
  constructor() {
  }

  ngOnInit(): void {
      this.setArray();
  }

  setArray() {
    this.numbers = Array.from({length: N+2}, (el, idx) => el = {index: idx < 2 ? 0 : idx, isPrime: true, isCurrElement: false, isMultipleOf: null, backgroundColor: ''});
  }

  handleRunAlgo() {
    this.isRunning = true;
    this.setArray();
    this.runAlgo();
  }

  async runAlgo() {
    await sieveOfEratosthenes(this.numbers);
    this.isRunning = false;
  }
}
