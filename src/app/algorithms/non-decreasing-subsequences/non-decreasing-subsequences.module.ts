import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ArrayElementComponent } from "./array-element/array-element.component";
import { NonDecreasingSubsequencesComponent } from "./non-decreasing-subsequences.component";
import { RoutingModule } from "./routing.module";

@NgModule({
    declarations: [NonDecreasingSubsequencesComponent, ArrayElementComponent],
    imports: [CommonModule, RoutingModule],
    exports: [RouterModule]
})
export class NonDecreasingSubsequencesModule {}