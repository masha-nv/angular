import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.modue";
import { RoutingModule } from "./routing.module";
import { SieveOfEratosthenesComponent } from "./sieve-of-eratosthenes.component";

@NgModule({
  imports:[RoutingModule, SharedModule],
  declarations: [SieveOfEratosthenesComponent],
  exports: [],
  providers: []
})

export class SieveOfEratosthenesModule {}
