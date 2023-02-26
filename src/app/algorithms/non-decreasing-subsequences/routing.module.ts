import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HistoryItemDetailsResolver } from "src/app/resolvers/history-details-item.resolver";
import { HistoryItemDetailsComponent } from "src/app/shared/history-item-details/history-item-details.component";
import { HistoryComponent } from "src/app/shared/history/history.component";
import { NonDecreasingSubsequencesComponent } from "./non-decreasing-subsequences.component";

const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: '',
            component: HistoryComponent,
          },
          {
            path: 'log/:time',
            component: HistoryItemDetailsComponent,
            resolve: {
              log: HistoryItemDetailsResolver
            }
          }
        ],
        component: NonDecreasingSubsequencesComponent
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [HistoryItemDetailsResolver]
})

export class RoutingModule{}
