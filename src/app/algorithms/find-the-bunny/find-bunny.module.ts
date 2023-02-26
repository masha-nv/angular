import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.modue';
import { RoutingModule } from './routing.module';
import { FindBunnyComponent } from './find-bunny.component';
import { CellComponent } from './cell/cell.component'

@NgModule({
  declarations: [FindBunnyComponent, CellComponent],
  imports: [CommonModule,
    RoutingModule,
    SharedModule,
    RouterModule]
})
export class FindBunnyModule {}
