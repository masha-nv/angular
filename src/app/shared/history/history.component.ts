import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NumbersChangeService } from 'src/app/services/numbersChange.service';

export interface ILog {
  prevValue: string,
  currValue: string,
  time: Date
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  logs: ILog[] = [];

  constructor(private numbersChangeService: NumbersChangeService, private injector: Injector){}

  ngOnInit(): void {
    this.numbersChangeService.evtEmitter.subscribe(val => this.logs.push(val))
  }


}
