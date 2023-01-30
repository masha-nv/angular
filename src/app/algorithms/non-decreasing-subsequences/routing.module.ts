import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NonDecreasingSubsequencesComponent } from "./non-decreasing-subsequences.component";

const routs: Routes = [
    {
        path: '',
        component: NonDecreasingSubsequencesComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routs)]
})

export class RoutingModule{}