import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILog } from '../history/history.component';

@Component({
  selector: 'app-history-item-details',
  templateUrl: './history-item-details.component.html',
  styleUrls: ['./history-item-details.component.scss']
})
export class HistoryItemDetailsComponent {
  log!: ILog

  constructor(route: ActivatedRoute) {
    this.log = route.snapshot.data['log']
  }
}
