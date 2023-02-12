import { NgModule } from "@angular/core";
import { TooltipDirective } from "./directives/tooltip.directive";
import { ButtonExpandComponent } from './components/button-expand/button-expand.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { ButtonStatusComponent } from "./components/button-status/button-status.component";
import { MatMenuModule } from "@angular/material/menu"
import { CommonModule } from "@angular/common";
import { SplitCapsPipe } from './pipes/split-caps.pipe';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    TooltipDirective, ButtonExpandComponent, ButtonStatusComponent, ButtonStatusComponent, SplitCapsPipe
  ],
  imports: [
    MatButtonToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule, MatExpansionModule, MatMenuModule, CommonModule],
  exports: [TooltipDirective, ButtonExpandComponent, ButtonStatusComponent, SplitCapsPipe, CommonModule, MatButtonModule],
  providers: []

})
export class SharedModule {}
