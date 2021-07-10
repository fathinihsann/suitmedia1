import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'screen2',
    loadChildren: () => import('./screen2/screen2.module').then( m => m.Screen2PageModule)
  },
  {
    path: 'screen3',
    loadChildren: () => import('./screen3/screen3.module').then( m => m.Screen3PageModule)
  },
  {
    path: 'screen4',
    loadChildren: () => import('./screen4/screen4.module').then( m => m.Screen4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
