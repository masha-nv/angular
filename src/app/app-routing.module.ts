import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WindowCachesComponent } from './random/window-caches.component';
import { UserResolver } from './resolvers/user-resolver';

const routes: Routes = [
  {
    path: 'non-decreasing-subsequences',
    loadChildren: () => import('./algorithms/non-decreasing-subsequences/non-decreasing-subsequences.module').then(m => m.NonDecreasingSubsequencesModule),
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'sieve-of-eratosthenes',
    loadChildren: () => import('./algorithms/sieve-of-eratosthenes/sieve-of-eratosthenes.module').then(m => m.SieveOfEratosthenesModule)
  },
  {
    path: 'find-bunny',
    loadChildren: () => import('./algorithms/find-the-bunny/find-bunny.module').then(m => m.FindBunnyModule)
  },
  {
    path: 'random',
    children: [
      {
        path: 'window-caches',
        component: WindowCachesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class AppRoutingModule { }
