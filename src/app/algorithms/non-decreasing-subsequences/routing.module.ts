import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NonDecreasingSubsequencesComponent } from "./non-decreasing-subsequences.component";

const routes: Routes = [
    {
        path: '',
        component: NonDecreasingSubsequencesComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class RoutingModule{}
