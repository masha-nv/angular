import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'non-decreasing-subsequences',
    loadChildren: () => import('./algorithms/non-decreasing-subsequences/non-decreasing-subsequences.module').then(m => m.NonDecreasingSubsequencesModule)
  },
  {
    path: 'sieve-of-eratosthenes',
    loadChildren: () => import('./algorithms/sieve-of-eratosthenes/sieve-of-eratosthenes.module').then(m => m.SieveOfEratosthenesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
