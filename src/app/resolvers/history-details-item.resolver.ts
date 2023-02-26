import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { NumbersChangeService } from "../services/numbersChange.service";

interface IHistoryItem {
  prevValue: string,
  currValue: string,
  time: Date,
}

@Injectable()
export class HistoryItemDetailsResolver implements Resolve<IHistoryItem> {
  constructor(private numbersChangeService: NumbersChangeService) {

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<IHistoryItem> {
    return of(this.numbersChangeService.log);
    }
}
