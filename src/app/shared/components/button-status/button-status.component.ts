import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Observable, of } from 'rxjs';

export enum status  {
  Open = 'Open',
  Closed = 'Closed',
  InProgress = 'InProgress'
}

@Component({
  selector: 'app-button-status',
  templateUrl: './button-status.component.html',
  styleUrls: ['./button-status.component.scss']
})

export class ButtonStatusComponent implements OnInit {
  @Output() onStatusChange = new EventEmitter<string>();

  statusActions$!: Observable<string []>
  constructor() {

  }

  ngOnInit() {
    this.statusActions$ = of(['Open', 'Closed', 'InProgress'])
  }

  changeStatus(status: string) {
    this.onStatusChange.emit(status)
  }
}
