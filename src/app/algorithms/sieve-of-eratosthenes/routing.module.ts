import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SieveOfEratosthenesComponent } from "./sieve-of-eratosthenes.component";

const routes: Routes = [
  {
    path: '',
    component: SieveOfEratosthenesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class RoutingModule {}
