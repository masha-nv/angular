import { EventEmitter, Injectable } from "@angular/core";
import { ILog } from "../shared/history/history.component";

@Injectable({
  providedIn: 'root'
})

export class NumbersChangeService {
  evtEmitter = new EventEmitter<ILog>();

  emitEvent(data: ILog) {
    this.evtEmitter.emit(data);
  }
}
