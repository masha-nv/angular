import { EventEmitter, Injectable } from "@angular/core";
import { ILog } from "../shared/history/history.component";

@Injectable({
  providedIn: 'root'
})

export class NumbersChangeService {
  log!: ILog
  evtEmitter = new EventEmitter<ILog>();

  emitEvent(data: ILog) {
    this.log = data
    this.evtEmitter.emit(data)
  }
}
