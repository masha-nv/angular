import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { FindBunnyComponent } from './find-bunny.component'

const routes: Routes = [
  {
    path: '',
    component: FindBunnyComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class RoutingModule {}
