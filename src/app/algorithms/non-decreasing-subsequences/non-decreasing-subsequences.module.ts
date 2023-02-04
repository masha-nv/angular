import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArrayElementComponent } from "./array-element/array-element.component";
import { NonDecreasingSubsequencesComponent } from "./non-decreasing-subsequences.component";
import { RoutingModule } from "./routing.module";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from "src/app/shared/shared.modue";
import { HistoryComponent } from "src/app/shared/history/history.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [NonDecreasingSubsequencesComponent,
      HistoryComponent,
      ArrayElementComponent],
    imports: [
      CommonModule,
      RoutingModule,
      MatExpansionModule,
      MatTooltipModule,
      MatIconModule,
      MatInputModule,
      SharedModule,
      FormsModule
    ],
    exports: [RouterModule]
})
export class NonDecreasingSubsequencesModule {}
