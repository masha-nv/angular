import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumbersChangeService } from 'src/app/services/numbersChange.service';

export interface ILog {
  prevValue: any,
  currValue: any,
  time: Date
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  logs: ILog[] = [];

  constructor(private numbersChangeService: NumbersChangeService){}

  ngOnInit(): void {
    this.numbersChangeService.evtEmitter.subscribe(val => this.logs.push(val))
  }


}
