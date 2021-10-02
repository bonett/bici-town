import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inventory',
    loadChildren: () =>
      import('./modules/inventory/inventory.module').then(
        (m) => m.InventoryPageModule
      ),
  },
  {
    path: 'historial',
    loadChildren: () =>
      import('./modules/historial/historial.module').then(
        (m) => m.HistorialPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'inventory',
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
