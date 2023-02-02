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


@NgModule({
    declarations: [NonDecreasingSubsequencesComponent, ArrayElementComponent],
    imports: [CommonModule, RoutingModule, MatExpansionModule, MatTooltipModule, MatIconModule, MatInputModule],
    exports: [RouterModule]
})
export class NonDecreasingSubsequencesModule {}