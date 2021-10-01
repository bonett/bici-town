import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rental',
    loadChildren: () =>
      import('./modules/rental/rental.module').then((m) => m.RentalPageModule),
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./modules/inventory/inventory.module').then(
        (m) => m.InventoryPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'rental',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
